/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

// Types
import { IBoxChatGlass } from "../types"

// Coponents
import Container from "../components/Container"

// Styles
import {
    Section, BoxContainer, BoxHeader,
    BoxContent
} from "./styles"

const BoxChatGlass: React.FC<IBoxChatGlass> = ({
    boxChatTitle,
    boxChatContent,
    boxChatOnMe,
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
            <BoxContainer
                boxChatOnMe={boxChatOnMe}
            >
                <BoxContent>
                    <span>{boxChatContent}</span>
                </BoxContent>
            </BoxContainer>
        </Section>
        <Section>
        </Section>
    </Container>
)

export default BoxChatGlass
