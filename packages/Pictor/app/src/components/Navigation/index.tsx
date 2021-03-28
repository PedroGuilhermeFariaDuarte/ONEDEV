import React, { memo } from "react"
import { useHistory } from "react-router-dom"

// Icons
import { MdMessage, MdGroup, MdFace } from "react-icons/md"

// Styles
import {
    Container, ContainerItem,
    ItemContainer
} from "./styles"

// Types
import { INavigation } from "./types"

// Context
import { useGetNavigationContext } from "../../context/Navigation"

const Navigation: React.FC<INavigation> = () => {
    const { itemFocus, itemID, setItemID } = useGetNavigationContext()
    const history = useHistory()
    const listItems = [
        {
            icon: <MdMessage />,
            name: "Chat"
        },
        {
            icon: <MdGroup />,
            name: "Groups"
        }
    ]

    function handlerSetItemID(nameItem: string) {
        setItemID(nameItem)
    }

    function handlerSetPage(pageName: string) {
        history.push(pageName)
    }

    return (<Container>
        {
            itemFocus === true && listItems.length >= 0 && listItems.map((item, index) => {
                return itemID === item?.name
                    ?
                    (
                        <ContainerItem
                            onClick={() => handlerSetItemID(item?.name)}
                            containerItemSelected={true}
                            key={index}
                        >
                            <ItemContainer
                                itemBackgroundColor="var(--icon-container-selected)"
                                itemSvgColor="var(--icon-status-selected)"
                            >
                                {item?.icon}
                            </ItemContainer>
                        </ContainerItem>
                    )
                    :
                    (
                        <ContainerItem
                            onClick={() => handlerSetItemID(item?.name)}
                            key={index}
                        >
                            <ItemContainer>
                                {item?.icon}
                            </ItemContainer>
                        </ContainerItem>
                    )
            })
        }
        <ContainerItem
            onClick={() => handlerSetPage('profile')}
            className="icon_profile"
        >
            <ItemContainer
                itemBackgroundColor="var(--icon-container-selected)"
                itemSvgColor="var(--icon-status-selected)"
            >
                <MdFace />
            </ItemContainer>
        </ContainerItem>
    </Container>)
}

export default memo(Navigation);
