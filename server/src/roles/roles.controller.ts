import {Body, Controller, Get, Param, Post, Request} from '@nestjs/common';
import {CreateRoleDto} from "./dtos/CreateRole.dto";
import {RolesService} from "./roles.service";

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {
    }

    @Post()
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto)
    }

    @Get(':value')
    getRoleByValue(@Param('value') value: string) {
        return this.rolesService.getByValue(value)
    }

    @Get()
    getAll() {
        return this.rolesService.getAll();
    }
}
