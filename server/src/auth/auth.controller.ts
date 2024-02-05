// @ts-ignore

import {Body, Controller, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {Request} from "express";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dtos/CreateUser.dto";
import {RefreshTokenGuard} from "./guards/refresh-token-guard.service";
import {AuthDto} from "./dtos/Auth.dto";
import {JwtPayload} from "./strategies/access-jwt-strategy";
import {AccessTokenGuard} from "./guards/access-token-guard.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.authService.register(createUserDto);
    }

    @Post('login')
    async login(@Body() authDto: AuthDto) {
        return await this.authService.login(authDto)
    }

    @UseGuards(AccessTokenGuard)
    @Get('logout')
    logout(@Req() req: any) {
        console.log(req)
        return this.authService.logout(req.user['sub']);
    }

    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    async refreshToken(@Req() req: any) {
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken']
        return this.authService.refreshTokens(userId, refreshToken);
    }
}
