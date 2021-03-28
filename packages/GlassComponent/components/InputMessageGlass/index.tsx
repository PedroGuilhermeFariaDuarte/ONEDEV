import React, { useState, useCallback, memo, ChangeEvent } from "react"
import { IoIosAdd } from "react-icons/io"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { AiOutlineSend } from "react-icons/ai"

// Global Components
import { InputMessageContainer } from "../Container"


// Styles
import { TextArea, Button } from "./styles"

import { IInputMessageGlass } from "../../types"

const InputMessageGlass: React.FC<IInputMessageGlass> = ({
    cardWidth,
    cardHeight,
    cardRadius,
    cardBackground,
    cardGlass, cardColorBorder,
    cardPaddingAll,
    cardPaddingLeft,
    cardPaddingRight,
    cardPaddingTop,
    cardPaddingBottom,

    inputMessageButtomFile,
    inputMessageButtonColorBackground,
    inputMessageButtonColor,
    inputMessagePlaceholder,
    inputMessageSend,
    inputMessageFile,
    inputMessageEmoji,
    inputMessageMaxChar,
    inputMessagePlaceholderColor,
    inputMessageTextContentColor,
    children, ...rest
}) => {
    //@ts-ignore
    const [ timeOut, setTimeOut ] = useState<NodeJS.Timeout>()

    const handlerDebounceFunction = useCallback((fn: Function, time: number, event: ChangeEvent) => {

        return () => {
            //@ts-ignore
            const textareValue = event.target.value;

            if (textareValue.length >= 50) {
                //@ts-ignore
                clearTimeout(timeOut)
                setTimeOut(setTimeout(() => {
                    fn(event.target, true)
                }, time))
            } else {
                fn(event.target, false)
            }
        }
    }, [ timeOut ])

    function handlerSetTextArea(currentTarget: any, expand: boolean) {
        if (expand) {
            currentTarget.classList.add('expand_textarea')
        } else {
            currentTarget.classList.remove('expand_textarea')
        }
    }

    function handlerSendMessage(fn: Function) {
        //@ts-ignore
        const currentValue = document.querySelector("#glass-componentss-input-message")?.value.trim()
        try {
            if (currentValue !== "")
                fn(currentValue)
        } catch (error) {
            console.log(`Glasscomponents HandlerError! \n You callback has a problem: ${error.message} \n Location: handlerSendMessage function`)
        }
    }

    function handlerGetFile(event: ChangeEvent, fn: Function | undefined) {
        //@ts-ignore
        const currentValue = document.querySelector("#glasscomponentss-input-message-file")?.files
        try {
            if (fn)
                //@ts-ignore
                fn(currentValue)
        } catch (error) {
            console.log(`Glasscomponents HandlerError! \n You callback has a problem: ${error.message} \n Location: handlerSendMessage function`)
        }
    }

    return (
        <>
            <input
                type="file"
                name="glasscomponentss-input-message-file"
                id="glasscomponentss-input-message-file"
                hidden={true}
                multiple={true}
                accept="image/png,image/jpeg,image/gif"
                onChange={(event) => handlerGetFile(event, inputMessageFile)}
            />

            <InputMessageContainer
                cardWidth={cardWidth}
                cardHeight={cardHeight}
                cardRadius={cardRadius}
                cardBackground={cardBackground}
                cardGlass={cardGlass}
                cardColorBorder={cardColorBorder}
                cardPaddingAll={cardPaddingAll}
                cardPaddingLeft={cardPaddingLeft}
                cardPaddingRight={cardPaddingRight}
                cardPaddingTop={cardPaddingTop}
                cardPaddingBottom={cardPaddingBottom}
            >
                {
                    inputMessageButtomFile && (
                        <Button
                            type='button'
                            onClick={() => {
                                //@ts-ignore
                                document.querySelector("#glasscomponentss-input-message-file").click()
                            }
                            }
                            inputMessageButtonColorBackground={inputMessageButtonColorBackground}
                            inputMessageButtonColor={inputMessageButtonColor}
                        >
                            <IoIosAdd />
                        </Button>
                    )
                }
                <TextArea
                    id="glass-componentss-input-message"
                    placeholder={inputMessagePlaceholder || 'Type a message'}
                    maxLength={inputMessageMaxChar || 500}
                    onChange={(event: ChangeEvent<any>) => handlerDebounceFunction(handlerSetTextArea, 300, event)()}
                    inputMessagePlaceholderColor={inputMessagePlaceholderColor}
                    inputMessageTextContentColor={inputMessageTextContentColor}
                />
                {
                    inputMessageEmoji && (
                        <HiOutlineEmojiHappy
                            color="#F3F2F1"
                            size={18}
                        />
                    )
                }
                <AiOutlineSend
                    color="#F3F2F1"
                    size={18}
                    onClick={() => handlerSendMessage(inputMessageSend)}
                />
            </InputMessageContainer>
        </>
    )
}

export default memo(InputMessageGlass)
