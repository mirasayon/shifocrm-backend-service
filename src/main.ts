import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module.js";
import { AppLogger } from "./logger/app-logger.js";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { logger: new AppLogger() });

    app.enableCors({
        origin: true, // In production, replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });
    const config = new DocumentBuilder()
        .setTitle("ShifoCRM API Documentation")
        .setDescription("API documentation for the ShifoCRM application")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const documentFactory = () =>
        SwaggerModule.createDocument(app, config, {
            deepScanRoutes: true,
        });
    app.setGlobalPrefix("api");
    SwaggerModule.setup("docs", app, documentFactory, {
        swaggerOptions: { persistAuthorization: true },
    });

    // 3. Enable auto-validation for DTOs
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );
    await app.listen(process.env.PORT || 4404, process.env.HOST || "localhost");
    console.log(`App is running on: ${await app.getUrl()}`);
}
bootstrap();
