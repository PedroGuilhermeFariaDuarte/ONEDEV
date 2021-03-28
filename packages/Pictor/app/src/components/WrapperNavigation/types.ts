import { PropsWithChildren } from "react"
import { Socket } from 'socket.io-client'

export interface IWrapperNavigation extends PropsWithChildren<any> {
    socket: typeof Socket | any,
}
