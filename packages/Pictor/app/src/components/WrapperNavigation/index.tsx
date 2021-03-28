import React, { memo } from "react"

// Types
import { IWrapperNavigation } from "./types"

// Context
import { useGetNavigationContext } from "../../context/Navigation"

// Components
import Chat from "../subNavigations/Chat"
import Groups from "../subNavigations/Groups"

// Styles
import { Container } from "./styles"

const WrapperNavigation: React.FC<IWrapperNavigation> = ({
    socket,
    idFrom,
    usernameFrom
}) => {
    const { itemFocus, itemID } = useGetNavigationContext()

    return (<Container>
        {
            (itemFocus === true && itemID === "Chat") && (
                <Chat
                    socket={socket}
                >
                    <span>{itemID}</span>
                </Chat>
            )
        }

        {
            (itemFocus === true && itemID === "Groups") && (
                <Groups>
                    <span>{itemID}</span>
                </Groups>
            )
        }
    </Container>)
}

export default memo(WrapperNavigation);
