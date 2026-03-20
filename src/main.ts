console.time("Started up in");
import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module.js";
import { AppLogger } from "./logger/app-logger.js";
import { PrismaExceptionFilter } from "./common/filters/prisma-exception.filter.js";
// import helmet from "helmet";
async function bootstrap() {
    const bootstrapLogger = new AppLogger();
    const app = await NestFactory.create(AppModule, { logger: bootstrapLogger });

    app.enableShutdownHooks();

    app.setGlobalPrefix("api");
    app.enableCors({
        origin: true, // In production, replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });
    const config = new DocumentBuilder()
        .setTitle("ShifoCRM Backend API Documentation")
        .setDescription(
            [
                "API documentation for the ShifoCRM application.",
                "",
                "Notes:",
                "",
                "- Base prefix: `/api`",
                "",
                "- Auth: `POST /api/auth/login` and then `Authorization: Bearer <token>`",
                "",
                "- Request tracing: every response includes `x-request-id`",
                "",
            ].join("\n"),
        )
        .setVersion("1.0")
        .setContact("Developer", "https://mirasayon.com", "mirasayon@ya.ru")
        .addBearerAuth()
        .addTag("App", "Health checks and misc endpoints")
        .addTag("Auth", "Authentication and JWT issuance")
        .addTag("Clinic", "Clinic settings and profile")
        .addTag("Doctors", "Clinic doctors and profile management")
        .addTag("Patients", "Patients CRUD (clinic-scoped)")
        .addTag("Visits", "Visits CRUD and billing workflow (clinic-scoped)")
        .addTag("Payments", "Payments and visit billing recalculation (clinic-scoped)")
        .addTag("Inventory", "Inventory items, movements, expenses, consumptions (clinic-scoped)")
        .addTag("Visit Services", "Services attached to visits (clinic-scoped)")
        .addTag("Odontogram", "Odontogram snapshots per visit (clinic-scoped)")
        .build();
    const document = SwaggerModule.createDocument(app, config, { deepScanRoutes: true });
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
    await app.listen(process.env.PORT || 3000, process.env.HOST || "0.0.0.0");
    bootstrapLogger.log(`App is running on: ${await app.getUrl()}`);
    bootstrapLogger.log(`Swagger docs available at: ${await app.getUrl()}/docs`);
    bootstrapLogger.log(`Environment: ${process.env.NODE_ENV}, file: ${process.env.ENV_FILE}`);
}
await bootstrap();
console.timeEnd("Started up in");
