import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {UserModule} from './users/user.module';
import {RolesModule} from './roles/roles.module';
import * as process from "process";
import {UserRolesModel} from "./roles/user-roles.model";
import {Role} from "./roles/roles.model";
import {User} from "./users/user.model";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User, Role, UserRolesModel],
          autoLoadModels: true,
      }),
      AuthModule,
      UserModule,
      RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
