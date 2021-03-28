import { PropsWithChildren } from "react"
import { StyledProps } from "styled-components"


export interface StyledImage extends StyledProps<any> {
    contactImage?: string
}

export interface IContactGlass extends PropsWithChildren<any> {
    contactName: string,
    contactImage: string | any,
    contactLastMessage: string,
    contactDateMessage: string,
    contactIsOnline: boolean,
    contactReadMessage: boolean
}
