import { HTMLAttributes } from "react"
import { StyledProps } from "styled-components"

export interface IButton extends StyledProps<HTMLAttributes<any>> {
    buttonWidth?: number
    buttonHeight?: number
}
