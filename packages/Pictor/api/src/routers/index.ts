import express from "express"

// Middlewares
import {
    UserCreateValidation,
    UserUsernameValidation,
    UserUpdateValidation,
    GeoUserValidation
} from "@middlewares/User"

// Controllers
import UserController from "@controllers/User"
import GeoUserController from "@controllers/GeoUser"

const router = express.Router()

router.route("/user/create")
    .post(UserCreateValidation, UserController.create)

router.route("/user/myuser/:username")
    .get(UserUsernameValidation, UserController.index)

router.route("/user/update/:idUser")
    .put(UserUpdateValidation, UserController.update)
    .delete(UserController.delete)

router.route("/user/all")
    .get(UserController.show)

router.route('/user/locations/:longitude/:latitude/:minDistance/:maxDistance/:idUser')
    .get(GeoUserValidation, GeoUserController.index)

export default router
