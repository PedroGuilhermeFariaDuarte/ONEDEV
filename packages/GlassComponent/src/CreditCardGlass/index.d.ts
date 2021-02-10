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

// Use only in React components
export interface ICreditCard extends PropsWithChildren<IPropContainer> {
    cardTitle?: string,
    cardNumber?: number,
    cardNamePersonal?: string,
    cardDateValid?: string,
    cardChipImage?: any
}

declare const CreditCardGlass: ComponentType<ICreditCard>

export default CreditCardGlass
