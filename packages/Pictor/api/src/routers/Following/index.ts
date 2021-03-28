import express from "express"

// Middlewares
import {
    UserCreateValidation,
    handlerValidationIDuser,
    handlerVerifyUserExists
} from "@middlewares/Following"

// Controllers
import FollowController from "@controllers/Following"

const router = express.Router()

router.route("/user/following/:idUser")
    .get(handlerValidationIDuser, FollowController.index)

router.route("/user/update/following/:idUser")
    .put(handlerValidationIDuser, handlerVerifyUserExists, UserCreateValidation, FollowController.update)

router.route("/user/delete/following/:idUser/:idFollowing")
    .delete(handlerValidationIDuser, handlerVerifyUserExists, FollowController.delete)

router.route("/user/all/following")
    .get(FollowController.show)

export default router
