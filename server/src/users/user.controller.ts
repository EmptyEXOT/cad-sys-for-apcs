import {Controller, Get, Param, Req} from '@nestjs/common';
import {UserService} from "./user.service";

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

    @Get()
    findAll() {
        return this.userService.getAll();
    }
}
