import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dtos/CreateUser.dto";
import {RolesService} from "../roles/roles.service";
import {Roles} from "../roles/roles.enum";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User,
        private rolesService: RolesService,
    ) {
    }

    async getUserByEmail(email: string) {
        return await this.userModel.findOne({where: {email}, include: {all: true}});
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
}
