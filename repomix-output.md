# Directory Structure

```
.env.example
.gitignore
bruno/ShifoCRM-Backend/.gitignore
bruno/ShifoCRM-Backend/opencollection.yml
bruno/ShifoCRM-Backend/Ping.yml
docker-compose.yml
nest-cli.json
package.json
prettier.config.ts
prisma.config.ts
prisma/schema.prisma
README.md
repomix-output.txt
src/app.controller.ts
src/app.module.ts
src/app.service.ts
src/auth/auth.controller.ts
src/auth/auth.module.ts
src/auth/auth.service.ts
src/auth/dto/login.dto.ts
src/auth/guards/jwt-auth.guard.ts
src/auth/guards/roles.guard.ts
src/auth/jwt.strategy.ts
src/inventory/inventory.controller.ts
src/inventory/inventory.module.ts
src/inventory/inventory.service.ts
src/main.ts
src/patients/patients.controller.ts
src/patients/patients.module.ts
src/patients/patients.service.ts
src/payments/payments.controller.ts
src/payments/payments.module.ts
src/payments/payments.service.ts
src/prisma/prisma.module.ts
src/prisma/prisma.service.ts
src/scripts/seed.ts
src/visits/dto/visit.dto.ts
src/visits/visits.controller.ts
src/visits/visits.module.ts
src/visits/visits.service.ts
tsconfig.build.json
tsconfig.json
```

# Files

## File: repomix-output.txt

````
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

================================================================
File Summary
================================================================

Purpose:
--------
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

File Format:
------------
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A separator line (================)
  b. The file path (File: path/to/file)
  c. Another separator line
  d. The full contents of the file
  e. A blank line

Usage Guidelines:
-----------------
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

Notes:
------
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)


================================================================
Directory Structure
================================================================
.env.example
.gitignore
bruno/ShifoCRM-Backend/.gitignore
bruno/ShifoCRM-Backend/opencollection.yml
bruno/ShifoCRM-Backend/Ping.yml
docker-compose.yml
nest-cli.json
package.json
prettier.config.ts
prisma.config.ts
prisma/schema.prisma
README.md
repomix-output.xml
src/app.controller.ts
src/app.module.ts
src/app.service.ts
src/auth/auth.controller.ts
src/auth/auth.module.ts
src/auth/auth.service.ts
src/auth/dto/login.dto.ts
src/auth/guards/jwt-auth.guard.ts
src/auth/guards/roles.guard.ts
src/auth/jwt.strategy.ts
src/inventory/inventory.controller.ts
src/inventory/inventory.module.ts
src/inventory/inventory.service.ts
src/main.ts
src/patients/patients.controller.ts
src/patients/patients.module.ts
src/patients/patients.service.ts
src/payments/payments.controller.ts
src/payments/payments.module.ts
src/payments/payments.service.ts
src/prisma/prisma.module.ts
src/prisma/prisma.service.ts
src/scripts/seed.ts
src/visits/dto/visit.dto.ts
src/visits/visits.controller.ts
src/visits/visits.module.ts
src/visits/visits.service.ts
tsconfig.build.json
tsconfig.json

================================================================
Files
================================================================

================
File: repomix-output.xml
================
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.env.example
.gitignore
bruno/ShifoCRM-Backend/.gitignore
bruno/ShifoCRM-Backend/opencollection.yml
bruno/ShifoCRM-Backend/Ping.yml
docker-compose.yml
nest-cli.json
package.json
prettier.config.ts
prisma.config.ts
prisma/schema.prisma
README.md
src/app.controller.ts
src/app.module.ts
src/app.service.ts
src/auth/auth.controller.ts
src/auth/auth.module.ts
src/auth/auth.service.ts
src/auth/dto/login.dto.ts
src/auth/guards/jwt-auth.guard.ts
src/auth/guards/roles.guard.ts
src/auth/jwt.strategy.ts
src/inventory/inventory.controller.ts
src/inventory/inventory.module.ts
src/inventory/inventory.service.ts
src/main.ts
src/patients/patients.controller.ts
src/patients/patients.module.ts
src/patients/patients.service.ts
src/payments/payments.controller.ts
src/payments/payments.module.ts
src/payments/payments.service.ts
src/prisma/prisma.module.ts
src/prisma/prisma.service.ts
src/scripts/seed.ts
src/visits/dto/visit.dto.ts
src/visits/visits.controller.ts
src/visits/visits.module.ts
src/visits/visits.service.ts
tsconfig.build.json
tsconfig.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".env.example">
PORT="3000"
NODE_ENV="development"
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="your_super_secret_jwt_key_change_this_in_production"
FRONTEND_URL="http://localhost:3000"
</file>

<file path="bruno/ShifoCRM-Backend/.gitignore">
# Secrets
.env*

# Dependencies
node_modules

# OS files
.DS_Store
Thumbs.db
</file>

<file path="bruno/ShifoCRM-Backend/opencollection.yml">
opencollection: 1.0.0

info:
  name: ShifoCRM-Backend
bundled: false
extensions:
  bruno:
    ignore:
      - node_modules
      - .git
</file>

<file path="bruno/ShifoCRM-Backend/Ping.yml">
info:
  name: Ping
  type: http
  seq: 1

http:
  method: GET
  url: ""
  auth: inherit

settings:
  encodeUrl: true
  timeout: 0
  followRedirects: true
  maxRedirects: 5
</file>

<file path="docker-compose.yml">
services:
    db:
        image: postgres:16-alpine
        container_name: shifocrm-db
        restart: always
        environment:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: yourpassword
            POSTGRES_DB: shifocrm
        ports:
            - '5432:5432'
        volumes:
            - postgres_data:/var/lib/postgresql/data

volumes:
    postgres_data:
</file>

<file path="prettier.config.ts">
import type { Config } from "prettier";
export default {
    semi: true,
    singleQuote: false,
    trailingComma: "all",
    printWidth: 150,
    tabWidth: 4,
    useTabs: false,
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
} satisfies Config;
</file>

<file path="prisma.config.ts">
// This file was generated by Prisma, and assumes you have installed the following:
// npm install --save-dev prisma dotenv
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
</file>

<file path="README.md">
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
</file>

<file path="tsconfig.build.json">
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}
</file>

<file path="nest-cli.json">
{
    "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "src",
    "compilerOptions": {
        "builder": "tsc",
        "deleteOutDir": true
    }
}
</file>

<file path="src/app.controller.ts">
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
</file>

<file path="src/app.module.ts">
// src/app.module.ts
import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { InventoryModule } from "./inventory/inventory.module.js";
import { PatientsModule } from "./patients/patients.module.js";
import { PaymentsModule } from "./payments/payments.module.js";
import { VisitsModule } from "./visits/visits.module.js";

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        VisitsModule,
        InventoryModule,
        PatientsModule,
        PaymentsModule, // Register it here
    ],
})
export class AppModule {}
</file>

<file path="src/app.service.ts">
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }
}
</file>

<file path="src/auth/auth.controller.ts">
// src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @HttpCode(HttpStatus.OK)
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
</file>

<file path="src/auth/dto/login.dto.ts">
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty({ message: "Email yoki telefon raqami kiritilishi shart" })
    identifier: string;

    @IsString()
    @IsNotEmpty({ message: "Parol kiritilishi shart" })
    @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
    password: string;
}
</file>

<file path="src/auth/guards/jwt-auth.guard.ts">
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    handleRequest(err: any, user: any, info: any) {
        // You can throw a custom exception or return the user
        if (err || !user) {
            throw err || new UnauthorizedException("Siz ushbu amalni bajarish uchun tizimga kirmagansiz");
        }
        return user;
    }
}
</file>

<file path="src/inventory/inventory.module.ts">
import { Module } from "@nestjs/common";
import { InventoryController } from "./inventory.controller.js";
import { InventoryService } from "./inventory.service.js";

@Module({
    controllers: [InventoryController],
    providers: [InventoryService],
})
export class InventoryModule {}
</file>

<file path="src/main.ts">
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module.js";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 1. Enable CORS for your Vue frontend
    app.enableCors({
        origin: true, // In production, replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });

    // 2. Set global prefix (e.g., http://localhost:3000/api/patients)
    app.setGlobalPrefix("api");

    // 3. Enable auto-validation for DTOs
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.listen(process.env.PORT || 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
</file>

<file path="src/patients/patients.module.ts">
import { Module } from "@nestjs/common";
import { PatientsController } from "./patients.controller.js";
import { PatientsService } from "./patients.service.js";

@Module({
    providers: [PatientsService],
    controllers: [PatientsController],
})
export class PatientsModule {}
</file>

<file path="src/payments/payments.controller.ts">
import { Controller, Get } from "@nestjs/common";
import type { PaymentsService } from "./payments.service.js";

@Controller("payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Get()
    findAll() {
        return this.paymentsService.findAll();
    }
}
</file>

<file path="src/payments/payments.module.ts">
import { Module } from "@nestjs/common";
import { PaymentsController } from "./payments.controller.js";
import { PaymentsService } from "./payments.service.js";
@Module({
    controllers: [PaymentsController],
    providers: [PaymentsService],
})
export class PaymentsModule {}
</file>

<file path="src/prisma/prisma.module.ts">
import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service.js";

@Global() // This makes PrismaService available everywhere without re-importing the module
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
</file>

<file path="src/visits/visits.module.ts">
import { Module } from "@nestjs/common";
import { VisitsController } from "./visits.controller.js";
import { VisitsService } from "./visits.service.js";

@Module({
    controllers: [VisitsController],
    providers: [VisitsService],
})
export class VisitsModule {}
</file>

<file path="src/auth/auth.module.ts">
// src/auth/auth.module.ts
import { PrismaModule } from "../prisma/prisma.module.js";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { JwtStrategy } from "./jwt.strategy.js";

@Module({
    imports: [
        PrismaModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || "super-secret-key", // Use .env in production
            signOptions: { expiresIn: "1d" },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
</file>

<file path="src/auth/auth.service.ts">
// src/auth/auth.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { LoginDto } from "./dto/login.dto.js";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto) {
        // 1. Find user by email or phone
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: loginDto.identifier }, { phone: loginDto.identifier }],
                isActive: true,
            },
        });

        if (!user) throw new UnauthorizedException("Invalid credentials");

        // 2. Verify password (assuming passwords are hashed in the DB)
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) throw new UnauthorizedException("Invalid credentials");

        // 3. Generate JWT
        const payload = { sub: user.id, clinicId: user.clinicId, role: user.role };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                fullName: user.fullName,
                role: user.role,
                clinicId: user.clinicId,
            },
        };
    }
}
</file>

<file path="src/auth/jwt.strategy.ts">
// src/auth/jwt.strategy.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET!,
        });
    }

    async validate(payload: { sub: number; clinicId: number; role: string }) {
        const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
        if (!user || !user.isActive) {
            throw new UnauthorizedException();
        }
        return { id: user.id, clinicId: user.clinicId, role: user.role };
    }
}
</file>

<file path="src/inventory/inventory.controller.ts">
// src/inventory/inventory.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Controller, Get, Post, Body, UseGuards, Request } from "@nestjs/common";
import { InventoryService } from "./inventory.service.js";

