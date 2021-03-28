import { ComponentType, PropsWithChildren } from "react"

interface IPropContainer {
    cardWidth?: number,
    cardHeight?: number,
    cardRadius?: number,
    cardColorBorder?: string,
    cardBackground?: string,
    cardGlass?: number,
    cardPaddingAll?: number,
    cardPaddingLeft?: number,
    cardPaddingRight?: number,
    cardPaddingTop?: number,
    cardPaddingBottom?: number,
}

export interface IContactGlass extends PropsWithChildren<IPropContainer> {
    contactName: string,
    contactImage: string | any,
    contactLastMessage: string,
    contactDateMessage: string,
    contactIsOnline: boolean,
    contactReadMessage: boolean,
    contactNumberOfMessage?: number
}

declare const ContactGlass: ComponentType<IContactGlass>

export default ContactGlass
