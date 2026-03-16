import { BadRequestException, Catch, type ArgumentsHost, ConflictException, type ExceptionFilter, NotFoundException } from "@nestjs/common";
import { Prisma } from "../../prisma/client/client.js";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        const mapped = this.mapKnownError(exception);
        const httpException = mapped ?? new BadRequestException("Database request failed");
        const status = httpException.getStatus();
        const body = httpException.getResponse();

        response.status(status).json(body);
    }

    private mapKnownError(exception: Prisma.PrismaClientKnownRequestError) {
        switch (exception.code) {
            case "P2002":
                return new ConflictException("Unique constraint violation");
            case "P2003":
                return new ConflictException("Foreign key constraint violation");
            case "P2025":
                return new NotFoundException("Record not found");
            default:
                return null;
        }
    }
}
