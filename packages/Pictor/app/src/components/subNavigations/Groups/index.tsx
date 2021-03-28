import React, { memo } from "react"

// Components
import Contact from "../../Contact"

// Icons
import { MdKeyboardArrowLeft, MdSearch } from "react-icons/md"

// Types
import { IMyMessage } from "./types"

// Styles
import {
    Container,
    ContainerHeader,
    ContainerSearch,
    ContainerInformation,
    ContainerContact
} from "./styles"

const Groups: React.FC<IMyMessage> = ({ children }) => (
    <Container>
        <ContainerHeader>
            <div id="wrapper_header_icon">
                <MdKeyboardArrowLeft />
            </div>
            <span id="wrapper_header_title">
                {children}
            </span>
        </ContainerHeader>
        <ContainerSearch>
            <input
                type="search"
                name="chat_search"
                maxLength={37}
                placeholder="search a contact" />
            <MdSearch />
        </ContainerSearch>
        <ContainerInformation>
            <span id="container_information_title">
                My groups
            </span>
        </ContainerInformation>
        <ContainerContact>
            <Contact
                contactName="This is a user of test"
                contactDateMessage="23:20"
                contactImage="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                contactIsOnline={false}
                contactLastMessage="This message is a test and I'm very felling"
                contactReadMessage={false}
            />

            <Contact
                contactName="Andrea Tomis"
                contactDateMessage="Last day"
                contactImage="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                contactIsOnline={false}
                contactLastMessage="Ey! lets play a game, now!"
                contactReadMessage={false}
            />

            <Contact
                contactName="Juan Pablo"
                contactDateMessage="Friday"
                contactImage="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                contactIsOnline={false}
                contactLastMessage="Whats is a planet?"
                contactReadMessage={false}
            />

            <Contact
                contactName="Carlos Frencys"
                contactDateMessage="15:50"
                contactImage="https://images.pexels.com/photos/567459/pexels-photo-567459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                contactIsOnline={false}
                contactLastMessage="In park! :D"
                contactReadMessage={false}
            />

            <Contact
                contactName="Natasha korbetienko"
                contactDateMessage="23:15"
                contactImage="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                contactIsOnline={false}
                contactLastMessage="I love dance this music!!!!! \o/"
                contactReadMessage={false}
            />

            <Contact
                contactName="Sebastian Hills"
                contactDateMessage="19:20"
                contactImage="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                contactIsOnline={false}
                contactLastMessage="This photo is very nice"
                contactReadMessage={false}
            />
        </ContainerContact>
    </Container>
)

export default memo(Groups)
