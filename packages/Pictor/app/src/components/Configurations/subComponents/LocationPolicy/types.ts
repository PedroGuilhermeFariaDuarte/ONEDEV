import { PropsWithChildren } from "react"

export interface ILocationPolicy extends PropsWithChildren<any> {
    user?: any
}

export interface IUserData {
    type: string,
    coordinates: Array<number | Number>
}
