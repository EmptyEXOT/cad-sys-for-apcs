import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {AccessTokenGuard} from "../auth/guards/access-token-guard.service";
import {AddRoleDto} from "./dtos/addRoleDto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get(':name')
    findOneByName(@Param('name') name: string) {
        return this.userService.getUserByName(name)
    }

    @Get(':email')
    findOneByEmail(@Param('email') email: string) {
        return this.userService.getUserByEmail(email)
    }

    @Get(':id')
    findOneById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Get()
    findAll() {
        return this.userService.getAll();
    }

    @Delete(':name')
    deleteByUsername(@Param('name') name: string) {
        return this.userService.deleteByUsername(name)
    }

    @Post('addRole')
    addRole(@Body() addRoleDto: AddRoleDto) {
        return this.userService.addRoleByName(addRoleDto.name, addRoleDto.role);
    }
}
