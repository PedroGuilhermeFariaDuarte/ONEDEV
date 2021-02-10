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

interface PropsInput {
    inputPlaceholderColor?: string,
}

export interface IInputGlass extends PropsWithChildren<IPropContainer> {
    inputPlaceholder?: string,
    inputPlaceholderColor?: string,
    buttonName?: string
    buttonColor?: string
    buttonCallBack?: Function
}

declare const InputGlass: ComponentType<IInputGlass>

export default InputGlass
