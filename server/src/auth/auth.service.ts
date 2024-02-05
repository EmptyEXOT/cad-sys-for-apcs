import {ForbiddenException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from "../users/dtos/CreateUser.dto";
import {UserService} from "../users/user.service";
import {compare, hash} from "bcryptjs";
import {User} from "../users/user.model";
import {JwtService} from "@nestjs/jwt";
import {AuthDto} from "./dtos/Auth.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {
    }

    async register(createUserDto: CreateUserDto) {
        if (await this.userService.getUserByEmail(createUserDto.email)) {
            throw new HttpException('User with such an email already exist', HttpStatus.CONFLICT);
        }
        if (await this.userService.getUserByName(createUserDto.name)) {
            throw new HttpException('User with such a username already exist', HttpStatus.CONFLICT);
        }
        const hashPassword = await hash(createUserDto.password, 8);
        const newUser = await this.userService.create({...createUserDto, password: hashPassword})
        const tokens = await this.getTokens(newUser.id, createUserDto.name);
        await this.userService.setRefreshToken(newUser.id, tokens.refreshToken);
        return tokens;
    }

    async login(authDto: AuthDto) {
        const user = await this.validateUser(authDto.username, authDto.password);
        if (!user) {
            throw new HttpException('Incorrect username or password', HttpStatus.BAD_REQUEST);
        }
        const tokens = await this.getTokens(user.id, user.name);
        console.log(user.id)
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }

    async logout(userId: number) {
        return this.userService.setRefreshToken(userId, null);
    }

    async validateUser(username: string, password: string) {
        const user = await this.userService.getUserByName(username);
        if (user && (await compare(password, user.password))) {
            return user
        }
        return null;
    }

    async refreshTokens(userId: number, refreshToken: string) {
        const candidate = await this.userService.getUserById(userId);

        if (!candidate || !candidate.refreshToken) {
            throw new ForbiddenException('Access Denied');
        }

        const refreshTokenMatch = candidate.refreshToken === refreshToken;
        if (!refreshTokenMatch) throw new ForbiddenException('Access Denied');
        const tokens = await this.getTokens(candidate.id, candidate.name);
        await this.updateRefreshToken(candidate.id, tokens.refreshToken);
        return tokens;
    }

    async updateRefreshToken(userId: number, refreshToken: string) {
        return await this.userService.setRefreshToken(userId, refreshToken);
    }

    async getTokens(userId: number, username: string) {
        return {
            accessToken: this.jwtService.sign({
                    sub: userId,
                    username,
                },
                {
                    expiresIn: '60s',
                    secret: `${process.env.SECRET_KEY}`
                }),
            refreshToken: this.jwtService.sign({
                    sub: userId,
                    username,
                },
                {
                    expiresIn: '7d',
                    secret: `${process.env.SECRET_KEY}`
                })
        };
    }
}
