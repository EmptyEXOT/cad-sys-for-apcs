import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from "process";
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const PORT = process.env.PORT || 5000;
    try {
        await app.listen(PORT, () => {
            console.log(`server running on port: ${process.env.PORT}`)
        });
    } catch (e) {
        console.log(e)
    }
}

bootstrap();
