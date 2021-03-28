import { Request, Response, NextFunction } from "express"
import { ObjectId } from "mongodb"

// Models
import UserModel from "@models/User"

// Handlers
import { handlerUserError } from "@handlers/Error/User"
import { handlerSuccessUser, handlerSuccess } from "@handlers/Success/User"

class FollowController {
    async create(_request: Request, response: Response, _next: NextFunction) {
        handlerUserError(response, 1, 300, `Pictor UserControllerError: access denier`)
    }

    async index(request: Request, response: Response, _next: NextFunction) {
        try {
            const data = await UserModel.findOne({
                _id: { $eq: request?.params?.idUser }
            }, {
                following: 1,
                _id: 0
            })

            if (data) handlerSuccess(response, 1, 200, "Request was a success!", data)
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
            const data = await UserModel.updateOne({
                _id: new ObjectId(request.params?.idUser),
                $pull: {
                    following: {
                        id: { $eq: request.params?.idFollowing }
                    }
                }
            })

            if (data) handlerSuccessUser(response, 1, 200, "Request was a success!", data)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await UserModel.findByIdAndUpdate(request.params.idUser, {
                $push: { following: request.body }
            })

            if (data) handlerSuccessUser(response, 1, 200, "Request was a success!", data)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }
}

export default new FollowController()
