import { Injectable } from '@nestjs/common';
import Mail from "nodemailer/lib/mailer";
import {createTransport} from "nodemailer";
import * as process from "process";

@Injectable()
export class MailService {
    private nodemailerTransport: Mail;
    constructor() {
        this.nodemailerTransport = createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            }
        });
    }

    sendMail(options: Mail.Options) {
        return this.nodemailerTransport.sendMail(options);
    }
}