@UseGuards(JwtAuthGuard)
@Controller("inventory")
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}

    @Get("items")
    getItems(@Request() req) {
        return this.inventoryService.getItems(req.user.clinicId);
    }

    @Post("consume")
    consumeMaterial(@Request() req, @Body() dto: any) {
        return this.inventoryService.consumeMaterial(req.user.clinicId, req.user.id, dto);
    }
}
</file>

<file path="src/inventory/inventory.service.ts">
// src/inventory/inventory.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) {}

    async getItems(clinicId: number) {
        return this.prisma.inventoryItem.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    // This perfectly replaces the SQL trigger from your Supabase migration
    async consumeMaterial(clinicId: number, doctorId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Check stock
            const item = await tx.inventoryItem.findUnique({ where: { id: dto.itemId } });

            if (!item) throw new BadRequestException("Material not found");
            if (item.quantity < dto.quantity) {
                throw new BadRequestException(`Not enough stock. Available: ${item.quantity}`);
            }

            // 2. Deduct stock
            await tx.inventoryItem.update({
                where: { id: dto.itemId },
                data: { quantity: { decrement: dto.quantity } },
            });

            // 3. Log movement (Out)
            await tx.inventoryMovement.create({
                data: {
                    clinicId,
                    movementType: "OUT",
                    itemId: dto.itemId,
                    quantity: dto.quantity,
                    notes: dto.note || "Consumption during visit",
                },
            });

            // 4. Record consumption
            return tx.inventoryConsumption.create({
                data: {
                    itemId: dto.itemId,
                    visitId: dto.visitId,
                    doctorId,
                    quantity: dto.quantity,
                },
            });
        });
    }
}
</file>

<file path="src/patients/patients.controller.ts">
// src/patients/patients.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Controller, Get, Post, Body, UseGuards, Request } from "@nestjs/common";
import type { PatientsService } from "./patients.service.js";

@UseGuards(JwtAuthGuard)
@Controller("patients")
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Get()
    findAll(@Request() req) {
        return this.patientsService.findAll(req.user.clinicId);
    }

    @Post()
    create(@Request() req, @Body() dto: any) {
        return this.patientsService.create(req.user.clinicId, dto);
    }
}
</file>

<file path="src/patients/patients.service.ts">
// src/patients/patients.service.ts
import type { PrismaService } from "../prisma/prisma.service.js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PatientsService {
    constructor(private prisma: PrismaService) {}

    async findAll(clinicId: number) {
        return this.prisma.patient.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    async create(clinicId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Create Patient
            const patient = await tx.patient.create({
                data: {
                    clinicId,
                    fullName: dto.fullName,
                    phone: dto.phone,
                    birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
                    gender: dto.gender,
                    address: dto.address,
                    doctorId: dto.doctorId,
                    status: dto.status || "active",
                    notes: dto.notes,
                },
            });

            // 2. Auto-create first visit if requested (matches frontend logic)
            if (dto.createFirstVisit) {
                await tx.visit.create({
                    data: {
                        clinicId,
                        patientId: patient.id,
                        doctorId: dto.doctorId,
                        status: "PENDING",
                        notes: "Birinchi tashrif (avtomatik yaratilgan)",
                    },
                });
            }

            return patient;
        });
    }
}
</file>

<file path="src/payments/payments.service.ts">
import { Injectable } from "@nestjs/common";
import type { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class PaymentsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Create the payment record
            const payment = await tx.payment.create({
                data: {
                    clinicId,
                    visitId: dto.visitId,
                    patientId: dto.patientId,
                    doctorId: dto.doctorId,
                    amount: dto.amount,
                    method: dto.method,
                    note: dto.note,
                    paymentType: dto.paymentType || "payment",
                },
            });

            // 2. If linked to a visit, update the visit's paid/debt totals
            if (dto.visitId) {
                const visit = await tx.visit.findUnique({ where: { id: dto.visitId } });
                if (visit) {
                    const newPaidAmount = Number(visit.paidAmount || 0) + Number(dto.amount);
                    const price = Number(visit.price || 0);
                    const newDebt = price - newPaidAmount;

                    await tx.visit.update({
                        where: { id: dto.visitId },
                        data: {
                            paidAmount: newPaidAmount,
                            debtAmount: newDebt > 0 ? newDebt : null,
                            status: newDebt <= 0 ? "COMPLETED_PAID" : "COMPLETED_DEBT",
                        },
                    });
                }
            }

            return payment;
        });
    }

    async getClinicPayments(clinicId: number) {
        return this.prisma.payment.findMany({
            where: { clinicId },
            include: { patient: true, doctor: true },
            orderBy: { createdAt: "desc" },
        });
    }

    findAll() {
        // return all payments; replace with real implementation

        return [];
    }
}
</file>

<file path="src/visits/visits.controller.ts">
// src/visits/visits.controller.ts
import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from "@nestjs/common";
import type { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";
import type { VisitsService } from "./visits.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";

@UseGuards(JwtAuthGuard)
@Controller("visits")
export class VisitsController {
    constructor(private readonly visitsService: VisitsService) {}

    @Post()
    create(@Request() req, @Body() createVisitDto: CreateVisitDto) {
        return this.visitsService.create(req.user.clinicId, createVisitDto);
    }

    @Get()
    findAll(@Request() req) {
        return this.visitsService.findAllByClinic(req.user.clinicId);
    }

    @Patch(":id")
    update(@Request() req, @Param("id") id: string, @Body() updateVisitDto: UpdateVisitDto) {
        return this.visitsService.update(req.user.clinicId, +id, updateVisitDto);
    }
}
</file>

<file path=".gitignore">
# compiled output
/dist
/node_modules
/build

# Logs
logs
*.log
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS
.DS_Store

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# temp directory
.temp
.tmp

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

src/prisma/client
</file>

<file path="prisma/schema.prisma">
generator client {
  provider = "prisma-client"
  generatedFileExtension = "ts"
  moduleFormat = "esm"
  compilerBuild = "fast"
  importFileExtension = "js"
  runtime = "nodejs"
  output   = "../src/prisma/client"
}

datasource db {
  provider = "postgresql"
}
enum Role {
  SUPER_ADMIN
  ADMIN
  DOCTOR
  RECEPTIONIST
}

enum VisitStatus {
  PENDING
  ARRIVED
  IN_PROGRESS
  COMPLETED_DEBT
  COMPLETED_PAID
  CANCELLED
  NO_SHOW
  ARCHIVED
}

model Clinic {
  id         Int      @id @default(autoincrement())
  name       String
  slug       String   @unique
  logoUrl    String?  @map("logo_url")
  maxDoctors Int      @default(4) @map("max_doctors")
  isActive   Boolean  @default(true) @map("is_active")
  createdAt  DateTime @default(now()) @map("created_at")
  updatedAt  DateTime @updatedAt @map("updated_at")

  users              User[]
  patients           Patient[]
  visits             Visit[]
  payments           Payment[]
  inventoryItems     InventoryItem[]
  inventoryMovements InventoryMovement[]
  expenses           Expense[]
  odontograms        Odontogram[]

  @@map("clinics")
}

model User {
  id             Int      @id @default(autoincrement())
  clinicId       Int?     @map("clinic_id")
  email          String?  @unique
  phone          String?  @unique
  password       String
  fullName       String   @map("full_name")
  role           Role     @default(DOCTOR)
  specialization String?
  isActive       Boolean  @default(true) @map("is_active")
  workSchedule   Json?    @map("work_schedule")
  createdAt      DateTime @default(now()) @map("created_at")
  updatedAt      DateTime @updatedAt @map("updated_at")

  clinic             Clinic?             @relation(fields: [clinicId], references: [id])
  patients           Patient[]
  visits             Visit[]
  visitServices      VisitService[]
  payments           Payment[]
  consumptions       InventoryConsumption[]
  treatmentPlans     TreatmentPlan[]

  @@map("users")
}

model Patient {
  id              Int      @id @default(autoincrement())
  clinicId        Int      @map("clinic_id")
  doctorId        Int?     @map("doctor_id")
  fullName        String   @map("full_name")
  phone           String
  birthDate       DateTime? @db.Date @map("birth_date")
  gender          String?
  address         String?
  status          String   @default("active")
  notes           String?
  lastVisit       DateTime? @db.Date @map("last_visit")
  nextAppointment DateTime? @db.Date @map("next_appointment")
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")

  clinic         Clinic          @relation(fields: [clinicId], references: [id])
  doctor         User?           @relation(fields: [doctorId], references: [id])
  visits         Visit[]
  payments       Payment[]
  odontograms    Odontogram[]
  visitServices  VisitService[]
  treatmentPlans TreatmentPlan[]

  @@map("patients")
}

model Visit {
  id              Int         @id @default(autoincrement())
  clinicId        Int         @map("clinic_id")
  patientId       Int         @map("patient_id")
  doctorId        Int?        @map("doctor_id")
  date            DateTime    @default(now()) @db.Date
  startTime       String?     @map("start_time") @db.VarChar(5)
  endTime         String?     @map("end_time") @db.VarChar(5)
  durationMinutes Int?        @default(30) @map("duration_minutes")
  status          VisitStatus @default(PENDING)
  notes           String?
  price           Decimal?    @db.Decimal(12, 2)
  paidAmount      Decimal?    @map("paid_amount") @db.Decimal(12, 2)
  debtAmount      Decimal?    @map("debt_amount") @db.Decimal(12, 2)
  createdAt       DateTime    @default(now()) @map("created_at")
  updatedAt       DateTime    @updatedAt @map("updated_at")

  clinic         Clinic                 @relation(fields: [clinicId], references: [id])
  patient        Patient                @relation(fields: [patientId], references: [id])
  doctor         User?                  @relation(fields: [doctorId], references: [id])
  payments       Payment[]
  services       VisitService[]
  consumptions   InventoryConsumption[]
  odontogram     Odontogram?
  treatmentPlans TreatmentPlan[]

  @@map("visits")
}

model Payment {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  visitId     Int?     @map("visit_id")
  patientId   Int?     @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  amount      Decimal  @db.Decimal(12, 2)
  paymentType String   @default("payment") @map("payment_type")
  method      String?
  note        String?
  paidAt      DateTime @default(now()) @map("paid_at")
  createdAt   DateTime @default(now()) @map("created_at")

  clinic  Clinic   @relation(fields: [clinicId], references: [id])
  visit   Visit?   @relation(fields: [visitId], references: [id])
  patient Patient? @relation(fields: [patientId], references: [id])
  doctor  User?    @relation(fields: [doctorId], references: [id])

  @@map("payments")
}

model VisitService {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  visitId     Int      @map("visit_id")
  patientId   Int      @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  toothId     Int?     @map("tooth_id")
  serviceName String   @map("service_name")
  price       Decimal  @default(0) @db.Decimal(12, 2)
  createdAt   DateTime @default(now()) @map("created_at")

  patient Patient @relation(fields: [patientId], references: [id])
  visit   Visit   @relation(fields: [visitId], references: [id])
  doctor  User?   @relation(fields: [doctorId], references: [id])

  @@map("visit_services")
}

model Odontogram {
  id        Int      @id @default(autoincrement())
  clinicId  Int      @map("clinic_id")
  patientId Int      @map("patient_id")
  visitId   Int      @unique @map("visit_id")
  data      Json     @default("{\"teeth\": {}}")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  clinic  Clinic  @relation(fields: [clinicId], references: [id])
  patient Patient @relation(fields: [patientId], references: [id])
  visit   Visit   @relation(fields: [visitId], references: [id])

  @@map("odontograms")
}

model InventoryItem {
  id                 Int      @id @default(autoincrement())
  clinicId           Int      @map("clinic_id")
  name               String
  description        String?
  quantity           Int      @default(0)
  unitPrice          Decimal  @map("unit_price") @db.Decimal(12, 2)
  createdAt          DateTime @default(now()) @map("created_at")
  updatedAt          DateTime @updatedAt @map("updated_at")

  clinic             Clinic                 @relation(fields: [clinicId], references: [id])
  movements          InventoryMovement[]
  consumptions       InventoryConsumption[]

  @@map("inventory_items")
}

model InventoryMovement {
  id              Int      @id @default(autoincrement())
  clinicId        Int      @map("clinic_id")
  itemId          Int      @map("item_id")
  movementType    String   @map("movement_type")
  quantity        Int
  notes           String?
  createdAt       DateTime @default(now()) @map("created_at")

  clinic          Clinic        @relation(fields: [clinicId], references: [id])
  item            InventoryItem @relation(fields: [itemId], references: [id])

  @@map("inventory_movements")
}

model InventoryConsumption {
  id          Int      @id @default(autoincrement())
  visitId     Int      @map("visit_id")
  itemId      Int      @map("item_id")
  doctorId    Int?     @map("doctor_id")
  quantity    Int
  createdAt   DateTime @default(now()) @map("created_at")

  visit       Visit         @relation(fields: [visitId], references: [id])
  item        InventoryItem @relation(fields: [itemId], references: [id])
  doctor      User?         @relation(fields: [doctorId], references: [id])

  @@map("inventory_consumptions")
}

model Expense {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  description String
  amount      Decimal  @db.Decimal(12, 2)
  category    String?
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  clinic      Clinic   @relation(fields: [clinicId], references: [id])

  @@map("expenses")
}

model TreatmentPlan {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  patientId   Int      @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  visitId     Int      @map("visit_id")
  description String?
  status      String   @default("active")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  patient     Patient  @relation(fields: [patientId], references: [id])
  doctor      User?    @relation(fields: [doctorId], references: [id])
  visit       Visit    @relation(fields: [visitId], references: [id])

  @@map("treatment_plans")
}
</file>

<file path="src/scripts/seed.ts">
import { PrismaClient } from "../prisma/client/client.js";
import * as bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL as string });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
    const password = await bcrypt.hash("admin123456", 10);

    // 1. Create a Default Clinic
    const clinic = await prisma.clinic.upsert({
        where: { slug: "shifo-test-clinic" },
        update: {},
        create: {
            name: "Shifo Test Clinic",
            slug: "shifo-test-clinic",
            maxDoctors: 5,
        },
    });

    // 2. Create a Super Admin
    await prisma.user.upsert({
        where: { email: "admin@shifo.com" },
        update: {},
        create: {
            email: "admin@shifo.com",
            password,
            fullName: "Super Admin",
            role: "SUPER_ADMIN",
            clinicId: clinic.id,
        },
    });

    console.log("✅ Database seeded: Login with admin@shifo.com / admin123456");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
