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

export interface IInputMessageGlass extends PropsWithChildren<IPropContainer> {
    inputMessagePlaceholder?: string,
    inputMessageMaxChar?: number,
    inputMessageEmoji?: boolean
    inputMessageButtonColorBackground?: string,
    inputMessageButtonColor?: string,
    inputMessageButtomFile?: boolean,
    inputMessagePlaceholderColor?: string,
    inputMessageTextContentColor?: string,

    inputMessageSend: FunctionStringCallback,
    inputMessageFile?: Function | undefined,
}


declare const InputMessageGlass: ComponentType<IInputMessageGlass>

export default InputMessageGlass
