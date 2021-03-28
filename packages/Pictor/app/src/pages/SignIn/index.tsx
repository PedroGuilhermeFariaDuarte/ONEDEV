import React, { useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MdEmail } from "react-icons/md"

// Services
import Axios from "../../services/request"

// Components
import Input from "../../components/Input"

// Types
import { IData } from "./types"

// Utils
import { handlerValidationUserData } from "../../utils/Validation/User"
import { SchemaUserSignIn } from "../../utils/Schema/User"

// Styles
import {
    Container, Content, ContainerActions, ContainerButtons, ContainerInput,
    FormContainer, ContainerTitle
} from "./styles"

const Login: React.FC = () => {
    const history = useHistory()
    const refForm = useRef(null)

    useEffect(() => {
        if (localStorage.getItem("@PICTOR:USER_DATA")) {
            handlerHistory("main")
        }
    }, [])

    function handlerHistory(pageName: string) {
        try {
            history.push(pageName)
        } catch (error) {
            console.log(`A error ocurred with history manipulation: ${error.message}`)
        }
    }

    async function handlerSubmitForm(data: IData) {
        try {
            const response = await Axios.get(`user/myuser/${data?.username}`)

            // @ts-ignore
            if (response?.data?.code !== 200) {
                // @ts-ignore
                console.log(response?.message)
                return;
            }

            const { coordinates } = response.data?.data?.location

            if (!localStorage.getItem("@PICTOR:USER_DATA")) {
                localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify({
                    id: response.data?.data?.id,
                    name: response.data?.data?.name,
                    username: response.data?.data?.username,
                    description: response.data?.data?.description,
                    location: coordinates
                }))
            }

            handlerHistory("main")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Container>
            <ContainerTitle>
                <span>SignIn to</span>
                <h1>PictorApp</h1>
            </ContainerTitle>
            <Content>
                <FormContainer ref={refForm} onSubmit={handlerSubmitForm}>
                    <ContainerInput>
                        <MdEmail />
                        <Input name="username" type="text" placeholder="your username" />
                    </ContainerInput>
                </FormContainer>
                <ContainerActions>
                    <ContainerButtons>
                        <button
                            type="button"
                            onClick={() => {
                                // @ts-ignore
                                handlerValidationUserData(SchemaUserSignIn, refForm?.current?.getData(), refForm)
                            }}
                        >
                            continue
                        </button>
                    </ContainerButtons>
                    <span>OR</span>
                    <ContainerButtons>
                        <button
                            type="button"
                            onClick={() => handlerHistory("signup")}
                        >
                            create a account
                    </button>
                    </ContainerButtons>
                </ContainerActions>
            </Content>
        </Container>
    )
}

export default Login