</file>

<file path="src/visits/dto/visit.dto.ts">
import { IsNumber, IsOptional, IsString, IsEnum, IsArray } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";

export class CreateVisitDto {
    @IsNumber()
    patientId: number;

    @IsOptional()
    @IsNumber()
    doctorId?: number;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    paidAmount?: number;
}

export class UpdateVisitDto extends CreateVisitDto {
    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @IsOptional()
    @IsNumber()
    debtAmount?: number;
}
</file>

<file path="src/visits/visits.service.ts">
// src/visits/visits.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, NotFoundException } from "@nestjs/common";
import { VisitStatus } from "../prisma/client/enums.js";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";

@Injectable()
export class VisitsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, data: CreateVisitDto) {
        const debtAmount = this.calculateDebt(data.price, data.paidAmount);

        return this.prisma.visit.create({
            data: {
                ...data,
                clinicId,
                debtAmount,
            },
        });
    }

    async update(clinicId: number, id: number, data: UpdateVisitDto) {
        const existing = await this.prisma.visit.findFirst({
            where: { id, clinicId },
        });

        if (!existing) throw new NotFoundException("Visit not found");

        const price = data.price !== undefined ? data.price : Number(existing.price);
        const paidAmount = data.paidAmount !== undefined ? data.paidAmount : Number(existing.paidAmount);
        let debtAmount = data.debtAmount !== undefined ? data.debtAmount : this.calculateDebt(price, paidAmount);
        let status = data.status || existing.status;

        // Status workflow logic derived from your VISIT_STATUS_WORKFLOW.md
        if (debtAmount === 0 && status === VisitStatus.COMPLETED_DEBT) {
            status = VisitStatus.COMPLETED_PAID;
            debtAmount = null;
        } else if (debtAmount !== null && debtAmount > 0 && status === VisitStatus.COMPLETED_PAID) {
            status = VisitStatus.COMPLETED_DEBT;
        }

        return this.prisma.visit.update({
            where: { id },
            data: {
                ...data,
                status,
                debtAmount,
            },
        });
    }

    async findAllByClinic(clinicId: number) {
        return this.prisma.visit.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
            include: { patient: true, doctor: true },
        });
    }

    private calculateDebt(price?: number, paidAmount?: number): number | null {
        if (!price || price <= 0) return null;
        const paid = paidAmount || 0;
        const debt = price - paid;
        return debt > 0 ? debt : null;
    }
}
</file>

<file path="src/auth/guards/roles.guard.ts">
import { Injectable, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Role } from "../../prisma/client/client.js";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>("roles", [context.getHandler(), context.getClass()]);
        if (!requiredRoles) return true;

        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role === role);
    }
}
</file>

<file path="src/prisma/prisma.service.ts">
// src/prisma/prisma.service.ts
import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../prisma/client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const pool = new PrismaPg({
            connectionString: process.env.DATABASE_URL!,
            ssl: { rejectUnauthorized: false },
        });
        super({ adapter: pool });
    }
    async onModuleInit() {
        await this.$connect();
    }
}
</file>

<file path="tsconfig.json">
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "resolvePackageJsonExports": false,
        "esModuleInterop": false,
        "isolatedModules": true,
        "declaration": true,
        "removeComments": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "allowSyntheticDefaultImports": false,
        "target": "esnext",
        "sourceMap": true,
        "outDir": "./dist",
        "verbatimModuleSyntax": true,
        "baseUrl": "./",
        "incremental": true,
        "skipLibCheck": false,
        "strictNullChecks": true,
        "forceConsistentCasingInFileNames": true,
        "noImplicitAny": false,
        "strictBindCallApply": false,
        "noFallthroughCasesInSwitch": false
    },
    "include": ["./src"]
}
</file>

<file path="package.json">
{
    "name": "shifocrm-backend",
    "type": "module",
    "private": true,
    "scripts": {
        "build": "nest build",
        "fmt": "prettier --write \"src/**/*.ts\"",
        "start": "nest start",
        "0start:dev": "nest start --watch",
        "start:debug": "nest start --debug --watch",
        "start:prod": "node dist/main",
        "prisma:gen": "rimraf ./src/prisma/client && prisma generate",
        "prisma:m:dev": "prisma migrate dev",
        "prisma:m:prod": "prisma migrate prod",
        "postinstall": "npm run prisma:gen",
        "prisma:std": "prisma studio",
        "prisma:db:push": "prisma db push",
        "prisma:db:pull": "prisma db pull",
        "prisma:db:reset": "prisma migrate reset",
        "ts:check": "tsc --noEmit",
        "ts:watch": "rimraf ./dist && tsc --watch",
        "dev": "rimraf ./dist && nest start --watch --node-args='--env-file=.env'"
    },
    "dependencies": {
        "@nestjs/common": "^11.1.16",
        "@nestjs/core": "^11.1.16",
        "@nestjs/jwt": "^11.0.2",
        "@nestjs/passport": "^11.0.5",
        "@nestjs/platform-express": "^11.1.16",
        "@prisma/adapter-pg": "^7.5.0",
        "@prisma/client": "^7.5.0",
        "bcrypt": "^6.0.0",
        "class-transformer": "^0.5.1",
        "class-validator": "^0.15.1",
        "passport": "^0.7.0",
        "passport-jwt": "^4.0.1",
        "pg": "^8.20.0",
        "reflect-metadata": "^0.2.2",
        "rxjs": "^7.8.2"
    },
    "devDependencies": {
        "@nestjs/cli": "^11.0.16",
        "@nestjs/schematics": "^11.0.9",
        "@nestjs/testing": "^11.1.16",
        "@types/bcrypt": "^6.0.0",
        "@types/express": "^5.0.6",
        "@types/node": "^25.5.0",
        "@types/passport-jwt": "^4.0.1",
        "@types/pg": "^8.18.0",
        "@types/supertest": "^7.2.0",
        "dotenv": "^17.3.1",
        "globals": "^17.4.0",
        "prettier": "^3.8.1",
        "prisma": "^7.5.0",
        "rimraf": "^6.1.3",
        "source-map-support": "^0.5.21",
        "supertest": "^7.2.2",
        "ts-loader": "^9.5.4",
        "ts-node": "^10.9.2",
        "tsconfig-paths": "^4.2.0",
        "typescript": "^5.9.3"
    },
    "version": "0.0.1",
    "description": "ShifoCRM Backend Server",
    "license": "UNLICENSED",
    "engines": {
        "node": ">=24"
    },
    "author": {
        "email": "mirasayon@ya.ru",
        "name": "Miralisher Agzamov",
        "url": "https://mirasayon.com"
    }
}
</file>

</files>

================
File: .env.example
================
PORT="3000"
NODE_ENV="development"
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="your_super_secret_jwt_key_change_this_in_production"
FRONTEND_URL="http://localhost:3000"

================
File: bruno/ShifoCRM-Backend/.gitignore
================
# Secrets
.env*

# Dependencies
node_modules

# OS files
.DS_Store
Thumbs.db

================
File: bruno/ShifoCRM-Backend/opencollection.yml
================
opencollection: 1.0.0

info:
  name: ShifoCRM-Backend
bundled: false
extensions:
  bruno:
    ignore:
      - node_modules
      - .git

================
File: bruno/ShifoCRM-Backend/Ping.yml
================
info:
  name: Ping
  type: http
  seq: 1

http:
  method: GET
  url: ""
  auth: inherit

settings:
  encodeUrl: true
  timeout: 0
  followRedirects: true
  maxRedirects: 5

