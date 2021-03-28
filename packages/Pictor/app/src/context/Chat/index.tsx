import { createContext, useContext, useState, PropsWithChildren } from "react"

// Types
import { IContextChat, IChatting } from "./type"

// @ts-ignore
const ContextChat = createContext<IContextChat>()

ContextChat.displayName = "Context Chat"

export default ({ children }: PropsWithChildren<any>) => {
    const [ chat, setChat ] = useState<Array<IChatting>>([])
    const [ chatIDFocus, setChatIDFocus ] = useState<string>("")

    return (
        <ContextChat.Provider
            value={{
                chat,
                setChat,
                setChatIDFocus,
                chatIDFocus
            }}
        >
            {children}
        </ContextChat.Provider >
    )
}

export function useGetChatContext() {
    return useContext(ContextChat)
}
