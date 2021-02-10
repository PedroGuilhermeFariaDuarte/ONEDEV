/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

// Types
import { ICreditCard } from "../../types"

// Coponents
import Container from "../Container"

// Styles
import {
    CardHeader,
    TitleCard, Section, CardChip,
    CardNumber, CardName, CardDateValid
} from "./styles"

// Assets
import Chip from "../assets/chip.png"

const CreditCard: React.FC<ICreditCard> = ({ cardTitle,
    cardNumber,
    cardNamePersonal,
    cardDateValid,
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
    cardChipImage,
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
            <CardHeader>
                <TitleCard>{cardTitle}</TitleCard>
            </CardHeader>
            <CardChip>
                <img src={cardChipImage && cardChipImage.trim() !== '' ? cardChipImage : Chip} alt="Chip image" />
            </CardChip>
            <CardNumber>
                <span>
                    {cardNumber}
                </span>
            </CardNumber>
            <CardName>
                <span>
                    {cardNamePersonal}
                </span>
            </CardName>
        </Section>
        <Section>
            <CardDateValid>
                <span>
                    {cardDateValid}
                </span>
            </CardDateValid>
        </Section>
    </Container>
)

export default CreditCard