================
File: docker-compose.yml
================
services:
    db:
        image: postgres:16-alpine
        container_name: shifocrm-db
        restart: always
        environment:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: yourpassword
            POSTGRES_DB: shifocrm
        ports:
            - '5432:5432'
        volumes:
            - postgres_data:/var/lib/postgresql/data

volumes:
    postgres_data:

================
File: prettier.config.ts
================
import type { Config } from "prettier";
export default {
    semi: true,
    singleQuote: false,
    trailingComma: "all",
    printWidth: 150,
    tabWidth: 4,
    useTabs: false,
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
} satisfies Config;

================
File: prisma.config.ts
================
// This file was generated by Prisma, and assumes you have installed the following:
// npm install --save-dev prisma dotenv
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});

================
File: README.md
================


================
File: tsconfig.build.json
================
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}

================
File: nest-cli.json
================
{
    "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "src",
    "compilerOptions": {
        "builder": "tsc",
        "deleteOutDir": true
    }
}

================
File: src/app.controller.ts
================
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}

================
File: src/app.module.ts
================
// src/app.module.ts
import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { InventoryModule } from "./inventory/inventory.module.js";
import { PatientsModule } from "./patients/patients.module.js";
import { PaymentsModule } from "./payments/payments.module.js";
import { VisitsModule } from "./visits/visits.module.js";

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        VisitsModule,
        InventoryModule,
        PatientsModule,
        PaymentsModule, // Register it here
    ],
})
export class AppModule {}

================
File: src/app.service.ts
================
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }
}

================
File: src/auth/auth.controller.ts
================
// src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @HttpCode(HttpStatus.OK)
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}

================
File: src/auth/dto/login.dto.ts
================
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty({ message: "Email yoki telefon raqami kiritilishi shart" })
    identifier: string;

    @IsString()
    @IsNotEmpty({ message: "Parol kiritilishi shart" })
    @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
    password: string;
}

================
File: src/auth/guards/jwt-auth.guard.ts
================
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    handleRequest(err: any, user: any, info: any) {
        // You can throw a custom exception or return the user
        if (err || !user) {
            throw err || new UnauthorizedException("Siz ushbu amalni bajarish uchun tizimga kirmagansiz");
        }
        return user;
    }
}

================
File: src/inventory/inventory.module.ts
================
import { Module } from "@nestjs/common";
import { InventoryController } from "./inventory.controller.js";
import { InventoryService } from "./inventory.service.js";

@Module({
    controllers: [InventoryController],
    providers: [InventoryService],
})
export class InventoryModule {}

================
File: src/main.ts
================
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module.js";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 1. Enable CORS for your Vue frontend
    app.enableCors({
        origin: true, // In production, replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });

    // 2. Set global prefix (e.g., http://localhost:3000/api/patients)
    app.setGlobalPrefix("api");

    // 3. Enable auto-validation for DTOs
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.listen(process.env.PORT || 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

================
File: src/patients/patients.module.ts
================
import { Module } from "@nestjs/common";
import { PatientsController } from "./patients.controller.js";
import { PatientsService } from "./patients.service.js";

@Module({
    providers: [PatientsService],
    controllers: [PatientsController],
})
export class PatientsModule {}

================
File: src/payments/payments.controller.ts
================
import { Controller, Get } from "@nestjs/common";
import type { PaymentsService } from "./payments.service.js";

@Controller("payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Get()
    findAll() {
        return this.paymentsService.findAll();
    }
}

================
File: src/payments/payments.module.ts
================
import { Module } from "@nestjs/common";
import { PaymentsController } from "./payments.controller.js";
import { PaymentsService } from "./payments.service.js";
@Module({
    controllers: [PaymentsController],
    providers: [PaymentsService],
})
export class PaymentsModule {}

================
File: src/prisma/prisma.module.ts
================
import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service.js";

@Global() // This makes PrismaService available everywhere without re-importing the module
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}

================
File: src/visits/visits.module.ts
================
import { Module } from "@nestjs/common";
import { VisitsController } from "./visits.controller.js";
import { VisitsService } from "./visits.service.js";

@Module({
    controllers: [VisitsController],
    providers: [VisitsService],
})
export class VisitsModule {}

================
File: src/auth/auth.module.ts
================
// src/auth/auth.module.ts
import { PrismaModule } from "../prisma/prisma.module.js";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { JwtStrategy } from "./jwt.strategy.js";

@Module({
    imports: [
        PrismaModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || "super-secret-key", // Use .env in production
            signOptions: { expiresIn: "1d" },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

================
File: src/auth/auth.service.ts
================
// src/auth/auth.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { LoginDto } from "./dto/login.dto.js";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto) {
        // 1. Find user by email or phone
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: loginDto.identifier }, { phone: loginDto.identifier }],
                isActive: true,
            },
        });

        if (!user) throw new UnauthorizedException("Invalid credentials");

        // 2. Verify password (assuming passwords are hashed in the DB)
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) throw new UnauthorizedException("Invalid credentials");

        // 3. Generate JWT
        const payload = { sub: user.id, clinicId: user.clinicId, role: user.role };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                fullName: user.fullName,
                role: user.role,
                clinicId: user.clinicId,
            },
        };
    }
}

================
File: src/auth/jwt.strategy.ts
================
// src/auth/jwt.strategy.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET!,
        });
    }

    async validate(payload: { sub: number; clinicId: number; role: string }) {
        const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
        if (!user || !user.isActive) {
            throw new UnauthorizedException();
        }
        return { id: user.id, clinicId: user.clinicId, role: user.role };
    }
}

================
File: src/inventory/inventory.controller.ts
================
// src/inventory/inventory.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Controller, Get, Post, Body, UseGuards, Request } from "@nestjs/common";
import { InventoryService } from "./inventory.service.js";

@UseGuards(JwtAuthGuard)
@Controller("inventory")
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}

    @Get("items")
    getItems(@Request() req) {
        return this.inventoryService.getItems(req.user.clinicId);
    }

    @Post("consume")
    consumeMaterial(@Request() req, @Body() dto: any) {
        return this.inventoryService.consumeMaterial(req.user.clinicId, req.user.id, dto);
    }
}

================
File: src/inventory/inventory.service.ts
================
// src/inventory/inventory.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) {}

    async getItems(clinicId: number) {
        return this.prisma.inventoryItem.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    // This perfectly replaces the SQL trigger from your Supabase migration
    async consumeMaterial(clinicId: number, doctorId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Check stock
            const item = await tx.inventoryItem.findUnique({ where: { id: dto.itemId } });

            if (!item) throw new BadRequestException("Material not found");
            if (item.quantity < dto.quantity) {
                throw new BadRequestException(`Not enough stock. Available: ${item.quantity}`);
            }

            // 2. Deduct stock
            await tx.inventoryItem.update({
                where: { id: dto.itemId },
                data: { quantity: { decrement: dto.quantity } },
            });

            // 3. Log movement (Out)
            await tx.inventoryMovement.create({
                data: {
                    clinicId,
                    movementType: "OUT",
                    itemId: dto.itemId,
                    quantity: dto.quantity,
                    notes: dto.note || "Consumption during visit",
                },
            });

            // 4. Record consumption
            return tx.inventoryConsumption.create({
                data: {
                    itemId: dto.itemId,
                    visitId: dto.visitId,
                    doctorId,
                    quantity: dto.quantity,
                },
            });
        });
    }
}

================
File: src/patients/patients.controller.ts
================
// src/patients/patients.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Controller, Get, Post, Body, UseGuards, Request } from "@nestjs/common";
import type { PatientsService } from "./patients.service.js";

@UseGuards(JwtAuthGuard)
@Controller("patients")
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Get()
    findAll(@Request() req) {
        return this.patientsService.findAll(req.user.clinicId);
    }

    @Post()
    create(@Request() req, @Body() dto: any) {
        return this.patientsService.create(req.user.clinicId, dto);
    }
}

================
File: src/patients/patients.service.ts
================
// src/patients/patients.service.ts
import type { PrismaService } from "../prisma/prisma.service.js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PatientsService {
    constructor(private prisma: PrismaService) {}

    async findAll(clinicId: number) {
        return this.prisma.patient.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    async create(clinicId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Create Patient
            const patient = await tx.patient.create({
                data: {
                    clinicId,
                    fullName: dto.fullName,
                    phone: dto.phone,
                    birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
                    gender: dto.gender,
                    address: dto.address,
                    doctorId: dto.doctorId,
                    status: dto.status || "active",
                    notes: dto.notes,
                },
            });

            // 2. Auto-create first visit if requested (matches frontend logic)
            if (dto.createFirstVisit) {
                await tx.visit.create({
                    data: {
                        clinicId,
                        patientId: patient.id,
                        doctorId: dto.doctorId,
                        status: "PENDING",
                        notes: "Birinchi tashrif (avtomatik yaratilgan)",
                    },
                });
            }

            return patient;
        });
    }
}

================
File: src/payments/payments.service.ts
================
import { Injectable } from "@nestjs/common";
import type { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class PaymentsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Create the payment record
            const payment = await tx.payment.create({
                data: {
                    clinicId,
                    visitId: dto.visitId,
                    patientId: dto.patientId,
                    doctorId: dto.doctorId,
                    amount: dto.amount,
                    method: dto.method,
                    note: dto.note,
                    paymentType: dto.paymentType || "payment",
                },
            });

            // 2. If linked to a visit, update the visit's paid/debt totals
            if (dto.visitId) {
                const visit = await tx.visit.findUnique({ where: { id: dto.visitId } });
                if (visit) {
                    const newPaidAmount = Number(visit.paidAmount || 0) + Number(dto.amount);
                    const price = Number(visit.price || 0);
                    const newDebt = price - newPaidAmount;

                    await tx.visit.update({
                        where: { id: dto.visitId },
                        data: {
                            paidAmount: newPaidAmount,
                            debtAmount: newDebt > 0 ? newDebt : null,
                            status: newDebt <= 0 ? "COMPLETED_PAID" : "COMPLETED_DEBT",
                        },
                    });
                }
            }

            return payment;
        });
    }

    async getClinicPayments(clinicId: number) {
        return this.prisma.payment.findMany({
            where: { clinicId },
            include: { patient: true, doctor: true },
            orderBy: { createdAt: "desc" },
        });
    }

    findAll() {
        // return all payments; replace with real implementation

        return [];
    }
}

