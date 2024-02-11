import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from "process";
import {NestExpressApplication} from "@nestjs/platform-express";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true});

    const config = new DocumentBuilder()
        .setTitle('CAD System For APCS')
        .setDescription('The CAD Sys For APCS API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

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
