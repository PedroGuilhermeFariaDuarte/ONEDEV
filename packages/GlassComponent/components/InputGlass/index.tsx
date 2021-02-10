/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

// Types
import { IInputGlass } from "../../types"

// Coponents
import Container from "../Container"

// Styles
import { Section, Input, Button } from "./styles"

const InputGlass: React.FC<IInputGlass> = ({
    inputPlaceholder,
    inputPlaceholderColor,
    buttonName,
    buttonColor,
    buttonCallBack,
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
    children, ...rest }) => (

    <Container
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        cardRadius={cardRadius}
        cardGlass={cardGlass}
        cardBackground={cardBackground}
        cardColorBorder={cardColorBorder}
        cardPaddingAll={cardPaddingAll}
        cardPaddingLeft={cardPaddingLeft}
        cardPaddingRight={cardPaddingRight}
        cardPaddingTop={cardPaddingTop}
        cardPaddingBottom={cardPaddingBottom}
    >
        <Section>
            <Input
                placeholder={inputPlaceholder || 'your text here'}
                inputPlaceholderColor={inputPlaceholderColor || '#000'}
                {...rest} />
        </Section>
        <Section>
            <Button
                buttonColor={buttonColor}
                onClick={() => buttonCallBack()}
            >
                {buttonName || 'done'}
            </Button>
        </Section>
    </Container>
)

export default InputGlass
