import { createContext, useContext, useState, PropsWithChildren } from "react"

// Types
import { IContextNavigation } from "./type"

// @ts-ignore
const ContextNavigationProfile = createContext<IContextNavigation>()

ContextNavigationProfile.displayName = "Context Navigation Profile"

export default ({ children }: PropsWithChildren<any>) => {
    const [ itemFocus, setItemFocus ] = useState<boolean>(true)
    const [ itemID, setItemID ] = useState<string>('About')

    return (
        <ContextNavigationProfile.Provider
            value={{
                itemFocus,
                setItemFocus,
                itemID,
                setItemID
            }}
        >
            {children}
        </ContextNavigationProfile.Provider >
    )
}

export function useGetNavigationProfileContext() {
    return useContext(ContextNavigationProfile)
}
