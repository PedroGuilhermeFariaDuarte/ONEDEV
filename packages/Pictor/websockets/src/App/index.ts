import express, { Express } from "express"
import http from "http"
import { Socket } from "socket.io"
const socketIO = require("socket.io")
import cors from "cors"

// Types
import { IHttpBase } from "./types"

// Events
import { handlerConnect } from "./Events/Connection"

class App {
    server: any
    io: Socket
    socketConnected: any

    constructor() {
        this.server = http.createServer(express())
        this.io = socketIO(this.server, {
            cors: {
                origin: '*',
                credentials: false
            }
        })
        this.init()
    }

    init() {
        this.middleware()
        this.socketConnected = handlerConnect(this.io)
    }

    middleware() {
        // this.server.use([
        //     cors({
        //         origin: "*"
        //     }),
        //     express.json()
        // ])
    }
}


export default new App().server
