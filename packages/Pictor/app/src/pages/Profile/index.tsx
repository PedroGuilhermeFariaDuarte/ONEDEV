import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { GrAdd } from "react-icons/gr"

// Utils
import { handlerSetNavigationID } from "../../utils/Navigation"

// Services
import axios from "../../services/request"

// Component
import {
    CardGeneral,
    CardGeneralImageContainer,
    CardGeneralContentContainer,
    CardGeneralHeader,
    CardGeneralDescription
} from "../../components/CardGeneral"
import Follows from "../../components/Follows"
import Configurations from "../../components/Configurations"

// Types
import { IProfile } from "./types"

// Styles
import {
    Container, ContainerHeader,
    ContainerUserData,
    ContainerImageProfile,
    ContainerEditCover,
    ContainerUserNavigation,
    ContainerAbout, AboutHeader,
    ContentAbout
} from "./styles"

const Profile: React.FC<IProfile> = () => {
    const paramsPage = useParams()
    const history = useHistory()
    const [ itemID, setItemID ] = useState<string>("About")
    const [ itemFocus ] = useState<boolean>(true)
    const navItems = [
        {
            itemID: 'Timeline',
            icon: '',
            name: 'Timeline'
        },
        {
            itemID: 'About',
            icon: '',
            name: 'About'
        },
        {
            itemID: 'Chattings',
            icon: '',
            name: 'Chattings'
        },
        {
            itemID: 'Configuration',
            icon: '',
            name: 'Configurations'
        }
    ]
    const dataUser = JSON.parse(localStorage?.getItem("@PICTOR:USER_DATA") || "")

    return (
        <Container>
            <ContainerHeader
                headerBackground="https://i.pinimg.com/originals/3e/80/52/3e805291247c9a5c734d11e5e16c6d98.jpg"
            >
                <ContainerUserData>
                    <div id="container-image-name">
                        <ContainerImageProfile
                            imageBackground="https://images.pexels.com/photos/3807742/pexels-photo-3807742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        />
                        <span
                            className="name_user_profile"
                        >
                            {
                                dataUser?.name || 'A user of PictorApp'
                            }
                        </span>
                    </div>
                    <ContainerEditCover />
                </ContainerUserData>
                <ContainerUserNavigation>
                    {
                        itemFocus === true && navItems.map((navitem: any, index: number) => {
                            if (navitem.itemID === itemID) {
                                return (
                                    <span
                                        className="item-nav item-nav-focus"
                                        key={index}
                                        onClick={() => handlerSetNavigationID(navitem.itemID, setItemID, itemID)}
                                    >
                                        {navitem.name}
                                    </span>
                                )
                            } else {
                                return (
                                    <span
                                        className="item-nav"
                                        key={index}
                                        onClick={() => handlerSetNavigationID(navitem.itemID, setItemID, itemID)}
                                    >
                                        {navitem.name}
                                    </span>
                                )
                            }
                        })
                    }
                </ContainerUserNavigation>
            </ContainerHeader>
            {
                itemID === 'About' && <>
                    <ContainerAbout>
                        <AboutHeader>
                            <span
                                id="about_header"
                            >
                                About
                            </span>
                        </AboutHeader>
                        <ContentAbout>
                            <CardGeneral>
                                <CardGeneralImageContainer>
                                    <GrAdd />
                                </CardGeneralImageContainer>
                                <CardGeneralContentContainer>
                                    <CardGeneralHeader>
                                        <span>Add something</span>
                                    </CardGeneralHeader>
                                    <CardGeneralDescription>
                                        <span>
                                            Example: Last job, last visitation location...
                                        </span>
                                    </CardGeneralDescription>
                                </CardGeneralContentContainer>
                            </CardGeneral>
                        </ContentAbout>
                    </ContainerAbout>
                    <Follows />
                </>
            }
            {
                itemID === "Configuration" && <>
                    <Configurations />
                </>
            }
        </Container>
    )
}

export default Profile
