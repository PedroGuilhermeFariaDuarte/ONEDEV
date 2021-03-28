import React from "react"

// Styled
import { Container, ContainerImage, Content, ContainerStatus } from "./styles"

import { IContactGlass } from "./types"

const Contact: React.FC<IContactGlass> = ({
    contactName,
    contactImage,
    contactLastMessage,
    contactDateMessage,
    contactIsOnline,
    contactReadMessage,
    ...rest
}) => (
    <Container
    >
        <ContainerImage contactImage={contactImage}>
            <div />
            <span>{contactIsOnline}</span>
        </ContainerImage>
        <Content>
            <span
                className="contact_name"
            >
                {contactName}
            </span>
            <span
                className="contact_lastMessage"
            >
                {contactLastMessage}
            </span>
        </Content>
        <ContainerStatus>
            <span
                className="contact_dateMessage"
            >Today
      </span>
            <span
                className="contact_totalMessage"
            >4
      </span>
        </ContainerStatus>
    </Container>
)

export default Contact;
