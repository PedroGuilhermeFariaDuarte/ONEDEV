/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

// Types
import IInputGlass from "../types"

// Coponents
import Container from "../components/Container"

// Styles
import { Section, Input, Button } from "./styles"

const InputGlass: React.FC<IInputGlass> = ({
    inputPlaceholder,
    inputPlaceholderColor,
    buttonName,
    buttonColor,
    cardWidth,
    cardHeight,
    cardRadius,
    cardBackground,
    cardGlass, cardColorBorder,
    children, ...rest }) => (
    <Container
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        cardRadius={cardRadius}
        cardGlass={cardGlass}
        cardBackground={cardBackground}
        cardColorBorder={cardColorBorder}
    >
        <Section>
            <Input
                placeholder={inputPlaceholder}
                inputPlaceholderColor={inputPlaceholderColor}
                {...rest}
            />
        </Section>
        <Section>
            <Button buttonColor={buttonColor}>
                {buttonName}
            </Button>
        </Section>
    </Container>
)

export default InputGlass
