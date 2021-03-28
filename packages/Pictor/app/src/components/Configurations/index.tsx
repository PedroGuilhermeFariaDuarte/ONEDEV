import React, { useState, useRef, useEffect, memo } from "react"
import { MdAccountBox, MdEmail } from "react-icons/md"

// Services
import axios from "../../services/request"

// Assets
import chattingImage from "../../assets/config/chatting.json"

// Utils
import { handlerSetNavigationID } from "../../utils/Navigation"
import { handlerValidationUserData } from "../../utils/Validation/User"
import { SchemaUserUpdate } from "../../utils/Schema/User"

// Types
import { IUserData } from './types'

// Components
import { Username } from "../../components/Fields/Username"
import { Description } from "../../components/Fields/Description"
import { Name } from "../../components/Fields/Name"

import Input from "../../components/Input"
import { Button } from "../../components/Button"
import LocationPolicy from "./subComponents/LocationPolicy"
import MapBox from "./subComponents/MapBox"

// Styles
import {
    ContainerAbout,
    ContainerBox,
    AboutHeader,
    ContainerFollowsNavigation,
    ContainerFollowsItems,
    ContentBox,
    ContainerForm,
    ContentPersonalGeneral,
    BoxHeader,
    ContainerChattingCover,
    ContainerOptionsSection,
    ContainerGeneralChatting,
    ContainerLocationMap,
    ContainerInputMyLocation
} from "./styles"

