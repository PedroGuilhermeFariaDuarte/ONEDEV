import React from "react"

// Global Components
import { ContactContainer } from "../Container"

// Styled
import { ContainerImage, Content, ContainerStatus } from "./styles"

import { IContactGlass } from "../../types"

const ContactGlass: React.FC<IContactGlass> = ({
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

    contactName,
    contactImage,
    contactLastMessage,
    contactDateMessage,
    contactIsOnline,
    contactReadMessage,
    contactNumberOfMessage,
    ...rest
}) => (
    <ContactContainer
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
        <ContainerImage contactImage={contactImage}>
            <div />
            <span>{contactIsOnline}</span>
        </ContainerImage>
        <Content>
            <span
                className="glasscomponentss-contact_name"
            >
                {contactName}
            </span>
            <span
                className="glasscomponentss-contact_lastMessage"
            >
                {contactLastMessage}
            </span>
        </Content>
        <ContainerStatus>
            <span
                className="glasscomponentss-contact_dateMessage"
            >
                {contactDateMessage}
            </span>
            {
                contactReadMessage === false && (
                    <span
                        className="glasscomponentss-contact_totalMessage"
                    >
                        {contactNumberOfMessage}
                    </span>
                )
            }
        </ContainerStatus>
    </ContactContainer>
)

export default ContactGlass;
