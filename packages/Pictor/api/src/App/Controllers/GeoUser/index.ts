import { Request, Response, NextFunction } from "express"
import { ObjectId } from "mongodb"

// Models
import UserModel from "@models/User"

// Handlers
import { handlerUserError } from "@handlers/Error/User"
import { handlerSuccessUser } from "@handlers/Success/User"

class GeoUserController {
    async _create(_request: Request, response: Response, _next: NextFunction) {
        try {
            handlerUserError(response, 1, 400, `Pictor GeoUserControllerError: Your access was negade`)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor GeoUserControllerError: ${error.message}`)
        }
    }

    async index(request: Request, response: Response, _next: NextFunction) {
        try {
            const { longitude, latitude, idUser, minDistance,
                maxDistance } = request.params

            const data = await UserModel.aggregate([
                {
                    $geoNear: {
                        near: {
                            type: 'Point',
                            coordinates: [
                                Number(longitude) || 32.808549,
                                Number(latitude) || -79.880126
                            ],
                        },
                        minDistance: Number(minDistance) || 0,
                        maxDistance: Number(maxDistance) || 1000,
                        query: {
                            _id: { $ne: new ObjectId(idUser) }
                        },
                        distanceField: 'distanceField.calculated',
                        incluideLocs: 'distanceField.location',
                    },
                }
            ])

            if (data.length > 0) handlerSuccessUser(response, 1, 200, "Request was a success!", data)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor UserControllerError: ${error.message}`)
        }
    }

    async _show(_request: Request, response: Response, next: NextFunction) {
        try {
            handlerUserError(response, 1, 400, `Pictor GeoUserControllerError: Your access was negade`)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor GeoUserControllerError: ${error.message}`)
        }
    }

    async _delete(_request: Request, response: Response, next: NextFunction) {
        try {
            handlerUserError(response, 1, 400, `Pictor GeoUserControllerError: Your access was negade`)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor GeoUserControllerError: ${error.message}`)
        }
    }

    async _update(_request: Request, response: Response, next: NextFunction) {
        try {
            handlerUserError(response, 1, 400, `Pictor GeoUserControllerError: Your access was negade`)
        } catch (error) {
            handlerUserError(response, 1, 500, `Pictor GeoUserControllerError: ${error.message}`)
        }
    }
}

export default new GeoUserController()
