import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {JwtModule} from "@nestjs/jwt";
import {LocalStrategy} from "./strategies/local.strategy";
import * as process from "process";
import {UserModule} from "../users/user.module";
import {PassportModule} from "@nestjs/passport";
import {RolesModule} from "../roles/roles.module";
import {AccessJwtStrategy} from "./strategies/access-jwt-strategy";
import {RefreshJwtStrategy} from "./strategies/refresh-jwt.strategy";
import {UserRolesModel} from "../roles/user-roles.model";

@Module({
    providers: [AuthService, UserService, LocalStrategy, UserService, AccessJwtStrategy, RefreshJwtStrategy],
    controllers: [AuthController],
    imports: [
        SequelizeModule.forFeature([User, UserRolesModel]),
        JwtModule.register({
            secret: `${process.env.SECRET_KEY}`,
            signOptions: {expiresIn: '30s'},
        }),
        forwardRef(() => UserModule),
        PassportModule,
        RolesModule,
    ],
    exports: [AuthService, JwtModule]
})
export class AuthModule {
}
