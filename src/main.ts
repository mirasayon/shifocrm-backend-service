import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module.js";
import { AppLogger } from "./logger/app-logger.js";
import { PrismaExceptionFilter } from "./common/filters/prisma-exception.filter.js";

async function bootstrap() {
    const bootstrapLogger = new AppLogger();
    const app = await NestFactory.create(AppModule, { logger: bootstrapLogger });

    app.enableShutdownHooks();

    app.enableCors({
        origin: true, // In production, replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });
    const config = new DocumentBuilder()
        .setTitle("ShifoCRM API Documentation")
        .setDescription(
            [
                "API documentation for the ShifoCRM application.",
                "",
                "Notes:",
                "- Base prefix: `/api`",
                "- Auth: `POST /api/auth/login` and then `Authorization: Bearer <token>`",
                "- Request tracing: every response includes `x-request-id`",
            ].join("\n"),
        )
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config, { deepScanRoutes: true });
    app.setGlobalPrefix("api");
    SwaggerModule.setup("docs", app, document, {
        customSiteTitle: "ShifoCRM API Docs",
        swaggerOptions: {
            persistAuthorization: true,
            displayRequestDuration: true,
            tagsSorter: "alpha",
            operationsSorter: "alpha",
        },
    });

    // 3. Enable auto-validation for DTOs
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    app.useGlobalFilters(new PrismaExceptionFilter());
    await app.listen(process.env.PORT || 4404, process.env.HOST || "localhost");
    bootstrapLogger.log(`App is running on: ${await app.getUrl()}`);
}
bootstrap();
