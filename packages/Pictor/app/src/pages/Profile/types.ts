import { PropsWithChildren, HTMLAttributes } from "react"
import { StyledProps } from "styled-components"

// Styled
export interface IHeader extends StyledProps<HTMLAttributes<any>> {
    headerBackground: string
}

export interface IImageProfile extends StyledProps<HTMLAttributes<any>> {
    imageBackground: string
}

export interface IProfile extends PropsWithChildren<any> { }
