import { Socket } from "socket.io"
import { promisify } from "util"

// Redis
import client from "../../../services/Redis"

// Events
import { handlerReceiveInvinteUser } from '../Invite'
import { handlerReceiveChatUser } from '../Chat'

export function handlerConnect(socket: Socket) {
    let socketConected: any;
    const redis = client()

    socket.on("connection", async (socketClient) => {
        const { userId } = socketClient?.handshake?.query

        const userExist = await promisify(redis.get.bind(redis))(`"${userId}"`)

        if (userExist?.trim() !== '') {
            redis.set(`"${userId}"`, `"${socketClient?.id}"`)
        }

        redis.set(`"${userId}"`, `"${socketClient?.id}"`)

        handlerReceiveInvinteUser(socketClient, redis)
        handlerReceiveChatUser(socketClient, redis)

        console.log(`Pictor WarningWebSocket: The ${socketClient?.id} was connected with success`)

        socketClient.on("disconnect", () => {
            redis.set(`"${userId}"`, "")
            console.log(`Pictor WarningWebSocket: The ${socketClient?.id} was disconnected with success`)
        })
    })

    return socketConected
}
