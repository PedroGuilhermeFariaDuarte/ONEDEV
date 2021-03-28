import { PropsWithChildren } from "react"
import { Socket } from "socket.io-client"

export interface IMyMessage extends PropsWithChildren<any> {
    socket: typeof Socket | any
}

export interface IChatLocations {
    id: string
    name: string
    username: string
    description: string
    location: {
        coordinates: Array<number>,
        _id: string
        type: string
    },
    distanceField: {
        calculated: string
    }
    message?: {
        content: string,
        dateSend: string
    }
}

export interface IChatting {
    idTarget: string
    idFrom: string
    fullName: string
    username: string
    description: string
    distance: string,
    messageFrom?: Array<{
        content: string,
        dateSend: string
    }>,
    messageTo?: Array<{
        content: string,
        dateSend: string
    }>
}

export interface IChattingEvent {
    target: {
        idTarget: string,
        fullName: string,
        username: string,
        description: string,
        distance: string,
        dataInvite: string,
    },
    from: {
        idFrom: string,
        fullName: string,
        username: string,
        description: string,
        distance: string,
        dataInvite: string,
        message: string,
    }
}