================
File: src/visits/visits.controller.ts
================
// src/visits/visits.controller.ts
import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from "@nestjs/common";
import type { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";
import type { VisitsService } from "./visits.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";

@UseGuards(JwtAuthGuard)
@Controller("visits")
export class VisitsController {
    constructor(private readonly visitsService: VisitsService) {}

    @Post()
    create(@Request() req, @Body() createVisitDto: CreateVisitDto) {
        return this.visitsService.create(req.user.clinicId, createVisitDto);
    }

    @Get()
    findAll(@Request() req) {
        return this.visitsService.findAllByClinic(req.user.clinicId);
    }

    @Patch(":id")
    update(@Request() req, @Param("id") id: string, @Body() updateVisitDto: UpdateVisitDto) {
        return this.visitsService.update(req.user.clinicId, +id, updateVisitDto);
    }
}

================
File: .gitignore
================
# compiled output
/dist
/node_modules
/build

# Logs
logs
*.log
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS
.DS_Store

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# temp directory
.temp
.tmp

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

src/prisma/client

================
File: prisma/schema.prisma
================
generator client {
  provider = "prisma-client"
  generatedFileExtension = "ts"
  moduleFormat = "esm"
  compilerBuild = "fast"
  importFileExtension = "js"
  runtime = "nodejs"
  output   = "../src/prisma/client"
}

datasource db {
  provider = "postgresql"
}
enum Role {
  SUPER_ADMIN
  ADMIN
  DOCTOR
  RECEPTIONIST
}

enum VisitStatus {
  PENDING
  ARRIVED
  IN_PROGRESS
  COMPLETED_DEBT
  COMPLETED_PAID
  CANCELLED
  NO_SHOW
  ARCHIVED
}

model Clinic {
  id         Int      @id @default(autoincrement())
  name       String
  slug       String   @unique
  logoUrl    String?  @map("logo_url")
  maxDoctors Int      @default(4) @map("max_doctors")
  isActive   Boolean  @default(true) @map("is_active")
  createdAt  DateTime @default(now()) @map("created_at")
  updatedAt  DateTime @updatedAt @map("updated_at")

  users              User[]
  patients           Patient[]
  visits             Visit[]
  payments           Payment[]
  inventoryItems     InventoryItem[]
  inventoryMovements InventoryMovement[]
  expenses           Expense[]
  odontograms        Odontogram[]

  @@map("clinics")
}

model User {
  id             Int      @id @default(autoincrement())
  clinicId       Int?     @map("clinic_id")
  email          String?  @unique
  phone          String?  @unique
  password       String
  fullName       String   @map("full_name")
  role           Role     @default(DOCTOR)
  specialization String?
  isActive       Boolean  @default(true) @map("is_active")
  workSchedule   Json?    @map("work_schedule")
  createdAt      DateTime @default(now()) @map("created_at")
  updatedAt      DateTime @updatedAt @map("updated_at")

  clinic             Clinic?             @relation(fields: [clinicId], references: [id])
  patients           Patient[]
  visits             Visit[]
  visitServices      VisitService[]
  payments           Payment[]
  consumptions       InventoryConsumption[]
  treatmentPlans     TreatmentPlan[]

  @@map("users")
}

model Patient {
  id              Int      @id @default(autoincrement())
  clinicId        Int      @map("clinic_id")
  doctorId        Int?     @map("doctor_id")
  fullName        String   @map("full_name")
  phone           String
  birthDate       DateTime? @db.Date @map("birth_date")
  gender          String?
  address         String?
  status          String   @default("active")
  notes           String?
  lastVisit       DateTime? @db.Date @map("last_visit")
  nextAppointment DateTime? @db.Date @map("next_appointment")
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")

  clinic         Clinic          @relation(fields: [clinicId], references: [id])
  doctor         User?           @relation(fields: [doctorId], references: [id])
  visits         Visit[]
  payments       Payment[]
  odontograms    Odontogram[]
  visitServices  VisitService[]
  treatmentPlans TreatmentPlan[]

  @@map("patients")
}

model Visit {
  id              Int         @id @default(autoincrement())
  clinicId        Int         @map("clinic_id")
  patientId       Int         @map("patient_id")
  doctorId        Int?        @map("doctor_id")
  date            DateTime    @default(now()) @db.Date
  startTime       String?     @map("start_time") @db.VarChar(5)
  endTime         String?     @map("end_time") @db.VarChar(5)
  durationMinutes Int?        @default(30) @map("duration_minutes")
  status          VisitStatus @default(PENDING)
  notes           String?
  price           Decimal?    @db.Decimal(12, 2)
  paidAmount      Decimal?    @map("paid_amount") @db.Decimal(12, 2)
  debtAmount      Decimal?    @map("debt_amount") @db.Decimal(12, 2)
  createdAt       DateTime    @default(now()) @map("created_at")
  updatedAt       DateTime    @updatedAt @map("updated_at")

  clinic         Clinic                 @relation(fields: [clinicId], references: [id])
  patient        Patient                @relation(fields: [patientId], references: [id])
  doctor         User?                  @relation(fields: [doctorId], references: [id])
  payments       Payment[]
  services       VisitService[]
  consumptions   InventoryConsumption[]
  odontogram     Odontogram?
  treatmentPlans TreatmentPlan[]

  @@map("visits")
}

model Payment {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  visitId     Int?     @map("visit_id")
  patientId   Int?     @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  amount      Decimal  @db.Decimal(12, 2)
  paymentType String   @default("payment") @map("payment_type")
  method      String?
  note        String?
  paidAt      DateTime @default(now()) @map("paid_at")
  createdAt   DateTime @default(now()) @map("created_at")

  clinic  Clinic   @relation(fields: [clinicId], references: [id])
  visit   Visit?   @relation(fields: [visitId], references: [id])
  patient Patient? @relation(fields: [patientId], references: [id])
  doctor  User?    @relation(fields: [doctorId], references: [id])

  @@map("payments")
}

model VisitService {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  visitId     Int      @map("visit_id")
  patientId   Int      @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  toothId     Int?     @map("tooth_id")
  serviceName String   @map("service_name")
  price       Decimal  @default(0) @db.Decimal(12, 2)
  createdAt   DateTime @default(now()) @map("created_at")

  patient Patient @relation(fields: [patientId], references: [id])
  visit   Visit   @relation(fields: [visitId], references: [id])
  doctor  User?   @relation(fields: [doctorId], references: [id])

  @@map("visit_services")
}

model Odontogram {
  id        Int      @id @default(autoincrement())
  clinicId  Int      @map("clinic_id")
  patientId Int      @map("patient_id")
  visitId   Int      @unique @map("visit_id")
  data      Json     @default("{\"teeth\": {}}")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  clinic  Clinic  @relation(fields: [clinicId], references: [id])
  patient Patient @relation(fields: [patientId], references: [id])
  visit   Visit   @relation(fields: [visitId], references: [id])

  @@map("odontograms")
}

model InventoryItem {
  id                 Int      @id @default(autoincrement())
  clinicId           Int      @map("clinic_id")
  name               String
  description        String?
  quantity           Int      @default(0)
  unitPrice          Decimal  @map("unit_price") @db.Decimal(12, 2)
  createdAt          DateTime @default(now()) @map("created_at")
  updatedAt          DateTime @updatedAt @map("updated_at")

  clinic             Clinic                 @relation(fields: [clinicId], references: [id])
  movements          InventoryMovement[]
  consumptions       InventoryConsumption[]

  @@map("inventory_items")
}

model InventoryMovement {
  id              Int      @id @default(autoincrement())
  clinicId        Int      @map("clinic_id")
  itemId          Int      @map("item_id")
  movementType    String   @map("movement_type")
  quantity        Int
  notes           String?
  createdAt       DateTime @default(now()) @map("created_at")

  clinic          Clinic        @relation(fields: [clinicId], references: [id])
  item            InventoryItem @relation(fields: [itemId], references: [id])

  @@map("inventory_movements")
}

model InventoryConsumption {
  id          Int      @id @default(autoincrement())
  visitId     Int      @map("visit_id")
  itemId      Int      @map("item_id")
  doctorId    Int?     @map("doctor_id")
  quantity    Int
  createdAt   DateTime @default(now()) @map("created_at")

  visit       Visit         @relation(fields: [visitId], references: [id])
  item        InventoryItem @relation(fields: [itemId], references: [id])
  doctor      User?         @relation(fields: [doctorId], references: [id])

  @@map("inventory_consumptions")
}

model Expense {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  description String
  amount      Decimal  @db.Decimal(12, 2)
  category    String?
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  clinic      Clinic   @relation(fields: [clinicId], references: [id])

  @@map("expenses")
}

model TreatmentPlan {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  patientId   Int      @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  visitId     Int      @map("visit_id")
  description String?
  status      String   @default("active")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  patient     Patient  @relation(fields: [patientId], references: [id])
  doctor      User?    @relation(fields: [doctorId], references: [id])
  visit       Visit    @relation(fields: [visitId], references: [id])

  @@map("treatment_plans")
}

================
File: src/scripts/seed.ts
================
import { PrismaClient } from "../prisma/client/client.js";
import * as bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL as string });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
    const password = await bcrypt.hash("admin123456", 10);

    // 1. Create a Default Clinic
    const clinic = await prisma.clinic.upsert({
        where: { slug: "shifo-test-clinic" },
        update: {},
        create: {
            name: "Shifo Test Clinic",
            slug: "shifo-test-clinic",
            maxDoctors: 5,
        },
    });

    // 2. Create a Super Admin
    await prisma.user.upsert({
        where: { email: "admin@shifo.com" },
        update: {},
        create: {
            email: "admin@shifo.com",
            password,
            fullName: "Super Admin",
            role: "SUPER_ADMIN",
            clinicId: clinic.id,
        },
    });

    console.log("✅ Database seeded: Login with admin@shifo.com / admin123456");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

================
File: src/visits/dto/visit.dto.ts
================
import { IsNumber, IsOptional, IsString, IsEnum, IsArray } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";

export class CreateVisitDto {
    @IsNumber()
    patientId: number;

    @IsOptional()
    @IsNumber()
    doctorId?: number;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    paidAmount?: number;
}

export class UpdateVisitDto extends CreateVisitDto {
    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @IsOptional()
    @IsNumber()
    debtAmount?: number;
}

================
File: src/visits/visits.service.ts
================
// src/visits/visits.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, NotFoundException } from "@nestjs/common";
import { VisitStatus } from "../prisma/client/enums.js";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";

@Injectable()
export class VisitsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, data: CreateVisitDto) {
        const debtAmount = this.calculateDebt(data.price, data.paidAmount);

        return this.prisma.visit.create({
            data: {
                ...data,
                clinicId,
                debtAmount,
            },
        });
    }

    async update(clinicId: number, id: number, data: UpdateVisitDto) {
        const existing = await this.prisma.visit.findFirst({
            where: { id, clinicId },
        });

        if (!existing) throw new NotFoundException("Visit not found");

        const price = data.price !== undefined ? data.price : Number(existing.price);
        const paidAmount = data.paidAmount !== undefined ? data.paidAmount : Number(existing.paidAmount);
        let debtAmount = data.debtAmount !== undefined ? data.debtAmount : this.calculateDebt(price, paidAmount);
        let status = data.status || existing.status;

        // Status workflow logic derived from your VISIT_STATUS_WORKFLOW.md
        if (debtAmount === 0 && status === VisitStatus.COMPLETED_DEBT) {
            status = VisitStatus.COMPLETED_PAID;
            debtAmount = null;
        } else if (debtAmount !== null && debtAmount > 0 && status === VisitStatus.COMPLETED_PAID) {
            status = VisitStatus.COMPLETED_DEBT;
        }

        return this.prisma.visit.update({
            where: { id },
            data: {
                ...data,
                status,
                debtAmount,
            },
        });
    }

    async findAllByClinic(clinicId: number) {
        return this.prisma.visit.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
            include: { patient: true, doctor: true },
        });
    }

    private calculateDebt(price?: number, paidAmount?: number): number | null {
        if (!price || price <= 0) return null;
        const paid = paidAmount || 0;
        const debt = price - paid;
        return debt > 0 ? debt : null;
    }
}

