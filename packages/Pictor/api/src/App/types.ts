import { Request, Response } from "express"

export interface IHandlerRequest {
    request: Request,
    response: Response
}
