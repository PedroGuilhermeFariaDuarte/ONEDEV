import { Response } from "express"
import { Document } from "mongoose"

// Handlers
import { handlerUserError } from "@handlers/Error/User"

export function handlerSuccessUser(response: Response, typeResponse: number, codeStatus: number, message: string, data: Object | Array<Object | Document> | null = []) {
    if (typeResponse === 0)
        console.log(`Pictor HandlerSuccessUser ${message}`)
    else if (typeResponse === 1)
        // @ts-ignore
        if (data || data.length > 0) {
            //@ts-ignore
            const newData = data.length > 0 && data.map(user => {
                return {
                    // @ts-ignore
                    id: user?._id,
                    // @ts-ignore
                    name: user?.name,
                    // @ts-ignore
                    username: user?.username,
                    // @ts-ignore
                    description: user?.description,
                    // @ts-ignore
                    location: user?.location,
                    // @ts-ignore
                    distanceField: user?.distanceField || {}
                }
            })

            response.json({
                code: codeStatus,
                message: message,
                //@ts-ignore
                data: newData || data
            })
        } else {
            handlerUserError(response, 1, 404, "Your user not found")
        }
    else
        throw new Error("Pictor HandlerSuccessUserError: typeResponse is invalid")
}

export function handlerSuccess(response: Response, typeResponse: number, codeStatus: number, message: string, data: Object | Array<Object | Document> | null = []) {
    if (typeResponse === 0)
        console.log(`Pictor HandlerSuccessUser ${message}`)
    else if (typeResponse === 1)
        // @ts-ignore
        response.json({
            code: codeStatus,
            message: message,
            data: data
        })
    else
        throw new Error("Pictor HandlerSuccessUserError: typeResponse is invalid")
}
