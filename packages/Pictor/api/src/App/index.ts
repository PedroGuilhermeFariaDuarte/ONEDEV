import express, { Express } from "express"
import cors from "cors"

// Types
import { IHandlerRequest } from './types'

// Routers
import Routers from "@routers/index"
import FollowingRouters from "@routers/Following"

// Database
import Database from "@database/index"

class App {
    server: Express

    constructor() {
        this.server = express()
        this.init()
    }

    init() {
        this.database()
        this.middleware()
        this.routers()
    }

    routers() {
        this.server.use([
            Routers,
            FollowingRouters
        ])
    }

    database() {
        new Database().init()
    }

    middleware() {
        this.server.use([
            cors({
                origin: "*"
            }),
            express.json()
        ])
    }
}


export default new App().server
