import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dtos/CreateUser.dto";
import {RolesService} from "../roles/roles.service";
import {Roles} from "../roles/roles.enum";
import {UserRolesModel} from "../roles/user-roles.model";
import {MailService} from "../mail/mail.service";
import {Cron, SchedulerRegistry, Timeout} from "@nestjs/schedule";
import {CronJob} from "cron";
import * as process from "process";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User,
                @InjectModel(UserRolesModel) private userRolesModel: typeof UserRolesModel,
                private rolesService: RolesService,
                private mailService: MailService,
                private schedulerRegistry: SchedulerRegistry
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
            const confirmationLink = this.mailService.generateConfirmationLink()
            await user.update({confirmationLink})
            await this.mailService.sendConfirmationMail({
                from: process.env.EMAIL_USER,
                to: user.email,
                html: `<a href="http://localhost:5000/users/activate/${confirmationLink}">http://localhost:5000/users/activate/${confirmationLink}</a>`
            })
            const timeout = setTimeout(() => {this.deleteOnActivationLinkExpired(confirmationLink, timeout)}, 20000)
            return user;
        }
        throw new HttpException('There is no such role', HttpStatus.NOT_FOUND);
    }

    async setRefreshToken(userId: number, token: string | null) {
        const candidate = await this.getUserById(userId);
        console.log(userId)
        if (candidate) {
            await candidate.update({refreshToken: token});
            candidate.refreshToken = token
            return token;
        }
        throw new HttpException(`User with such id doesn't exist`, HttpStatus.NOT_FOUND);
    }

    async deleteOnActivationLinkExpired(confirmationLink: string, timeout: NodeJS.Timeout) {
        clearTimeout(timeout)
        const candidate = await User.findOne({where: {confirmationLink}});
        if (candidate) {
            if (!candidate.isConfirmed) {
                await this.deleteByConfirmationLink(confirmationLink);
            } else console.log('fine')
        } else throw new HttpException('Incorrect link', HttpStatus.NOT_FOUND);
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

    async deleteByConfirmationLink(confirmationLink: string) {
        const candidate = await this.userModel.findOne({where: {confirmationLink}, include: {all: true}});
        if (candidate) {
            const userRoles = await this.userRolesModel.findAll({where: {userId: candidate.id}});
            userRoles.forEach(userRole => {
                userRole.destroy();
            })
            await candidate.destroy()
            return candidate;
        }
        throw new HttpException(`User with such confirmation link doesn't exist`, HttpStatus.NOT_FOUND)
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

    async activate(confirmationLink: string) {
        const user = await this.userModel.findOne({where: {confirmationLink}});

        if (!user) {
            throw new HttpException('Not found user for this confirmation link', HttpStatus.NOT_FOUND);
        }

        await user.update({isConfirmed: true});
        user.isConfirmed = true
        return user;
    }
}
