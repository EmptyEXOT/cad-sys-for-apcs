import {Body, Controller, Get, Post, Req, UseGuards, Request} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dtos/CreateUser.dto";
import {RefreshTokenGuard} from "./guards/refresh-token-guard.service";
import {AuthDto} from "./dtos/Auth.dto";
import {AccessTokenGuard} from "./guards/access-token-guard.service";
import {ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags, OmitType} from "@nestjs/swagger";
import {TokensDto} from "./dtos/Tokens.dto";
import {DataTypes} from "sequelize";



@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @ApiOperation({summary: 'Sign Up endpoint'})
    @ApiResponse({status: 201, type: TokensDto})
    @ApiBody({type: CreateUserDto})
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<TokensDto> {
        return await this.authService.register(createUserDto);
    }

    @ApiOperation({summary: 'Sign In endpoint'})
    @ApiResponse({status: 201, type: TokensDto})
    @ApiBody({type: AuthDto})
    @Post('login')
    async login(@Body() authDto: AuthDto): Promise<TokensDto> {
        return await this.authService.login(authDto)
    }

    @ApiOperation({summary: 'Log Out endpoint'})
    @UseGuards(AccessTokenGuard)
    @Get('logout')
    logout(@Req() req: any) {
        return this.authService.logout(req.user['sub']);
    }

    @ApiOperation({summary: 'Refresh Tokens endpoint'})
    @ApiResponse({status: 200, type: TokensDto})
    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    async refreshToken(@Req() req: any) {
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken']
        return this.authService.refreshTokens(userId, refreshToken);
    }
}