const Configurations: React.FC = () => {
    const [ itemID, setItemID ] = useState<string>("Personal")
    const navItems = [
        {
            itemID: 'Personal',
            icon: '',
            name: 'Personal Data'
        },
        {
            itemID: 'Privacy',
            icon: '',
            name: 'My Privacy'
        },
        {
            itemID: 'Chattings',
            icon: '',
            name: 'Chattings'
        },
    ]
    const [ user, setUser ] = useState<any>(JSON.parse(localStorage?.getItem("@PICTOR:USER_DATA") || ""))
    const refForm = useRef(null)

    useEffect(() => {
        localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify(user))
    }, [ user ])

    useEffect(() => {
        document.querySelector("#label-min-distance")?.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(document.querySelector("#min-distance"))
            // @ts-ignore
            document.querySelector("#min-distance")?.focus()
        })

        document.querySelector("#min-distance")?.addEventListener('focus', (event) => {
            event.preventDefault();
            console.log(event)
        })

        return () => {
            document.querySelector("#min-distance")?.removeEventListener('click', (event) => {
                event.preventDefault();
                console.log(event)
            })
        }
    }, [])

    function handlerSetConfigChatting(config: string, type: string = "images") {
        switch (type) {
            case 'images':
                if (!user?.chatting) {
                    const oldDataUser = {
                        ...user,
                        chatting: {
                            imageURL: config
                        }
                    }
                    localStorage?.setItem("@PICTOR:USER_DATA", JSON.stringify(oldDataUser))
                } else {
                    user.chatting.imageURL = config
                    localStorage?.setItem("@PICTOR:USER_DATA", JSON.stringify(user))
                }
                break;
            case 'colors':
                if (!user?.chatting) {
                    const newDataUser = {
                        ...user,
                        chatting: {
                            colors: config
                        }
                    }
                    setUser(newDataUser)
                    localStorage?.setItem("@PICTOR:USER_DATA", JSON.stringify(newDataUser))
                } else {
                    user.chatting.colors = config
                    localStorage?.setItem("@PICTOR:USER_DATA", JSON.stringify(user))
                }
                break;
            default:
                localStorage?.setItem("@PICTOR:USER_DATA", JSON.stringify(user))
        }
    }

    async function handlerSubmitForm(data: IUserData) {
        try {
            const response = await axios.put(`user/update/${user?.id}`, data)

            // @ts-ignore
            if (response?.data?.code !== 200) {
                // @ts-ignore
                console.log(response?.message)
                return;
            }

            setUser((old: any) => {
                return {
                    ...old,
                    ...data
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    function handlerSetDistance(distance: string, type: number = 0, showID: string, event: any) {
        event?.preventDefault()
        const distanceToKM = (Math.round(Number(parseInt(distance))) / 1000).toFixed(1) + " km";
        const targetShow = document.querySelector(`#${showID}`)

        if (
            distance.trim() === '' || !Number(distance.trim())
        ) {
            alert(`Selecione uma distancia ${type === 0 ? 'minina' : 'maxima'} correta!`)
            return;
        }

        if (type === 0) {
            setUser({
                ...user,
                minDistance: distance
            })
            // @ts-ignore
            targetShow.innerHTML = distanceToKM
        } else if (type === 1) {
            setUser({
                ...user,
                maxDistance: distance
            })
            // @ts-ignore
            targetShow.innerHTML = distanceToKM
        } else {
            return;
        }

    }

    return <>
        <ContainerAbout>
            <AboutHeader>
                <span
                    id="about_header"
                >
                    Configurations
                        </span>
                <ContainerFollowsNavigation>
                    {
                        navItems.length > 0 && navItems.map((itemNav, index) => {
                            return itemID === itemNav?.itemID?.trim()
                                ?
                                (
                                    <ContainerFollowsItems
                                        key={index}
                                        onClick={() => handlerSetNavigationID(itemNav.itemID, setItemID, itemID)}
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
                                        onClick={() => handlerSetNavigationID(itemNav.itemID, setItemID, itemID)}
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
                </ContainerFollowsNavigation>
            </AboutHeader>
            {
                itemID === "Personal" && (
                    <ContainerBox>
                        <ContentBox>
                            <span
                                className="title-config"
                            >
                                Gerencie informações sobre você, e sua conta forma geral
                            </span>
                            <ContainerForm
                                onSubmit={handlerSubmitForm}
                                initialData={user}
                                ref={refForm}
                            >
                                <Name
                                    className="input-personal"
                                >
                                    <MdEmail />
                                    <Input name="name" placeholder="your personal name" />
                                </Name>

                                <Username
                                    className="input-personal"
                                >
                                    <MdEmail />
                                    <Input name="username" placeholder="your username" />
                                </Username>

                                <Description
                                    className="input-personal"
                                >
                                    <MdEmail />
                                    <Input name="description" placeholder="a description about yourself" />
                                </Description>
                                <Button
                                    onClick={() =>
                                        //@ts-ignore
                                        handlerValidationUserData(SchemaUserUpdate, refForm?.current?.getData(), refForm)
                                    }
                                >
                                    <button
                                        type="button"
                                    >
                                        save
                                    </button>
                                </Button>
                            </ContainerForm>
                        </ContentBox>
                    </ContainerBox>
                )
            }
            {
                itemID === "Privacy" && (
                    <ContainerBox>
                        <ContentBox>
                            <span
                                className="title-config"
                            >
                                Gerencie o acesso a sua localização precisa
                            </span>
                            <ContentPersonalGeneral>
                                <LocationPolicy user={user} />
                            </ContentPersonalGeneral>
                        </ContentBox>
                    </ContainerBox>
                )
            }
            {
                itemID === "Chattings" && <>
                    <ContainerBox>
                        <ContentBox>
                            <BoxHeader>
                                <span
                                    className="title-config"
                                >
                                    Custumize a aparência da sua conversa
                                </span>
                                <ContainerChattingCover>
                                    <span
                                        className="describe-section"
                                    >
                                        Background Image
                                    </span>
                                    <ContainerOptionsSection>
                                        {
                                            chattingImage
                                                ?.backgroundChatting
                                                ?.length > 0 && chattingImage
                                                    ?.backgroundChatting.map((item, index) => (
                                                        <ContainerGeneralChatting
                                                            backgroundImage={item?.imageURL}
                                                            title={item?.title}
                                                            key={index}
                                                            onClick={() => handlerSetConfigChatting(item?.imageURL)}
                                                        />
                                                    ))
                                        }
                                    </ContainerOptionsSection>
                                    <span
                                        className="describe-section"
                                    >
                                        Background Colors
                                    </span>
                                    <ContainerOptionsSection>
                                        {
                                            chattingImage
                                                ?.colorsChatting
                                                ?.length > 0 && chattingImage
                                                    ?.colorsChatting.map((item, index) => (
                                                        <ContainerGeneralChatting
                                                            backgroundColor={item?.color}
                                                            title={item?.title}
                                                            key={index}
                                                            onClick={() => handlerSetConfigChatting(item?.color, 'colors')}
                                                        />
                                                    ))
                                        }
                                    </ContainerOptionsSection>
                                </ContainerChattingCover>
                            </BoxHeader>
                        </ContentBox>
                        <ContentBox
                            className="content-map-box"
                        >
                            <BoxHeader>
                                <span
                                    className="title-config"
                                >
                                    Selecione um ponto inicial, no mapa selecione uma área para achar novos usuários
                                </span>
                            </BoxHeader>
                            <MapBox
                                dataUser={user}
                            />
                        </ContentBox>
                        <ContentBox>
                            <BoxHeader>
                                <span
                                    className="title-config"
                                >
                                    Defina a distancia minima e maxima de busca (em metros)
                                </span>
                                <ContainerInputMyLocation>
                                    <div className="mylocationTitle">
                                        <span>
                                            distancia minima <span id="min-distance-value">0</span>
                                        </span>
                                    </div>
                                    <div className="labelinput">
                                        <select
                                            className="distance-select"
                                            onChange={(event) => handlerSetDistance(event.target.value, 0, "min-distance-value", event)}
                                        >
                                            <option value="" selected>Selecione uma distancia</option>
                                            <option value="100">100 (cem)</option>
                                            <option value="200">200 (duzentos)</option>
                                            <option value="300">300 (trezentos)</option>
                                            <option value="400">400 (quatrocentos)</option>
                                            <option value="500">500 (quinhentos)</option>
                                            <option value="1000">1000 (mil)</option>
                                            <option value="2000">2000 (dois mil)</option>
                                            <option value="3000">3000 (três mil)</option>
                                            <option value="4000">4000 (quatro mil)</option>
                                            <option value="5000">5000 (cinco mil)</option>
                                        </select>
                                    </div>
                                </ContainerInputMyLocation>

                                <ContainerInputMyLocation>
                                    <div className="mylocationTitle">
                                        <span>
                                            distancia maxima <span id="max-distance-value"></span>
                                        </span>
                                    </div>
                                    <div className="labelinput">
                                        <select
                                            className="distance-select"
                                            onChange={(event) => handlerSetDistance(event.target.value, 1, "max-distance-value", event)}
                                        >
                                            <option value="" selected>Selecione uma distancia</option>
                                            <option value="100">100 (cem)</option>
                                            <option value="200">200 (duzentos)</option>
                                            <option value="300">300 (trezentos)</option>
                                            <option value="400">400 (quatrocentos)</option>
                                            <option value="500">500 (quinhentos)</option>
                                            <option value="1000" >1000 (mil)</option>
                                            <option value="2000">2000 (dois mil)</option>
                                            <option value="3000">3000 (três mil)</option>
                                            <option value="4000">4000 (quatro mil)</option>
                                            <option value="5000">5000 (cinco mil)</option>
                                        </select>
                                    </div>
                                </ContainerInputMyLocation>
                            </BoxHeader>
                        </ContentBox>
                    </ContainerBox>
                </>
            }
        </ContainerAbout>

    </>
}

export default memo(Configurations)
