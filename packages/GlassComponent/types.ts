import { PropsWithChildren, } from "react"
import { StyledProps } from "styled-components"

interface IPropContainer {
    cardWidth?: number,
    cardHeight?: number,
    cardRadius?: number,
    cardColorBorder?: string,
    cardBackground?: string,
    cardGlass?: number,
}

interface PropsButton {
    buttonName?: string
    buttonColor?: string
}

interface PropsInput {
    inputPlaceholderColor?: string,
}

// Use only in styled-components
export interface CardContainer extends StyledProps<IPropContainer> {
}

export interface StyledButton extends StyledProps<PropsButton> {
}

export interface StyledInput extends StyledProps<PropsInput> {
}

export default interface ICreditCard extends PropsWithChildren<IPropContainer> {
    cardTitle?: string,
    cardNumber?: number,
    cardNamePersonal?: string,
    cardDateValid?: string,
}

export default interface IInputGlass extends PropsWithChildren<IPropContainer> {
    inputPlaceholder?: string,
    inputPlaceholderColor?: string,
    buttonName?: string
    buttonColor?: string
}
