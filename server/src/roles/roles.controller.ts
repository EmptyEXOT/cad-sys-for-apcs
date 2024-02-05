import {Body, Controller, Get, Param, Post, Request} from '@nestjs/common';
import {CreateRoleDto} from "./dtos/CreateRole.dto";
import {RolesService} from "./roles.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {Role} from "./roles.model";

@ApiTags('roles')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {
    }

    @ApiOperation({summary: 'Creating new role'})
    @ApiResponse({status: 201, type: [Role]})
    @ApiBody({type: CreateRoleDto})
    @Post()
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto)
    }

    @ApiOperation({summary: `Getting role by it's name`})
    @ApiResponse({status: 200, type: Role})
    @Get(':value')
    getRoleByValue(@Param('value') value: string) {
        return this.rolesService.getByValue(value)
    }

    @ApiOperation({summary: 'Getting all roles'})
    @ApiResponse({status: 200, type: [Role]})
    @Get()
    getAll() {
        return this.rolesService.getAll();
    }
}
