import { ComponentType, PropsWithChildren, } from "react"

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

export interface IBoxChatGlass extends PropsWithChildren<IPropContainer> {
    boxChatTitle?: string,
    boxChatContent?: string,
    boxChatOnMe: boolean
}

declare const BoxChatGlass: ComponentType<IBoxChatGlass>

export default BoxChatGlass
