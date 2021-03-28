import { PropsWithChildren, InputHTMLAttributes } from "react"

export interface IInput extends PropsWithChildren<InputHTMLAttributes<any>> {
    name: string
}
