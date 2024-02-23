import {Controller, Get, Post} from '@nestjs/common';
import {MailService} from "./mail.service";
import * as process from "process";

@Controller('mail')
export class MailController {
    constructor(private mailService: MailService) {
    }

    @Get('send')
    async sendMail() {
        await this.mailService.sendConfirmationMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            text: 'test',
        })
    }
}
