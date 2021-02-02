/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

// Types
import ICreditCard from "../types"

// Coponents
import Container from "../components/Container"

// Styles
import {
    Content, CardHeader,
    TitleCard, Section, CardChip,
    CardNumber, CardName, CardDateValid
} from "./styles"

// Assets
import Image from "../assets/object.png"
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
    children, ...rest }) => (
    <Content>
        <Container
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            cardRadius={cardRadius}
            cardGlass={cardGlass}
            cardBackground={cardBackground}
            cardColorBorder={cardColorBorder}
        >
            <Section>
                <CardHeader>
                    <TitleCard>{cardTitle}</TitleCard>
                </CardHeader>
                <CardChip>
                    <img src={Chip} alt="Teste" />
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
        <img src={Image} className="background" alt="Teste" />
    </Content>
)

export default CreditCard
