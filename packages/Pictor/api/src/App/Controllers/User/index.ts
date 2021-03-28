import { Request, Response, NextFunction } from "express"

// Models
import UserModel from "@models/User"

// Handlers
import { handlerUserError } from "@handlers/Error/User"
import { handlerSuccessUser } from "@handlers/Success/User"

class UserController {
    async create(request: Request, response: Response, _next: NextFunction) {
        try {
            const newUser = await UserModel.create(request.body)

            if (newUser) handlerSuccessUser(response, 1, 200, "Request was a success!", {
                ...request.body,
                id: newUser?._id
            })
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }

    async index(request: Request, response: Response, _next: NextFunction) {
        try {
            const data = await UserModel.findOne({
                username: { $eq: request.params.username }
            })

            if (data) handlerSuccessUser(response, 1, 200, "Request was a success!", {
                id: data?._id,
                // @ts-ignore
                name: data?.name,
                // @ts-ignore
                username: data?.username,
                // @ts-ignore
                description: data?.description,
                // @ts-ignore
                location: data?.location,

            })
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }

    async show(_request: Request, response: Response, next: NextFunction) {
        try {
            const data = await UserModel.find()

            if (data) handlerSuccessUser(response, 1, 200, "Request was a success!", data)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await UserModel.findByIdAndDelete(request.params.idUser)

            if (data) handlerSuccessUser(response, 1, 200, "Request was a success!", data)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await UserModel.findByIdAndUpdate(request.params.idUser, request.body)

            if (data) handlerSuccessUser(response, 1, 200, "Request was a success!", data)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }
}

export default new UserController()
