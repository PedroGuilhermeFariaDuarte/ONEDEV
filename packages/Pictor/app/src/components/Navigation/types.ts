import { PropsWithChildren } from "react"
import { StyledProps } from "styled-components"

// Styled components
export interface IStyledItemContainer extends StyledProps<any> {
    itemBackgroundColor?: string,
    itemSvgColor?: string
}

export interface IStyledContainerItem extends StyledProps<any> {
    containerItemSelected?: boolean
}

export interface INavigation extends PropsWithChildren<any> { }
