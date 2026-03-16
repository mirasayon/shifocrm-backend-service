import { Injectable, type NestMiddleware } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import type { NextFunction, Request, Response } from "express";

const REQUEST_ID_HEADER = "x-request-id";

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const headerValue = req.headers[REQUEST_ID_HEADER];
        const requestId = (Array.isArray(headerValue) ? headerValue[0] : headerValue) || randomUUID();

        req.requestId = requestId;
        res.setHeader(REQUEST_ID_HEADER, requestId);
        next();
    }
}

