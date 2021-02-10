/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

// Types
import { IBoxMessageGlass } from "../types"

// Coponents
import Container from "../components/Container"

// Styles
import {
    Section, Button, BoxContainer, BoxHeader,
    BoxContent
} from "./styles"

const BoxMessageGlass: React.FC<IBoxMessageGlass> = ({
    boxMessageTitle,
    boxMessageContent,
    boxMessageCallBack,
    boxMessageButtonText,
    boxMessageButtonColor,
    boxMessageButtonTextColor,
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
            <BoxContainer>
                <BoxHeader>
                    <span>{boxMessageTitle}</span>
                </BoxHeader>
                <BoxContent>
                    <span>{boxMessageContent}</span>
                </BoxContent>
            </BoxContainer>
        </Section>
        <Section>
            <Button
                boxMessageButtonColor={boxMessageButtonColor}
                boxMessageButtonTextColor={boxMessageButtonTextColor}
                onClick={() => boxMessageCallBack && boxMessageCallBack()}
            >
                {boxMessageButtonText || 'button'}
            </Button>
        </Section>
    </Container>
)

export default BoxMessageGlass
