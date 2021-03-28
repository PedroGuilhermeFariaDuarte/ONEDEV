import React, { useState } from "react"
import { MdSearch } from "react-icons/md"

// Types
import { } from './types'

// Components
import {
    CardGeneral,
    CardGeneralContentContainer,
    CardGeneralDescription, CardGeneralHeader,
    CardGeneralImageContainer
} from "../../components/CardGeneral"
import Input from "../../components/Input"

// Styles
import {
    ContainerAbout,
    ContentAbout,
    AboutHeader,
    ContainerFollowsNavigation,
    ContainerFollowsItems,
    ContainerSearchFollows,
    ContainerMyFollows
} from "./styles"

const Follows: React.FC = () => {
    const [ itemID, setItemID ] = useState<string>("All")
    const [ itemFocus ] = useState<boolean>(true)
    const navItems = [
        {
            itemID: 'All',
            icon: '',
            name: 'All Follows'
        },
        {
            itemID: 'New',
            icon: '',
            name: 'New Follows'
        },
        {
            itemID: 'Request',
            icon: '',
            name: 'Follows Request'
        },
    ]

    function handlerSetItem(navItemID: string) {
        if (itemID !== navItemID) setItemID(navItemID)
    }

    return <>
        <ContainerAbout>
            <AboutHeader>
                <span
                    id="about_header"
                >
                    Follows
                        </span>
                <ContainerFollowsNavigation>
                    {
                        itemFocus === true && navItems.map((itemNav, index) => {
                            return itemID === itemNav?.itemID?.trim()
                                ?
                                (
                                    <ContainerFollowsItems
                                        key={index}
                                        onClick={() => handlerSetItem(itemNav.itemID)}
                                        itemInFocus={true}
                                    >
                                        <span
                                            className="item-follows-navigation item-follows-focus"
                                        >
                                            {itemNav.name}
                                        </span>
                                    </ContainerFollowsItems>
                                )
                                :
                                (
                                    <ContainerFollowsItems
                                        key={index}
                                        onClick={() => handlerSetItem(itemNav.itemID)}
                                    >
                                        <span
                                            className="item-follows-navigation item-follows-focus"
                                        >
                                            {itemNav.name}
                                        </span>
                                    </ContainerFollowsItems>
                                )
                        }
                        )
                    }
                    <ContainerSearchFollows
                        onSubmit={() => { }}
                    >
                        <MdSearch />
                        <Input name="search_follows" placeholder="search a follow" />
                    </ContainerSearchFollows>
                </ContainerFollowsNavigation>
            </AboutHeader>
            {
                itemID === "All" && (
                    <ContentAbout>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Pedro Guilherme</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            15 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Djordje Petrovic</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            5 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Ava Motive</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            3 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/4619829/pexels-photo-4619829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Jameson Mallari Atent...</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            40 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Daria Shevtsova</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            32 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                    </ContentAbout>
                )
            }
            {
                itemID === "New" && (
                    <ContentAbout>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Pedro Guilherme</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            15 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Djordje Petrovic</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            5 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Ava Motive</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            3 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/4619829/pexels-photo-4619829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Jameson Mallari Atent...</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            40 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Daria Shevtsova</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            32 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                    </ContentAbout>
                )
            }
            {
                itemID === "Request" && (
                    <ContentAbout>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Pedro Guilherme</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            15 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Djordje Petrovic</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            5 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Ava Motive</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            3 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/4619829/pexels-photo-4619829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Jameson Mallari Atent...</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            40 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                        <ContainerMyFollows>
                            <CardGeneral
                                className="my-follows-card"
                            >
                                <CardGeneralImageContainer
                                    backgroundURL="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Daria Shevtsova</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            32 mutual follows
                            </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContainerMyFollows>
                    </ContentAbout>
                )
            }
        </ContainerAbout>

    </>
}

export default Follows
