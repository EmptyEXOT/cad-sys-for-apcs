import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {CreateRoleDto} from "./dtos/CreateRole.dto";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleModel: typeof Role) {
    }

    async getByValue(value: string) {
        return await this.roleModel.findOne({where: {value}});
    }

    async create(createRoleDto: CreateRoleDto) {
        const candidate = await this.getByValue(createRoleDto.value)
        if (candidate) {
            throw new HttpException('Such a role already exists', HttpStatus.CONFLICT)
        }
        return await this.roleModel.create(createRoleDto)
    }

    async getAll() {
        return await this.roleModel.findAll();
    }
}
