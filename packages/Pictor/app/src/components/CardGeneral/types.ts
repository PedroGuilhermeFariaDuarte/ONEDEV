import { PropsWithChildren, HTMLAttributes } from "react"
import { StyledProps } from "styled-components"

export interface IAllProps extends PropsWithChildren<StyledProps<any>> { }

export interface ICardGeneralImageContainer extends StyledProps<HTMLAttributes<any>> {
    backgroundURL?: string
}
