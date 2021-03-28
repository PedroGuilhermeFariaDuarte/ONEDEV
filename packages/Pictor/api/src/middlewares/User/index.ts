import { Request, Response, NextFunction } from "express"
import * as Yup from "yup"

// Handlers
import { handlerValidationError } from "@handlers/Error/Validations"

// Schema
import { SchemaUserCreate, SchemaUserIndex, SchemaUserUpdate, SchemaGeoUserIndex } from "@schemas/User"

export async function UserCreateValidation(request: Request, response: Response, next: NextFunction) {
    try {
        await SchemaUserCreate.validate(request.body, {
            abortEarly: true,
        })

        next()
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            handlerValidationError(response, 1, 400, `Pictor UserCreateValidationError: ${error.message}`)
        }
    }
}

export async function UserUsernameValidation(request: Request, response: Response, next: NextFunction) {
    try {
        await SchemaUserIndex.validate(request.params, {
            abortEarly: true,
        })

        next()
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            handlerValidationError(response, 1, 400, `Pictor UserValidationError: ${error.message}`)
        }
    }
}

export async function UserUpdateValidation(request: Request, response: Response, next: NextFunction) {
    try {
        await SchemaUserUpdate.validate(request.params, {
            abortEarly: true,
        })

        next()
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            handlerValidationError(response, 1, 400, `Pictor UserCreateValidationError: ${error.message}`)
        }
    }
}

export async function GeoUserValidation(request: Request, response: Response, next: NextFunction) {
    try {
        await SchemaGeoUserIndex.validate(request.params, {
            abortEarly: true,
        })

        next()
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            handlerValidationError(response, 1, 400, `Pictor UserCreateValidationError: ${error.message}`)
        }
    }
}