================
File: src/auth/guards/roles.guard.ts
================
import { Injectable, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Role } from "../../prisma/client/client.js";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>("roles", [context.getHandler(), context.getClass()]);
        if (!requiredRoles) return true;

        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role === role);
    }
}

================
File: src/prisma/prisma.service.ts
================
// src/prisma/prisma.service.ts
import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../prisma/client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const pool = new PrismaPg({
            connectionString: process.env.DATABASE_URL!,
            ssl: { rejectUnauthorized: false },
        });
        super({ adapter: pool });
    }
    async onModuleInit() {
        await this.$connect();
    }
}

================
File: tsconfig.json
================
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "resolvePackageJsonExports": false,
        "esModuleInterop": false,
        "isolatedModules": true,
        "declaration": true,
        "removeComments": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "allowSyntheticDefaultImports": false,
        "target": "esnext",
        "sourceMap": true,
        "outDir": "./dist",
        "verbatimModuleSyntax": true,
        "baseUrl": "./",
        "incremental": true,
        "skipLibCheck": false,
        "strictNullChecks": true,
        "forceConsistentCasingInFileNames": true,
        "noImplicitAny": false,
        "strictBindCallApply": false,
        "noFallthroughCasesInSwitch": false
    },
    "include": ["./src"]
}

================
File: package.json
================
{
    "name": "shifocrm-backend",
    "type": "module",
    "private": true,
    "scripts": {
        "build": "nest build",
        "fmt": "prettier --write \"src/**/*.ts\"",
        "start": "nest start",
        "0start:dev": "nest start --watch",
        "start:debug": "nest start --debug --watch",
        "start:prod": "node dist/main",
        "prisma:gen": "rimraf ./src/prisma/client && prisma generate",
        "prisma:m:dev": "prisma migrate dev",
        "prisma:m:prod": "prisma migrate prod",
        "postinstall": "npm run prisma:gen",
        "prisma:std": "prisma studio",
        "prisma:db:push": "prisma db push",
        "prisma:db:pull": "prisma db pull",
        "prisma:db:reset": "prisma migrate reset",
        "ts:check": "tsc --noEmit",
        "ts:watch": "rimraf ./dist && tsc --watch",
        "dev": "rimraf ./dist && nest start --watch --node-args='--env-file=.env'"
    },
    "dependencies": {
        "@nestjs/common": "^11.1.16",
        "@nestjs/core": "^11.1.16",
        "@nestjs/jwt": "^11.0.2",
        "@nestjs/passport": "^11.0.5",
        "@nestjs/platform-express": "^11.1.16",
        "@prisma/adapter-pg": "^7.5.0",
        "@prisma/client": "^7.5.0",
        "bcrypt": "^6.0.0",
        "class-transformer": "^0.5.1",
        "class-validator": "^0.15.1",
        "passport": "^0.7.0",
        "passport-jwt": "^4.0.1",
        "pg": "^8.20.0",
        "reflect-metadata": "^0.2.2",
        "rxjs": "^7.8.2"
    },
    "devDependencies": {
        "@nestjs/cli": "^11.0.16",
        "@nestjs/schematics": "^11.0.9",
        "@nestjs/testing": "^11.1.16",
        "@types/bcrypt": "^6.0.0",
        "@types/express": "^5.0.6",
        "@types/node": "^25.5.0",
        "@types/passport-jwt": "^4.0.1",
        "@types/pg": "^8.18.0",
        "@types/supertest": "^7.2.0",
        "dotenv": "^17.3.1",
        "globals": "^17.4.0",
        "prettier": "^3.8.1",
        "prisma": "^7.5.0",
        "rimraf": "^6.1.3",
        "source-map-support": "^0.5.21",
        "supertest": "^7.2.2",
        "ts-loader": "^9.5.4",
        "ts-node": "^10.9.2",
        "tsconfig-paths": "^4.2.0",
        "typescript": "^5.9.3"
    },
    "version": "0.0.1",
    "description": "ShifoCRM Backend Server",
    "license": "UNLICENSED",
    "engines": {
        "node": ">=24"
    },
    "author": {
        "email": "mirasayon@ya.ru",
        "name": "Miralisher Agzamov",
        "url": "https://mirasayon.com"
    }
}





================================================================
End of Codebase
================================================================
````

## File: .env.example

```
PORT="3000"
NODE_ENV="development"
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="your_super_secret_jwt_key_change_this_in_production"
FRONTEND_URL="http://localhost:3000"
```

## File: bruno/ShifoCRM-Backend/.gitignore

```
# Secrets
.env*

# Dependencies
node_modules

# OS files
.DS_Store
Thumbs.db
```

## File: bruno/ShifoCRM-Backend/opencollection.yml

```yaml
opencollection: 1.0.0

info:
    name: ShifoCRM-Backend
bundled: false
extensions:
    bruno:
        ignore:
            - node_modules
            - .git
```

## File: bruno/ShifoCRM-Backend/Ping.yml

```yaml
info:
    name: Ping
    type: http
    seq: 1

http:
    method: GET
    url: ""
    auth: inherit

settings:
    encodeUrl: true
    timeout: 0
    followRedirects: true
    maxRedirects: 5
```

## File: docker-compose.yml

```yaml
services:
    db:
        image: postgres:16-alpine
        container_name: shifocrm-db
        restart: always
        environment:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: yourpassword
            POSTGRES_DB: shifocrm
        ports:
            - "5432:5432"
        volumes:
            - postgres_data:/var/lib/postgresql/data

volumes:
    postgres_data:
```

## File: prettier.config.ts

```typescript
import type { Config } from "prettier";
export default {
    semi: true,
    singleQuote: false,
    trailingComma: "all",
    printWidth: 150,
    tabWidth: 4,
    useTabs: false,
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
} satisfies Config;
```

## File: prisma.config.ts

```typescript
// This file was generated by Prisma, and assumes you have installed the following:
// npm install --save-dev prisma dotenv
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL"],
    },
});
```

## File: README.md

```markdown

```

## File: tsconfig.build.json

```json
{
    "extends": "./tsconfig.json",
    "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}
```

## File: nest-cli.json

```json
{
    "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "src",
    "compilerOptions": {
        "builder": "tsc",
        "deleteOutDir": true
    }
}
```

## File: src/app.controller.ts

```typescript
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
```

## File: src/app.module.ts

```typescript
// src/app.module.ts
import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module.js";
import { AuthModule } from "./auth/auth.module.js";
import { InventoryModule } from "./inventory/inventory.module.js";
import { PatientsModule } from "./patients/patients.module.js";
import { PaymentsModule } from "./payments/payments.module.js";
import { VisitsModule } from "./visits/visits.module.js";

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        VisitsModule,
        InventoryModule,
        PatientsModule,
        PaymentsModule, // Register it here
    ],
})
export class AppModule {}
```

## File: src/app.service.ts

```typescript
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }
}
```

## File: src/auth/auth.controller.ts

```typescript
// src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @HttpCode(HttpStatus.OK)
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
```

## File: src/auth/dto/login.dto.ts

```typescript
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty({ message: "Email yoki telefon raqami kiritilishi shart" })
    identifier: string;

    @IsString()
    @IsNotEmpty({ message: "Parol kiritilishi shart" })
    @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" })
    password: string;
}
```

## File: src/auth/guards/jwt-auth.guard.ts

```typescript
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    handleRequest(err: any, user: any, info: any) {
        // You can throw a custom exception or return the user
        if (err || !user) {
            throw err || new UnauthorizedException("Siz ushbu amalni bajarish uchun tizimga kirmagansiz");
        }
        return user;
    }
}
```

## File: src/inventory/inventory.module.ts

```typescript
import { Module } from "@nestjs/common";
import { InventoryController } from "./inventory.controller.js";
import { InventoryService } from "./inventory.service.js";

@Module({
    controllers: [InventoryController],
    providers: [InventoryService],
})
export class InventoryModule {}
```

## File: src/main.ts

```typescript
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module.js";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 1. Enable CORS for your Vue frontend
    app.enableCors({
        origin: true, // In production, replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });

    // 2. Set global prefix (e.g., http://localhost:3000/api/patients)
    app.setGlobalPrefix("api");

    // 3. Enable auto-validation for DTOs
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.listen(process.env.PORT || 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
```

## File: src/patients/patients.module.ts

```typescript
import { Module } from "@nestjs/common";
import { PatientsController } from "./patients.controller.js";
import { PatientsService } from "./patients.service.js";

@Module({
    providers: [PatientsService],
    controllers: [PatientsController],
})
export class PatientsModule {}
```

## File: src/payments/payments.controller.ts

```typescript
import { Controller, Get } from "@nestjs/common";
import type { PaymentsService } from "./payments.service.js";

@Controller("payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Get()
    findAll() {
        return this.paymentsService.findAll();
    }
}
```

## File: src/payments/payments.module.ts

```typescript
import { Module } from "@nestjs/common";
import { PaymentsController } from "./payments.controller.js";
import { PaymentsService } from "./payments.service.js";
@Module({
    controllers: [PaymentsController],
    providers: [PaymentsService],
})
export class PaymentsModule {}
```

## File: src/prisma/prisma.module.ts

```typescript
import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service.js";

@Global() // This makes PrismaService available everywhere without re-importing the module
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
```

## File: src/visits/visits.module.ts

```typescript
import { Module } from "@nestjs/common";
import { VisitsController } from "./visits.controller.js";
import { VisitsService } from "./visits.service.js";

@Module({
    controllers: [VisitsController],
    providers: [VisitsService],
})
export class VisitsModule {}
```

## File: src/auth/auth.module.ts

```typescript
// src/auth/auth.module.ts
import { PrismaModule } from "../prisma/prisma.module.js";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";
import { JwtStrategy } from "./jwt.strategy.js";

@Module({
    imports: [
        PrismaModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || "super-secret-key", // Use .env in production
            signOptions: { expiresIn: "1d" },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
```

## File: src/auth/auth.service.ts

```typescript
// src/auth/auth.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { LoginDto } from "./dto/login.dto.js";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto) {
        // 1. Find user by email or phone
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [{ email: loginDto.identifier }, { phone: loginDto.identifier }],
                isActive: true,
            },
        });

        if (!user) throw new UnauthorizedException("Invalid credentials");

        // 2. Verify password (assuming passwords are hashed in the DB)
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) throw new UnauthorizedException("Invalid credentials");

        // 3. Generate JWT
        const payload = { sub: user.id, clinicId: user.clinicId, role: user.role };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                fullName: user.fullName,
                role: user.role,
                clinicId: user.clinicId,
            },
        };
    }
}
```

## File: src/auth/jwt.strategy.ts

```typescript
// src/auth/jwt.strategy.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET!,
        });
    }

    async validate(payload: { sub: number; clinicId: number; role: string }) {
        const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
        if (!user || !user.isActive) {
            throw new UnauthorizedException();
        }
        return { id: user.id, clinicId: user.clinicId, role: user.role };
    }
}
```

