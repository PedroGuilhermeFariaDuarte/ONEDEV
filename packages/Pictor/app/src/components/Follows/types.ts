import { HTMLAttributes } from "react"
import { StyledProps } from "styled-components"

// Styled Types
export interface IContainerFollowItem extends StyledProps<HTMLAttributes<any>> {
    itemInFocus?: boolean
}
