import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module.js";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // 1. Enable CORS for your Vue frontend
    app.enableCors({
        origin: true, // In production, replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });
    const config = new DocumentBuilder()
        .setTitle("ShifoCRM API Documentation")
        .setDescription("API documentation for the ShifoCRM application")
        .setVersion("1.0")
        .build();
    // 2. Set global prefix (e.g., http://localhost:3000/api/patients)
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    app.setGlobalPrefix("api");
    SwaggerModule.setup("docs", app, documentFactory);

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