## File: src/inventory/inventory.controller.ts

```typescript
// src/inventory/inventory.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Controller, Get, Post, Body, UseGuards, Request } from "@nestjs/common";
import { InventoryService } from "./inventory.service.js";

@UseGuards(JwtAuthGuard)
@Controller("inventory")
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}

    @Get("items")
    getItems(@Request() req) {
        return this.inventoryService.getItems(req.user.clinicId);
    }

    @Post("consume")
    consumeMaterial(@Request() req, @Body() dto: any) {
        return this.inventoryService.consumeMaterial(req.user.clinicId, req.user.id, dto);
    }
}
```

## File: src/inventory/inventory.service.ts

```typescript
// src/inventory/inventory.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class InventoryService {
    constructor(private prisma: PrismaService) {}

    async getItems(clinicId: number) {
        return this.prisma.inventoryItem.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    // This perfectly replaces the SQL trigger from your Supabase migration
    async consumeMaterial(clinicId: number, doctorId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Check stock
            const item = await tx.inventoryItem.findUnique({ where: { id: dto.itemId } });

            if (!item) throw new BadRequestException("Material not found");
            if (item.quantity < dto.quantity) {
                throw new BadRequestException(`Not enough stock. Available: ${item.quantity}`);
            }

            // 2. Deduct stock
            await tx.inventoryItem.update({
                where: { id: dto.itemId },
                data: { quantity: { decrement: dto.quantity } },
            });

            // 3. Log movement (Out)
            await tx.inventoryMovement.create({
                data: {
                    clinicId,
                    movementType: "OUT",
                    itemId: dto.itemId,
                    quantity: dto.quantity,
                    notes: dto.note || "Consumption during visit",
                },
            });

            // 4. Record consumption
            return tx.inventoryConsumption.create({
                data: {
                    itemId: dto.itemId,
                    visitId: dto.visitId,
                    doctorId,
                    quantity: dto.quantity,
                },
            });
        });
    }
}
```

## File: src/patients/patients.controller.ts

```typescript
// src/patients/patients.controller.ts
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { Controller, Get, Post, Body, UseGuards, Request } from "@nestjs/common";
import type { PatientsService } from "./patients.service.js";

@UseGuards(JwtAuthGuard)
@Controller("patients")
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Get()
    findAll(@Request() req) {
        return this.patientsService.findAll(req.user.clinicId);
    }

    @Post()
    create(@Request() req, @Body() dto: any) {
        return this.patientsService.create(req.user.clinicId, dto);
    }
}
```

## File: src/patients/patients.service.ts

```typescript
// src/patients/patients.service.ts
import type { PrismaService } from "../prisma/prisma.service.js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PatientsService {
    constructor(private prisma: PrismaService) {}

    async findAll(clinicId: number) {
        return this.prisma.patient.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
        });
    }

    async create(clinicId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Create Patient
            const patient = await tx.patient.create({
                data: {
                    clinicId,
                    fullName: dto.fullName,
                    phone: dto.phone,
                    birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
                    gender: dto.gender,
                    address: dto.address,
                    doctorId: dto.doctorId,
                    status: dto.status || "active",
                    notes: dto.notes,
                },
            });

            // 2. Auto-create first visit if requested (matches frontend logic)
            if (dto.createFirstVisit) {
                await tx.visit.create({
                    data: {
                        clinicId,
                        patientId: patient.id,
                        doctorId: dto.doctorId,
                        status: "PENDING",
                        notes: "Birinchi tashrif (avtomatik yaratilgan)",
                    },
                });
            }

            return patient;
        });
    }
}
```

## File: src/payments/payments.service.ts

```typescript
import { Injectable } from "@nestjs/common";
import type { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class PaymentsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, dto: any) {
        return this.prisma.$transaction(async (tx) => {
            // 1. Create the payment record
            const payment = await tx.payment.create({
                data: {
                    clinicId,
                    visitId: dto.visitId,
                    patientId: dto.patientId,
                    doctorId: dto.doctorId,
                    amount: dto.amount,
                    method: dto.method,
                    note: dto.note,
                    paymentType: dto.paymentType || "payment",
                },
            });

            // 2. If linked to a visit, update the visit's paid/debt totals
            if (dto.visitId) {
                const visit = await tx.visit.findUnique({ where: { id: dto.visitId } });
                if (visit) {
                    const newPaidAmount = Number(visit.paidAmount || 0) + Number(dto.amount);
                    const price = Number(visit.price || 0);
                    const newDebt = price - newPaidAmount;

                    await tx.visit.update({
                        where: { id: dto.visitId },
                        data: {
                            paidAmount: newPaidAmount,
                            debtAmount: newDebt > 0 ? newDebt : null,
                            status: newDebt <= 0 ? "COMPLETED_PAID" : "COMPLETED_DEBT",
                        },
                    });
                }
            }

            return payment;
        });
    }

    async getClinicPayments(clinicId: number) {
        return this.prisma.payment.findMany({
            where: { clinicId },
            include: { patient: true, doctor: true },
            orderBy: { createdAt: "desc" },
        });
    }

    findAll() {
        // return all payments; replace with real implementation

        return [];
    }
}
```

## File: src/visits/visits.controller.ts

```typescript
// src/visits/visits.controller.ts
import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from "@nestjs/common";
import type { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";
import type { VisitsService } from "./visits.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";

@UseGuards(JwtAuthGuard)
@Controller("visits")
export class VisitsController {
    constructor(private readonly visitsService: VisitsService) {}

    @Post()
    create(@Request() req, @Body() createVisitDto: CreateVisitDto) {
        return this.visitsService.create(req.user.clinicId, createVisitDto);
    }

    @Get()
    findAll(@Request() req) {
        return this.visitsService.findAllByClinic(req.user.clinicId);
    }

    @Patch(":id")
    update(@Request() req, @Param("id") id: string, @Body() updateVisitDto: UpdateVisitDto) {
        return this.visitsService.update(req.user.clinicId, +id, updateVisitDto);
    }
}
```

## File: .gitignore

```
# compiled output
/dist
/node_modules
/build

# Logs
logs
*.log
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS
.DS_Store

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# temp directory
.temp
.tmp

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

src/prisma/client
```

## File: prisma/schema.prisma

```prisma
generator client {
  provider = "prisma-client"
  generatedFileExtension = "ts"
  moduleFormat = "esm"
  compilerBuild = "fast"
  importFileExtension = "js"
  runtime = "nodejs"
  output   = "../src/prisma/client"
}

datasource db {
  provider = "postgresql"
}
enum Role {
  SUPER_ADMIN
  ADMIN
  DOCTOR
  RECEPTIONIST
}

enum VisitStatus {
  PENDING
  ARRIVED
  IN_PROGRESS
  COMPLETED_DEBT
  COMPLETED_PAID
  CANCELLED
  NO_SHOW
  ARCHIVED
}

model Clinic {
  id         Int      @id @default(autoincrement())
  name       String
  slug       String   @unique
  logoUrl    String?  @map("logo_url")
  maxDoctors Int      @default(4) @map("max_doctors")
  isActive   Boolean  @default(true) @map("is_active")
  createdAt  DateTime @default(now()) @map("created_at")
  updatedAt  DateTime @updatedAt @map("updated_at")

  users              User[]
  patients           Patient[]
  visits             Visit[]
  payments           Payment[]
  inventoryItems     InventoryItem[]
  inventoryMovements InventoryMovement[]
  expenses           Expense[]
  odontograms        Odontogram[]

  @@map("clinics")
}

model User {
  id             Int      @id @default(autoincrement())
  clinicId       Int?     @map("clinic_id")
  email          String?  @unique
  phone          String?  @unique
  password       String
  fullName       String   @map("full_name")
  role           Role     @default(DOCTOR)
  specialization String?
  isActive       Boolean  @default(true) @map("is_active")
  workSchedule   Json?    @map("work_schedule")
  createdAt      DateTime @default(now()) @map("created_at")
  updatedAt      DateTime @updatedAt @map("updated_at")

  clinic             Clinic?             @relation(fields: [clinicId], references: [id])
  patients           Patient[]
  visits             Visit[]
  visitServices      VisitService[]
  payments           Payment[]
  consumptions       InventoryConsumption[]
  treatmentPlans     TreatmentPlan[]

  @@map("users")
}

model Patient {
  id              Int      @id @default(autoincrement())
  clinicId        Int      @map("clinic_id")
  doctorId        Int?     @map("doctor_id")
  fullName        String   @map("full_name")
  phone           String
  birthDate       DateTime? @db.Date @map("birth_date")
  gender          String?
  address         String?
  status          String   @default("active")
  notes           String?
  lastVisit       DateTime? @db.Date @map("last_visit")
  nextAppointment DateTime? @db.Date @map("next_appointment")
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")

  clinic         Clinic          @relation(fields: [clinicId], references: [id])
  doctor         User?           @relation(fields: [doctorId], references: [id])
  visits         Visit[]
  payments       Payment[]
  odontograms    Odontogram[]
  visitServices  VisitService[]
  treatmentPlans TreatmentPlan[]

  @@map("patients")
}

model Visit {
  id              Int         @id @default(autoincrement())
  clinicId        Int         @map("clinic_id")
  patientId       Int         @map("patient_id")
  doctorId        Int?        @map("doctor_id")
  date            DateTime    @default(now()) @db.Date
  startTime       String?     @map("start_time") @db.VarChar(5)
  endTime         String?     @map("end_time") @db.VarChar(5)
  durationMinutes Int?        @default(30) @map("duration_minutes")
  status          VisitStatus @default(PENDING)
  notes           String?
  price           Decimal?    @db.Decimal(12, 2)
  paidAmount      Decimal?    @map("paid_amount") @db.Decimal(12, 2)
  debtAmount      Decimal?    @map("debt_amount") @db.Decimal(12, 2)
  createdAt       DateTime    @default(now()) @map("created_at")
  updatedAt       DateTime    @updatedAt @map("updated_at")

  clinic         Clinic                 @relation(fields: [clinicId], references: [id])
  patient        Patient                @relation(fields: [patientId], references: [id])
  doctor         User?                  @relation(fields: [doctorId], references: [id])
  payments       Payment[]
  services       VisitService[]
  consumptions   InventoryConsumption[]
  odontogram     Odontogram?
  treatmentPlans TreatmentPlan[]

  @@map("visits")
}

model Payment {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  visitId     Int?     @map("visit_id")
  patientId   Int?     @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  amount      Decimal  @db.Decimal(12, 2)
  paymentType String   @default("payment") @map("payment_type")
  method      String?
  note        String?
  paidAt      DateTime @default(now()) @map("paid_at")
  createdAt   DateTime @default(now()) @map("created_at")

  clinic  Clinic   @relation(fields: [clinicId], references: [id])
  visit   Visit?   @relation(fields: [visitId], references: [id])
  patient Patient? @relation(fields: [patientId], references: [id])
  doctor  User?    @relation(fields: [doctorId], references: [id])

  @@map("payments")
}

model VisitService {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  visitId     Int      @map("visit_id")
  patientId   Int      @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  toothId     Int?     @map("tooth_id")
  serviceName String   @map("service_name")
  price       Decimal  @default(0) @db.Decimal(12, 2)
  createdAt   DateTime @default(now()) @map("created_at")

  patient Patient @relation(fields: [patientId], references: [id])
  visit   Visit   @relation(fields: [visitId], references: [id])
  doctor  User?   @relation(fields: [doctorId], references: [id])

  @@map("visit_services")
}

model Odontogram {
  id        Int      @id @default(autoincrement())
  clinicId  Int      @map("clinic_id")
  patientId Int      @map("patient_id")
  visitId   Int      @unique @map("visit_id")
  data      Json     @default("{\"teeth\": {}}")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  clinic  Clinic  @relation(fields: [clinicId], references: [id])
  patient Patient @relation(fields: [patientId], references: [id])
  visit   Visit   @relation(fields: [visitId], references: [id])

  @@map("odontograms")
}

model InventoryItem {
  id                 Int      @id @default(autoincrement())
  clinicId           Int      @map("clinic_id")
  name               String
  description        String?
  quantity           Int      @default(0)
  unitPrice          Decimal  @map("unit_price") @db.Decimal(12, 2)
  createdAt          DateTime @default(now()) @map("created_at")
  updatedAt          DateTime @updatedAt @map("updated_at")

  clinic             Clinic                 @relation(fields: [clinicId], references: [id])
  movements          InventoryMovement[]
  consumptions       InventoryConsumption[]

  @@map("inventory_items")
}

model InventoryMovement {
  id              Int      @id @default(autoincrement())
  clinicId        Int      @map("clinic_id")
  itemId          Int      @map("item_id")
  movementType    String   @map("movement_type")
  quantity        Int
  notes           String?
  createdAt       DateTime @default(now()) @map("created_at")

  clinic          Clinic        @relation(fields: [clinicId], references: [id])
  item            InventoryItem @relation(fields: [itemId], references: [id])

  @@map("inventory_movements")
}

model InventoryConsumption {
  id          Int      @id @default(autoincrement())
  visitId     Int      @map("visit_id")
  itemId      Int      @map("item_id")
  doctorId    Int?     @map("doctor_id")
  quantity    Int
  createdAt   DateTime @default(now()) @map("created_at")

  visit       Visit         @relation(fields: [visitId], references: [id])
  item        InventoryItem @relation(fields: [itemId], references: [id])
  doctor      User?         @relation(fields: [doctorId], references: [id])

  @@map("inventory_consumptions")
}

model Expense {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  description String
  amount      Decimal  @db.Decimal(12, 2)
  category    String?
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  clinic      Clinic   @relation(fields: [clinicId], references: [id])

  @@map("expenses")
}

model TreatmentPlan {
  id          Int      @id @default(autoincrement())
  clinicId    Int      @map("clinic_id")
  patientId   Int      @map("patient_id")
  doctorId    Int?     @map("doctor_id")
  visitId     Int      @map("visit_id")
  description String?
  status      String   @default("active")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  patient     Patient  @relation(fields: [patientId], references: [id])
  doctor      User?    @relation(fields: [doctorId], references: [id])
  visit       Visit    @relation(fields: [visitId], references: [id])

  @@map("treatment_plans")
}
```

