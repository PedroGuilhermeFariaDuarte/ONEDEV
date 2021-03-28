import { ComponentType, PropsWithChildren, ChangeEventHandler } from "react"

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

    accept?: string;
    alt?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean;
    crossOrigin?: string;
    disabled?: boolean;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    type?: "text" | "email" | "phone";
    value?: string | ReadonlyArray<string> | number;
    onChange?: ChangeEventHandler<any>;
}

declare const InputGlass: ComponentType<IInputGlass>

export default InputGlass
