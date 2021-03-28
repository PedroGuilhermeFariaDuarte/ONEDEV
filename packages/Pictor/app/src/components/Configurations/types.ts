import { HTMLAttributes } from "react"
import { StyledProps } from "styled-components"

// Styled Types
export interface IContainerFollowItem extends StyledProps<HTMLAttributes<any>> {
    itemInFocus?: boolean
}

export interface IContainerImageChatting extends StyledProps<HTMLAttributes<any>> {
    backgroundImage?: string
    backgroundColor?: string
}


export interface IUserData {
    username: string
    name: string
    description: string
    location?: Array<number | Number>
}
