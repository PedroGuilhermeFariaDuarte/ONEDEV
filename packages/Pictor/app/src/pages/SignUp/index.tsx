import React, { useState, useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MdEmail } from "react-icons/md"

// Services
import Axios from "../../services/request"

// Components
import Input from "../../components/Input"

// Types
import { IData, ILocation } from "./types"

// Utils
import { handlerValidationUserData } from "../../utils/Validation/User"
import { SchemaUserSignUp } from "../../utils/Schema/User"

// Styles
import {
    Container, Content, ContainerActions, ContainerButtons, ContainerInput,
    FormContainer, ContainerTitle
} from "./styles"

const SignUp: React.FC = () => {
    const [ location, setLocation ] = useState<ILocation>({
        type: "Point",
        coordinates: []
    })
    const history = useHistory()
    const refForm = useRef(null)

    useEffect(() => {
        if (localStorage.getItem("@PICTOR:USER_DATA")) {
            handlerHistory("main")
        }

        // @ts-ignore
        handlerGetGeoLocation()
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
            const dataForm = {
                ...data,
                location: location?.coordinates?.length > 0 ? location : {
                    type: "Point",
                    coordinates: [ 32.808549, -79.880126 ]
                }
            }

            const response = await Axios.post("user/create", dataForm)

            // @ts-ignore
            if (response?.code !== 200) {
                // @ts-ignore
                console.log(response?.message)
            }

            const { coordinates } = response.data?.data?.location

            localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify({
                id: response.data?.data?.id,
                name: response.data?.data?.name,
                username: response.data?.data?.username,
                description: response.data?.data?.description,
                location: coordinates
            }))

            handlerHistory("main")
        } catch (error) {
            console.log(error.message)
        }
    }

    function handlerGetGeoLocation() {
        const geoLocation = navigator.geolocation

        geoLocation.getCurrentPosition(handlerSetLocation, (error) => { }, { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });
    }

    function handlerSetLocation(position: Object) {
        // @ts-ignore
        const { longitude, latitude } = position.coords;

        setLocation({
            type: "Point",
            coordinates: [ longitude, latitude ]
        })
    }



    return (
        <Container>
            <ContainerTitle>
                <span>SignUp to</span>
                <h1>PictorApp</h1>
            </ContainerTitle>
            <Content>
                <FormContainer ref={refForm} onSubmit={handlerSubmitForm}>
                    <ContainerInput>
                        <MdEmail />
                        <Input name="name" type="text" placeholder="your name" />
                    </ContainerInput>
                    <ContainerInput>
                        <MdEmail />
                        <Input name="description" type="text" placeholder="A description about you" />
                    </ContainerInput>
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
                                handlerValidationUserData(SchemaUserSignUp, refForm?.current?.getData(), refForm)
                            }}
                        >
                            continue
                        </button>
                    </ContainerButtons>
                    <span>OR</span>
                    <ContainerButtons>
                        <button
                            type="button"
                            onClick={() => handlerHistory("signin")}
                        >
                            back
                    </button>
                    </ContainerButtons>
                </ContainerActions>
            </Content>
        </Container>
    )
}

export default SignUp
