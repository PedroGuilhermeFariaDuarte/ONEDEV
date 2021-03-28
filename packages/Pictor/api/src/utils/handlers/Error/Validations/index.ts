import { Response } from "express"

export function handlerValidationError(response: Response, typeResponse: number, codeStatus: number, message: string) {
    if (typeResponse === 0)
        console.log(`Pictor HandlerErrorValidation ${message}`)
    else if (typeResponse === 1)
        response.json({
            code: codeStatus,
            message: message
        })
    else
        throw new Error("Pictor HandlerErrorValidation: typeResponse is invalid")
}
