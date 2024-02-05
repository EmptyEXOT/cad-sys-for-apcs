import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {AccessTokenGuard} from "../auth/guards/access-token-guard.service";
import {AddRoleDto} from "./dtos/addRoleDto";
import {ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {DataTypes} from "sequelize";
import {DataType} from "sequelize-typescript";
import {Role} from "../roles/roles.model";
import {CreateRoleDto} from "../roles/dtos/CreateRole.dto";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @ApiOperation({summary: 'Getting user by his name'})
    @ApiResponse({status: 200, type: User || null})
    @ApiParam({name: "name", description: 'user name'})
    @Get(':name')
    findOneByName(@Param('name') name: string) {
        return this.userService.getUserByName(name)
    }

    @ApiOperation({summary: 'Getting user by his email'})
    @ApiResponse({status: 200, type: User || null})
    @ApiParam({name: "email", description: 'user email'})
    @Get(':email')
    findOneByEmail(@Param('email') email: string) {
        return this.userService.getUserByEmail(email)
    }

    @ApiOperation({summary: 'Getting user by his id'})
    @ApiResponse({status: 200, type: User || null})
    @ApiParam({name: "id", description: 'user id'})
    @Get(':id')
    findOneById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @ApiOperation({summary: 'Getting all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    findAll() {
        return this.userService.getAll();
    }

    @ApiOperation({summary: 'Deleting user by name'})
    @ApiResponse({status: 200, type: User, description: 'Return deleted user if successfully'})
    @ApiParam({name: "name", description: 'user name'})
    @Delete(':name')
    deleteByUsername(@Param('name') name: string) {
        return this.userService.deleteByUsername(name)
    }

    @ApiOperation({summary: 'Add role to user'})
    @ApiResponse({status: 201, type: User})
    @ApiBody({type: AddRoleDto})
    @Post('addRole')
    addRole(@Body() addRoleDto: AddRoleDto) {
        return this.userService.addRoleByName(addRoleDto.name, addRoleDto.role);
    }
}
