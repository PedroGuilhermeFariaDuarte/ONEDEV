import { PropsWithChildren, } from "react"
import { StyledProps } from "styled-components"

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

interface PropsButton {
    buttonName?: string
    buttonColor?: string
    boxMessageButtonColor?: string
    boxMessageButtonTextColor?: string
}

interface PropsInput {
    inputPlaceholderColor?: string,
}

interface PropsBoxChat {
    boxChatOnMe: boolean
}

// Use only in styled-components
export interface CardContainer extends StyledProps<IPropContainer> {
}

export interface StyledButton extends StyledProps<PropsButton> {
}

export interface StyledInput extends StyledProps<PropsInput> {
}

export interface StyledBoxChat extends StyledProps<PropsBoxChat> {
}

export interface StyledBoxChat extends StyledProps<PropsInput> {
}

// Use only in React components
export interface ICreditCard extends PropsWithChildren<IPropContainer> {
    cardTitle?: string,
    cardNumber?: number,
    cardNamePersonal?: string,
    cardDateValid?: string,
    cardChipImage?: any
}

export interface IInputGlass extends PropsWithChildren<IPropContainer> {
    inputPlaceholder?: string,
    inputPlaceholderColor?: string,
    buttonName?: string
    buttonColor?: string
}

export interface IBoxMessageGlass extends PropsWithChildren<IPropContainer> {
    boxMessageTitle?: string,
    boxMessageContent?: string,
    boxMessageCallBack?: Function,
    boxMessageButtonText?: string,
    boxMessageButtonColor?: string
    boxMessageButtonTextColor?: string
}

export interface IBoxChatGlass extends PropsWithChildren<IPropContainer> {
    boxChatTitle?: string,
    boxChatContent?: string,
    boxChatOnMe: boolean
}

