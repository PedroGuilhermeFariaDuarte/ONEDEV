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

export interface IBoxMessageGlass extends PropsWithChildren<IPropContainer> {
    boxMessageTitle?: string,
    boxMessageContent?: string,
    boxMessageCallBack?: Function,
    boxMessageButtonText?: string,
    boxMessageButtonColor?: string
    boxMessageButtonTextColor?: string
}

declare const BoxMessageGlass: ComponentType<IBoxMessageGlass>

export default BoxMessageGlass
