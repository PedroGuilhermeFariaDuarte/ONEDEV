import React, { useState, useEffect, memo, useMemo } from "react"
import { Socket } from "socket.io-client"

// Services
import Axios from "../../../services/request"

// Components
import Contact from "../../Contact"

// Icons
import { MdKeyboardArrowLeft, MdSearch, MdPlaylistAdd } from "react-icons/md"

// Types
import { IMyMessage, IChatLocations, IChatting, IChattingEvent } from "./types"

// Styles
import {
    Container,
    ContainerHeader,
    ContainerSearch,
    ContainerInformation,
    ContainerContact, ContainerChatLocations, Chatlocation
} from "./styles"

// Context
import { useGetChatContext } from "../../../context/Chat"

// Rules - Context
import { handlerReceiveInvite, handlerSendInvite } from "../../../utils/Rules"


const MyMessage: React.FC<IMyMessage> = ({ socket,
    children }) => {
    const dataUser = JSON.parse(localStorage?.getItem("@PICTOR:USER_DATA") || "")
    const [ chatLocations, setChatLocations ] = useState<boolean>(false)
    const [ listChatLocations, setListChatLocations ] = useState<Array<IChatLocations>>()
    const [ chats, setChats ] = useState<Array<IChatting> | Array<any>>([])
    const { chat: chattting, setChat: setChattingContext, setChatIDFocus } = useGetChatContext()

    const actualThis: any = this;

    useEffect(() => {
        function handlerGetReceiveInviteChatting() {
            console.log("handlerGetReceiveInviteChatting")
            socket.on("chatInvite", (data: any) => {
                console.log("Receive chatting invite", data)
                handlerSetChatting(data, true)
                handlerSetListChatReceive(data, true)
            })
        }

        handlerGetReceiveInviteChatting()

        return () => socket.off("chatInvite")
    }, [ socket ])

    useEffect(() => {
        async function handlerLoadAllChats() {
            if (chatLocations) {
                document.querySelector("#chat_locations")?.classList.add("show_chat_locations")
                const dataUser = JSON.parse(localStorage.getItem("@PICTOR:USER_DATA") || '')
                const response = await Axios.get(`user/locations/${dataUser?.location?.coordinates[ 0 ]}/${dataUser?.location?.coordinates[ 1 ]}/${dataUser?.minDistance}/${dataUser?.maxDistance}/${dataUser?.id}`)

                if (response.data?.code !== 200) {
                    console.log(response.data?.message)
                    return;
                }
                setListChatLocations(response.data?.data)
            } else {
                document.querySelector("#chat_locations")?.classList.remove("show_chat_locations")
            }
        }
        handlerLoadAllChats()
    }, [ chatLocations ])

    function handlerShowChatLocations() {
        setChatLocations(!chatLocations)
    }

    function handlerSetInvite(socket: typeof Socket, target: IChattingEvent, targetElementID: string) {
        console.log("Send invite of Chatting", target)
        Promise.all([
            socket.emit("receiveInvite", target),
            handlerSetElementChat(targetElementID),
            handlerSetListChatSend(target, false),
            handlerSetChatting(target, false),
        ])
            .then(resolve => { })
            .catch(error => { })
    }

    function handlerSetElementChat(elementID: string) {
        document.querySelector(`#${elementID}`)?.classList.add("choose_chat")
    }

    function handlerSetChatting(data: IChattingEvent, receiveInvite: boolean = false) {
        setChattingContext((Olds: Array<IChatting>) => {
            // Receive invite
            if (receiveInvite) {
                const receiveInvite = handlerReceiveInvite(Olds, data, dataUser)
                //@ts-ignore
                if (receiveInvite?.newChat === true) {
                    // @ts-ignore
                    return [ ...Olds, receiveInvite?.newChatting ]
                } else {
                    // @ts-ignore
                    const oldsIndex = Olds.findIndex((item => item.username === receiveInvite?.item?.existChatting?.username))

                    // @ts-ignore
                    Olds[ oldsIndex ] = receiveInvite?.item?.existChatting
                    return [ ...Olds ]
                }
            } else {
                const sendInvite = handlerSendInvite(Olds, data, dataUser)

                //@ts-ignore
                if (sendInvite?.newChat === true) {
                    // @ts-ignore
                    return [ ...Olds, sendInvite?.newChatting ]
                } else {
                    // @ts-ignore
                    const oldsIndex = Olds.findIndex((item => item.username === sendInvite?.item?.existChatting?.username))

                    // @ts-ignore
                    Olds[ oldsIndex ] = sendInvite?.item?.existChatting

                    return [ ...Olds ]
                }
            }
        })
    }

    function handlerSetListChatSend(data: IChattingEvent, receiveInvite: boolean = false) {
        console.log("Set List Chat's Send", data)

        // @ts-ignore
        setChats((OldChats: IChattingEvent | any) => {
            const existChats = chats.find((item: IChattingEvent) =>
                item.target.idTarget.trim() === data.target.idTarget.trim()
                ||
                item.from.idFrom.trim() === data.target.idTarget.trim()
            )

            if (!existChats) return [ ...OldChats, data ]

            return [ ...OldChats ]
        })
    }

    function handlerSetListChatReceive(data: IChattingEvent, receiveInvite: boolean = false) {
        console.log("Set List Chat's Receive", data, data.from.idFrom.toString().trim())
        console.log(chats)

        setChats((OldChats: IChattingEvent | any) => {
            const existChats = OldChats.find((item: IChattingEvent) =>
                item.target.idTarget.toString().trim() === data.from.idFrom.toString().trim()
                ||
                item.from.idFrom.toString().trim() === data.from.idFrom.toString().trim()
            )

            if (!existChats) return [ ...OldChats, data ]

            return [ ...OldChats ]
        })
    }

    return (
        <Container>
            {
                chatLocations && (
                    <ContainerChatLocations>
                        <ContainerHeader>
                            <div
                                id="wrapper_header_icon"
                                onClick={() => handlerShowChatLocations()}
                            >
                                <MdKeyboardArrowLeft />
                            </div>
                            <span id="wrapper_header_title">
                                New Chat's
                            </span>
                        </ContainerHeader>
                        <ContainerContact
                            className="container-contact-location"
                        >
                            {
                                // @ts-ignore
                                listChatLocations?.length > 0 && listChatLocations?.map((item: IChatLocations, index: number) => {
                                    return (
                                        <Chatlocation
                                            key={index}

                                            //@ts-ignore

                                            id={`chat${item?.id}`}
                                            onClick={() => handlerSetInvite(socket, {
                                                target: {
                                                    idTarget: item?.id,
                                                    fullName: item?.name,
                                                    username: item?.username,
                                                    description: item?.description,
                                                    distance: (Math.round(Number(item?.distanceField?.calculated)) / 1000).toFixed(1) + " km",
                                                    dataInvite: new Date().toDateString(),
                                                },
                                                from: {
                                                    idFrom: dataUser?.id,
                                                    fullName: dataUser?.name,
                                                    username: dataUser?.username,
                                                    description: dataUser?.description,
                                                    distance: (Math.round(Number(item?.distanceField?.calculated)) / 1000).toFixed(1) + " km",
                                                    dataInvite: new Date().toDateString(),
                                                    message: `Hello, ${item?.name}! ${dataUser?.name} send a invite of chatting to you :D`
                                                },
                                            }, `chat${item?.id}`)}
                                        >
                                            <span className='name_chat'>
                                                {
                                                    //@ts-ignore
                                                    item?.username
                                                }
                                            </span>
                                            <span className="location_chat">
                                                {
                                                    //@ts-ignore
                                                    (Math.round(Number(item?.distanceField?.calculated)) / 1000).toFixed(1)
                                                }
                                                {' '}
                                                km
                                            </span>
                                        </Chatlocation>)
                                })
                            }

                        </ContainerContact>
                    </ContainerChatLocations>
                )
            }

            <ContainerHeader>
                <div id="wrapper_header_icon">
                    <MdKeyboardArrowLeft />
                </div>
                <span id="wrapper_header_title">
                    {children}
                </span>
            </ContainerHeader>
            <ContainerSearch>
                <input
                    type="search"
                    name="chat_search"
                    maxLength={37}
                    placeholder="search a contact" />
                <MdSearch />
            </ContainerSearch>
            <ContainerInformation>
                <span id="container_information_title">
                    Last messages
            </span>
                <button
                    type='button'
                    id="call_others_user"
                    onClick={() => handlerShowChatLocations()}
                >
                    <MdPlaylistAdd />
                </button>
            </ContainerInformation>
            <ContainerContact>
                {
                    // @ts-ignore
                    chats?.length > 0 && chats?.map((item: any, index: number) => {
                        return (
                            <div
                                onClick={() => setChatIDFocus((item?.from?.username === dataUser.username ? item?.target?.username : item?.from?.username) || 'no name')}
                                key={index}
                                style={{ width: "100%" }}
                            >
                                <Contact
                                    contactName={(dataUser.id === item?.target?.idTarget ? item?.from?.fullName : item?.target?.fullName) || 'no name'}
                                    contactDateMessage={item?.from?.dataInvite || 'no date'}
                                    contactImage="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=PastelBlue&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Twinkle&skinColor=Black"
                                    contactIsOnline={false}
                                    contactLastMessage={item?.from?.message || 'no message'}
                                    contactReadMessage={false}
                                />
                            </div>
                        )
                    })
                }


            </ContainerContact>
        </Container>
    )
}

export default memo(MyMessage)
