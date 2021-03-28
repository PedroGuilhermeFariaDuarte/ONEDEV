import { createContext, useContext, useState, PropsWithChildren } from "react"

// Types
import { IContextNavigation } from "./type"

// @ts-ignore
const ContextNavigation = createContext<IContextNavigation>()

ContextNavigation.displayName = "Context Navigation"

export default ({ children }: PropsWithChildren<any>) => {
    const [ itemFocus, setItemFocus ] = useState<boolean>(true)
    const [ itemID, setItemID ] = useState<string>('Chat')

    return (
        <ContextNavigation.Provider
            value={{
                itemFocus,
                setItemFocus,
                itemID,
                setItemID
            }}
        >
            {children}
        </ContextNavigation.Provider >
    )
}

export function useGetNavigationContext() {
    return useContext(ContextNavigation)
}
