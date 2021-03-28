import { Response } from "express"

export function handlerUserError(response: Response, typeResponse: number, codeStatus: number, message: string) {
    if (typeResponse === 0)
        console.log(`Pictor HandlerUserError ${message}`)
    else if (typeResponse === 1)
        response.json({
            code: codeStatus,
            message: message
        })
    else
        throw new Error("Pictor HandlerUserError: typeResponse is invalid")
}