## File: src/scripts/seed.ts

```typescript
import { PrismaClient } from "../prisma/client/client.js";
import * as bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL as string });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
    const password = await bcrypt.hash("admin123456", 10);

    // 1. Create a Default Clinic
    const clinic = await prisma.clinic.upsert({
        where: { slug: "shifo-test-clinic" },
        update: {},
        create: {
            name: "Shifo Test Clinic",
            slug: "shifo-test-clinic",
            maxDoctors: 5,
        },
    });

    // 2. Create a Super Admin
    await prisma.user.upsert({
        where: { email: "admin@shifo.com" },
        update: {},
        create: {
            email: "admin@shifo.com",
            password,
            fullName: "Super Admin",
            role: "SUPER_ADMIN",
            clinicId: clinic.id,
        },
    });

    console.log("✅ Database seeded: Login with admin@shifo.com / admin123456");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
```

## File: src/visits/dto/visit.dto.ts

```typescript
import { IsNumber, IsOptional, IsString, IsEnum, IsArray } from "class-validator";
import { VisitStatus } from "../../prisma/client/client.js";

export class CreateVisitDto {
    @IsNumber()
    patientId: number;

    @IsOptional()
    @IsNumber()
    doctorId?: number;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    paidAmount?: number;
}

export class UpdateVisitDto extends CreateVisitDto {
    @IsOptional()
    @IsEnum(VisitStatus)
    status?: VisitStatus;

    @IsOptional()
    @IsNumber()
    debtAmount?: number;
}
```

## File: src/visits/visits.service.ts

```typescript
// src/visits/visits.service.ts
import { PrismaService } from "../prisma/prisma.service.js";
import { Injectable, NotFoundException } from "@nestjs/common";
import { VisitStatus } from "../prisma/client/enums.js";
import { CreateVisitDto, UpdateVisitDto } from "./dto/visit.dto.js";

@Injectable()
export class VisitsService {
    constructor(private prisma: PrismaService) {}

    async create(clinicId: number, data: CreateVisitDto) {
        const debtAmount = this.calculateDebt(data.price, data.paidAmount);

        return this.prisma.visit.create({
            data: {
                ...data,
                clinicId,
                debtAmount,
            },
        });
    }

    async update(clinicId: number, id: number, data: UpdateVisitDto) {
        const existing = await this.prisma.visit.findFirst({
            where: { id, clinicId },
        });

        if (!existing) throw new NotFoundException("Visit not found");

        const price = data.price !== undefined ? data.price : Number(existing.price);
        const paidAmount = data.paidAmount !== undefined ? data.paidAmount : Number(existing.paidAmount);
        let debtAmount = data.debtAmount !== undefined ? data.debtAmount : this.calculateDebt(price, paidAmount);
        let status = data.status || existing.status;

        // Status workflow logic derived from your VISIT_STATUS_WORKFLOW.md
        if (debtAmount === 0 && status === VisitStatus.COMPLETED_DEBT) {
            status = VisitStatus.COMPLETED_PAID;
            debtAmount = null;
        } else if (debtAmount !== null && debtAmount > 0 && status === VisitStatus.COMPLETED_PAID) {
            status = VisitStatus.COMPLETED_DEBT;
        }

        return this.prisma.visit.update({
            where: { id },
            data: {
                ...data,
                status,
                debtAmount,
            },
        });
    }

    async findAllByClinic(clinicId: number) {
        return this.prisma.visit.findMany({
            where: { clinicId },
            orderBy: { createdAt: "desc" },
            include: { patient: true, doctor: true },
        });
    }

    private calculateDebt(price?: number, paidAmount?: number): number | null {
        if (!price || price <= 0) return null;
        const paid = paidAmount || 0;
        const debt = price - paid;
        return debt > 0 ? debt : null;
    }
}
```

## File: src/auth/guards/roles.guard.ts

```typescript
import { Injectable, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Role } from "../../prisma/client/client.js";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>("roles", [context.getHandler(), context.getClass()]);
        if (!requiredRoles) return true;

        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role === role);
    }
}
```

## File: src/prisma/prisma.service.ts

```typescript
// src/prisma/prisma.service.ts
import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../prisma/client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const pool = new PrismaPg({
            connectionString: process.env.DATABASE_URL!,
            ssl: { rejectUnauthorized: false },
        });
        super({ adapter: pool });
    }
    async onModuleInit() {
        await this.$connect();
    }
}
```

## File: tsconfig.json

```json
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "resolvePackageJsonExports": false,
        "esModuleInterop": false,
        "isolatedModules": true,
        "declaration": true,
        "removeComments": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "allowSyntheticDefaultImports": false,
        "target": "esnext",
        "sourceMap": true,
        "outDir": "./dist",
        "verbatimModuleSyntax": true,
        "baseUrl": "./",
        "incremental": true,
        "skipLibCheck": false,
        "strictNullChecks": true,
        "forceConsistentCasingInFileNames": true,
        "noImplicitAny": false,
        "strictBindCallApply": false,
        "noFallthroughCasesInSwitch": false
    },
    "include": ["./src"]
}
```

## File: package.json

```json
{
    "name": "shifocrm-backend",
    "type": "module",
    "private": true,
    "scripts": {
        "build": "nest build",
        "fmt": "prettier --write \"src/**/*.ts\"",
        "start": "nest start",
        "0start:dev": "nest start --watch",
        "start:debug": "nest start --debug --watch",
        "start:prod": "node dist/main",
        "prisma:gen": "rimraf ./src/prisma/client && prisma generate",
        "prisma:m:dev": "prisma migrate dev",
        "prisma:m:prod": "prisma migrate prod",
        "postinstall": "npm run prisma:gen",
        "prisma:std": "prisma studio",
        "prisma:db:push": "prisma db push",
        "prisma:db:pull": "prisma db pull",
        "prisma:db:reset": "prisma migrate reset",
        "ts:check": "tsc --noEmit",
        "ts:watch": "rimraf ./dist && tsc --watch",
        "dev": "rimraf ./dist && nest start --watch --node-args='--env-file=.env'"
    },
    "dependencies": {
        "@nestjs/common": "^11.1.16",
        "@nestjs/core": "^11.1.16",
        "@nestjs/jwt": "^11.0.2",
        "@nestjs/passport": "^11.0.5",
        "@nestjs/platform-express": "^11.1.16",
        "@prisma/adapter-pg": "^7.5.0",
        "@prisma/client": "^7.5.0",
        "bcrypt": "^6.0.0",
        "class-transformer": "^0.5.1",
        "class-validator": "^0.15.1",
        "passport": "^0.7.0",
        "passport-jwt": "^4.0.1",
        "pg": "^8.20.0",
        "reflect-metadata": "^0.2.2",
        "rxjs": "^7.8.2"
    },
    "devDependencies": {
        "@nestjs/cli": "^11.0.16",
        "@nestjs/schematics": "^11.0.9",
        "@nestjs/testing": "^11.1.16",
        "@types/bcrypt": "^6.0.0",
        "@types/express": "^5.0.6",
        "@types/node": "^25.5.0",
        "@types/passport-jwt": "^4.0.1",
        "@types/pg": "^8.18.0",
        "@types/supertest": "^7.2.0",
        "dotenv": "^17.3.1",
        "globals": "^17.4.0",
        "prettier": "^3.8.1",
        "prisma": "^7.5.0",
        "rimraf": "^6.1.3",
        "source-map-support": "^0.5.21",
        "supertest": "^7.2.2",
        "ts-loader": "^9.5.4",
        "ts-node": "^10.9.2",
        "tsconfig-paths": "^4.2.0",
        "typescript": "^5.9.3"
    },
    "version": "0.0.1",
    "description": "ShifoCRM Backend Server",
    "license": "UNLICENSED",
    "engines": {
        "node": ">=24"
    },
    "author": {
        "email": "mirasayon@ya.ru",
        "name": "Miralisher Agzamov",
        "url": "https://mirasayon.com"
    }
}
```
