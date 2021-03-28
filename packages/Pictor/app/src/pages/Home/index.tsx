import React from "react"
import { useHistory } from "react-router-dom"
import { MdForum } from "react-icons/md"

// Components

// Styles
import {
    Container, Content, ContainerLogo,
    ContainerTitle, ContainerButtons, ContainerWarning
} from "./styles"

const Home: React.FC = () => {
    const history = useHistory()

    function handlerHistory(pageName: string) {
        try {
            history.push(pageName)
        } catch (error) {
            console.log(`A error ocurred with history manipulation: ${error.message}`)
        }
    }

    return (
        <Container>
            <Content>
                <ContainerLogo>
                    <MdForum />
                </ContainerLogo>
                <ContainerTitle>
                    <span>Welcome to</span>
                    <h1>PictorApp</h1>
                </ContainerTitle>
                <ContainerButtons>
                    <button
                        type="button"
                        onClick={() => handlerHistory("signin")}
                    >
                        continue
                    </button>
                </ContainerButtons>
            </Content>
            <ContainerWarning>
                <p>
                    If you click in continue button, you agree in shared your
                    localization with this application.
            </p>
            </ContainerWarning>
        </Container>
    )
}

export default Home
