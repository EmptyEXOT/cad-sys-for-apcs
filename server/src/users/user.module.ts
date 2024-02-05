import {forwardRef, Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {Role} from "../roles/roles.model";
import {UserRolesModel} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [UserService],
    controllers: [UserController],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRolesModel]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UserService,
    ]
})
export class UserModule {
}
