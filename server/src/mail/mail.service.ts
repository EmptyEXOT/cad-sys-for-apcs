import { Injectable } from '@nestjs/common';
import Mail from "nodemailer/lib/mailer";
import {createTransport} from "nodemailer";
import * as process from "process";
import {v4} from "uuid";

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

    generateConfirmationLink() {
        return v4();
    }

    sendConfirmationMail(options: Mail.Options) {
        return this.nodemailerTransport.sendMail(options);
    }
}
