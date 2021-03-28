import { Socket } from "socket.io"
import { promisify } from "util"

export async function handlerReceiveInvinteUser(socket: Socket, redis: any) {
    socket.on("receiveInvite", async data => {
        const targertEvent = await promisify(redis.get.bind(redis))(`"${data?.target?.idTarget}"`)
        const userSocket = targertEvent.replace(/"/g, '')
            .trim()

        if (userSocket !== '') {
            console.log("Pictor WarningWebsocket: event ok", userSocket)
            console.log(data)
            socket.to(`${userSocket}`).emit("chatInvite", data)
        }
    })
}

