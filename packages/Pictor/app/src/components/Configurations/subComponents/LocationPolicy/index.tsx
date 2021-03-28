import React, { useEffect, useState, memo } from "react"

// Services
import axios from "../../../../services/request"

// Types
import { IUserData, ILocationPolicy } from "./types"

// Styles
import { ContainerLocation, ContainerButton } from "./styles"

import { handlerDebouceFunction } from "../../../../utils/Function/debounce"

const LocationPolicy: React.FC<ILocationPolicy> = ({ user }) => {
    const [ location, setLocation ] = useState<IUserData>({
        type: "Point",
        coordinates: []
    })

    useEffect(() => {
        async function handlerCall() {
            await handlerUpdateLocation(location)
        }

        handlerCall()

        return () => { }
    }, [ location ])

    useEffect(() => {
        async function handlerCall() {
            if (location.coordinates.length > 0) {
                user.location = location
                localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify(user))
            }
        }

        handlerCall()

        return () => { }
    }, [ location ])

    async function handlerUpdateLocation(data: IUserData) {
        try {
            const response = await axios.put(`user/update/${user?.id}`, data)

            // @ts-ignore
            if (response?.data?.code !== 200) {
                // @ts-ignore
                console.log(response?.message)
                return;
            }
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

    function handlerVerifyChecked(id: string, cb: Function, onlyFalse: boolean, ...rest: Array<any>) {
        const optionChecked = document.querySelector(`#${id}`)

        // @ts-ignore
        if (onlyFalse === false && optionChecked?.checked === false) {
            // @ts-ignore
            cb(...rest)
        } else if (onlyFalse === true) {
            cb(...rest)
        }
    }

    function handlerSetAllowAccessLocation(value: boolean) {
        user.allowedLocation = value
        localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify(user))
    }


    return <>
        <ContainerLocation>
            <ContainerButton>
                <input
                    type="checkbox"
                    name="option-location"
                    id="option-location"
                />
                <label
                    // @ts-ignore
                    htmlFor="option-location"
                    onClick={(event: any) =>
                        handlerVerifyChecked('option-location',
                            handlerDebouceFunction,
                            true,
                            handlerSetAllowAccessLocation,
                            200,
                            // @ts-ignore
                            !document.querySelector("#option-location")?.checked
                        )
                    }
                />
            </ContainerButton>
            <span
                className="describe-option"
            >
                Allow this application access your actual location
            </span>
        </ContainerLocation>
        <ContainerLocation>
            <ContainerButton>
                <input type="checkbox" name="option-location" id="option-location-update" />
                <label
                    // @ts-ignore
                    htmlFor="option-location-update"
                    onClick={(event: any) =>
                        handlerVerifyChecked('option-location-update',
                            handlerDebouceFunction,
                            false,
                            handlerGetGeoLocation,
                            200)}
                />
            </ContainerButton>
            <span
                className="describe-option"
            >
                Update your actual location
            </span>
        </ContainerLocation>
    </>
}

export default memo(LocationPolicy)
