import React, { useCallback, memo } from "react"
import socketClient, { Socket } from "socket.io-client"

// Pages
import Wrapper from "../../pages/Wrapper"

// Components
import Navigation from '../Navigation'
import WrapperNavigation from '../WrapperNavigation'
import Chatting from "../Chatting"

// Context
import NavigationContextProvider from "../../context/Navigation"
import ChatContextProvider from "../../context/Chat"

const WrapperRouter: React.FC = () => {
    let socket: typeof Socket | any
    const dataUser = JSON.parse(localStorage?.getItem("@PICTOR:USER_DATA") || "")

    socket = useCallback(() => {
        return dataUser?.id && socketClient("http://localhost:7070", {
            reconnection: false,
            query: {
                userId: dataUser?.id
            }
        })
    }, [])()

    return (<Wrapper>
        <NavigationContextProvider>
            <Navigation />
            <ChatContextProvider>
                <WrapperNavigation
                    socket={socket}
                />
                <Chatting socket={socket} />
            </ChatContextProvider>
        </NavigationContextProvider>
    </Wrapper>)
}

export default memo(WrapperRouter)
