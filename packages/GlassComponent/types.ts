import { PropsWithChildren, TextareaHTMLAttributes, HTMLAttributes } from "react"
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
    inputMessageButtonColorBackground?: string,
    inputMessageButtonColor?: string,
}

interface PropsImage {
    contactImage?: string
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

export interface StyledTextArea extends TextareaHTMLAttributes<HTMLAttributes<any>> {
    inputMessagePlaceholderColor?: string,
    inputMessageTextContentColor?: string
}

export interface StyledImage extends StyledProps<PropsImage> { }

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
    buttonColor?: string,
    buttonCallBack?: Function
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

export interface IContactGlass extends PropsWithChildren<IPropContainer> {
    contactName: string,
    contactImage: string | any,
    contactLastMessage: string,
    contactDateMessage: string,
    contactIsOnline: boolean,
    contactReadMessage: boolean,
    contactNumberOfMessage: number
}
