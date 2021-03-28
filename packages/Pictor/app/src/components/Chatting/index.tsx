import React, { memo, useState, useMemo, useEffect } from "react"
import { InputMessageGlass } from "glasscomponentss"

// Styles
import {
    Container, Header, ContactDescription,
    ContainerMessage, ContainerInputMessage, MessageContainer
} from "./styles"

// Types
import { IChat, IDataMessage, IChatting, IActualMessage } from "./types"

// Context
import { useGetChatContext } from "../../context/Chat"

import { handlerSendInvite, handlerReceiveInvite } from "../../utils/Rules"

const Chatting: React.FC<IChat> = ({ socket }) => {
    const { chat, setChat, chatIDFocus, setChatIDFocus } = useGetChatContext()
    const [ chatting, setChatting ] = useState<IChatting | any>()
    const [ actualMessage, setActualMessage ] = useState<Array<IActualMessage>>([])
    const dataUser = JSON.parse(localStorage?.getItem("@PICTOR:USER_DATA") || "")

    useEffect(() => {
        function handlerGetReceiveMessage() {
            console.log("handlerGetReceiveMessage")
            /*
                () => {
                        const receiveMessage = handlerReceiveInvite(chatting, data, dataUser)
                        if (receiveMessage?.newChat === false) {
                            // @ts-ignore
                            setChat(...Olds => {
                                // @ts-ignore
                                const oldsIndex = Olds.findIndex((item => item.username === receiveMessage?.item?.existChatting?.username))

                                // @ts-ignore
                                Olds[ oldsIndex ] = receiveMessage?.item?.existChatting

                                return [ ...Olds ]
                            })
                        }
                    }
             */
            socket.on("chatReceive", (data: IDataMessage) => {
                Promise.all([
                    setChatIDFocus(data?.from?.username || 'no name'),
                    setActualMessage(Olds => [ ...Olds, { message: data?.from?.message, receive: true } ]),
                ]).then(resolve => { }).catch(error => console.log(error))
            })
        }

        handlerGetReceiveMessage()

        return () => {
            socket.off("chatReceive")
        }
    }, [ socket ])

    // @ts-ignore
    useMemo(() => setChatting(chat.find(item => item.username === chatIDFocus)), [ chat, chatIDFocus ])

    function handlerSetSendMessage(dataMessage: string) {
        const message = handlerSetDataMessage(dataMessage)

        Promise.all([
            setActualMessage(Olds => [ ...Olds, { message: message?.from?.message, receive: false } ]),
            //handlerSendInvite(chatting, message, dataUser),
            socket.emit("receiveMessage", message)
        ]).then((resolve: any) => {
            // const sendMessage = resolve[ 1 ]
            // if (sendMessage?.newChat === false) {
            //     // @ts-ignore
            //     setChat(...Olds => {
            //         // @ts-ignore
            //         const oldsIndex = Olds.findIndex((item => item.username === sendMessage?.item?.existChatting?.username))

            //         // @ts-ignore
            //         Olds[ oldsIndex ] = sendMessage?.item?.existChatting

            //         return [ ...Olds ]
            //     })
            // }
        }).catch(error => {
            console.log(error)
        })
    }

    function handlerSetDataMessage(message: string): IDataMessage {
        return {
            target: {
                idTarget: chatting?.idTarget,
                fullName: chatting?.fullName,
                username: chatting?.username,
                description: chatting?.description,
                distance: chatting?.distance,
                dataInvite: new Date().toDateString(),
            },
            from: {
                idFrom: dataUser?.id,
                fullName: dataUser?.fullName,
                username: dataUser?.username,
                description: dataUser?.description,
                distance: dataUser?.distance,
                dataInvite: new Date().toDateString(),
                message: message,
            }
        }
    }

    return (
        <Container
            backgroundImage={dataUser?.chatting?.imageURL}
        >
            <Header>
                <ContactDescription>
                    <div id="contact_description_image_contact">
                        <div id="image_contact_chat"></div>
                    </div>
                    <div id="contact_description_contact">
                        <span id="contact_description_name_contact">
                            {
                                chatting?.fullName || 'no chatting'
                            }
                        </span>
                        <span id="contact_description_status_contact">
                            {chatting?.idTarget ? 'online' : 'no chatting'}
                        </span>
                    </div>
                </ContactDescription>
            </Header>
            <ContainerMessage>
                {
                    actualMessage.length > 0 && actualMessage.map((receiveMessage: IActualMessage, index: number) => {
                        return (
                            <MessageContainer
                                className={receiveMessage.receive ? "otherchat" : ""}
                                key={index}
                                backgroundColor={dataUser?.chatting?.colors}
                            >
                                <span>
                                    {
                                        receiveMessage.message
                                    }
                                </span>
                            </MessageContainer>
                        )
                    })
                }
            </ContainerMessage>
            <ContainerInputMessage>
                <InputMessageGlass
                    cardWidth={500}
                    cardHeight={46}
                    cardRadius={25}
                    cardBackground="#B2B9C590"
                    cardGlass={10}
                    cardColorBorder=""
                    cardPaddingAll={3}
                    cardPaddingLeft={0}
                    cardPaddingRight={0}
                    cardPaddingTop={0}
                    cardPaddingBottom={0}

                    inputMessageButtomFile={true}
                    inputMessageButtonColorBackground="#9ae2cd"
                    inputMessageButtonColor="#16a77e"
                    inputMessagePlaceholderColor="#B2B9C5"
                    inputMessageTextContentColor="#201F1E"
                    inputMessagePlaceholder="Write your message"
                    inputMessageSend={(data) => handlerSetSendMessage(data)}
                    inputMessageEmoji={true}
                    inputMessageMaxChar={750}

                />
            </ContainerInputMessage>
        </Container>
    )
}

export default memo(Chatting)
