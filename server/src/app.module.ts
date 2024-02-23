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
import { MailModule } from './mail/mail.module';
import {ScheduleModule} from "@nestjs/schedule";
import { ScheduledTaskModule } from './scheduled-task/scheduled-task.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      ScheduleModule.forRoot(),
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
      MailModule,
      ScheduledTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
