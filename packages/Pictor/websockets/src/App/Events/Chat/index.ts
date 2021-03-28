import { Socket } from "socket.io"
import { promisify } from "util"

export async function handlerReceiveChatUser(socket: Socket, redis: any) {
    socket.on("receiveMessage", async data => {
        const targertEvent = await promisify(redis.get.bind(redis))(`"${data?.target?.idTarget}"`)
        const userSocket = targertEvent.replace(/"/g, '')
            .trim()

        if (userSocket !== '') {
            console.log("Pictor WarningWebsocket: event ok", userSocket)
            socket.to(`${userSocket}`).emit("chatReceive", data)
        }
    })
}

