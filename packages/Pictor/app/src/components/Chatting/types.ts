import { PropsWithChildren, HTMLAttributes } from "react"
import { Socket } from "socket.io-client"
import { StyledProps } from "styled-components"

export interface IChat extends PropsWithChildren<any> {
    socket: typeof Socket | any
}

export interface IDataMessage {
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

export interface IActualMessage {
    message: string,
    receive: boolean,
}

// Styles
export interface IDiv extends StyledProps<HTMLAttributes<IMessageContainer>> { }

export interface IContainerMessage extends StyledProps<HTMLAttributes<any>> {
    backgroundImage?: string
}

export interface IMessageContainer extends StyledProps<HTMLAttributes<any>> {
    backgroundColor?: string
}
