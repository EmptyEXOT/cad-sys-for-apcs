import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dtos/CreateUser.dto";
import {RolesService} from "../roles/roles.service";
import {Roles} from "../roles/roles.enum";
import {UserRolesModel} from "../roles/user-roles.model";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User,
                @InjectModel(UserRolesModel) private userRolesModel: typeof UserRolesModel,
                private rolesService: RolesService,
    ) {
    }

    async getUserByEmail(email: string) {
        return await this.userModel.findOne({where: {email}, include: {all: true}});
    }

    async getUserById(id: number) {
        return await this.userModel.findByPk(id);
    }

    async getUserByName(name: string) {
        return await this.userModel.findOne({where: {name}, include: {all: true}});
    }

    async getAll() {
        return await this.userModel.findAll({include: {all: true}});
    }

    async create(userDto: CreateUserDto) {
        const user = await this.userModel.create(userDto);
        const role = await this.rolesService.getByValue(Roles.User);

        if (role) {
            await user.$set('roles', [role.id])
            user.roles = [role];
            return user;
        }
        throw new HttpException('There is no such role', HttpStatus.NOT_FOUND);
    }

    async setRefreshToken(userId: number, token: string | null) {
        const candidate = await this.getUserById(userId);
        console.log(userId)
        if (candidate) {
            console.log(token);
            console.log(candidate.id)
            await candidate.update({refreshToken: token});
            candidate.refreshToken = token
            return token;
        }
        throw new HttpException(`User with such id doesn't exist`, HttpStatus.NOT_FOUND);
    }

    async deleteByUsername(name: string) {
        const candidate = await this.userModel.findOne({where: {name}, include: {all: true}});
        if (candidate) {
            const userRoles = await this.userRolesModel.findAll({where: {userId: candidate.id}});
            userRoles.forEach(userRole => {
                userRole.destroy();
            })
            await candidate.destroy()
            return candidate;
        }
        throw new HttpException(`User with such name doesn't exist`, HttpStatus.NOT_FOUND)
    }

    async addRoleByName(name: string, role: string) {
        const candidate = await this.userModel.findOne({where: {name}});
        const newRole = await this.rolesService.getByValue(role);
        if (candidate && newRole) {
            await candidate.$add('roles', [newRole.id]);
            return candidate;
        }
        throw new HttpException(`User with such name or role doesn't exist`, HttpStatus.NOT_FOUND)
    }
}
