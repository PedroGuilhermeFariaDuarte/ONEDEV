import { Request, Response, NextFunction } from "express"
import { ObjectID } from "mongodb"
import mongoose from "mongoose"
import * as Yup from "yup"

// Models
import UserModel from "@models/User"

// Handlers
import { handlerValidationError } from "@handlers/Error/Validations"

// Schema
import { SchemaUserFollwing } from "@schemas/Following"

export async function UserCreateValidation(request: Request, response: Response, next: NextFunction) {
    try {
        await SchemaUserFollwing.validate(request.body, {
            abortEarly: true,
        })

        next()
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            handlerValidationError(response, 1, 400, `Pictor UserFollwingValidationError: ${error.message}`)
        }
    }
}

export function handlerValidationIDuser(request: Request, response: Response, next: NextFunction) {
    try {
        if (
            mongoose.isValidObjectId(new ObjectID(request?.params?.idUser).toHexString()) === true
            ||
            mongoose.isValidObjectId(new ObjectID(request?.params?.idFollowing).toHexString()) === true
        ) {
            next()
            return;
        }

        handlerValidationError(response, 1, 400, `Pictor UserFollwingValidationError:  ID is not valid`)
    } catch (error) {
        handlerValidationError(response, 1, 400, `Pictor UserFollwingValidationError: ${error.message}`)
    }
}

export async function handlerVerifyUserExists(request: Request, response: Response, next: NextFunction) {
    try {
        const userExist = await UserModel.findById(
            request?.params?.idFollowing || request?.body?.id
        )

        if (!userExist) {
            handlerValidationError(response, 1, 404, `Pictor UserFollwingValidationError: The user for following not exists`)
        }

        next()
        return;
    } catch (error) {
        handlerValidationError(response, 1, 400, `Pictor UserFollwingValidationError: ${error.message}`)
    }
}
