import React, { useState, useEffect, memo } from "react"
// @ts-ignore
import mapboxgl from "mapbox-gl/dist/mapbox-gl"

// Icons
import {
    MdZoomIn, MdZoomOut,
    MdMyLocation, MdPanoramaHorizontal,
    MdPanoramaVertical, MdCropFree
} from "react-icons/md"

// Types
import { IMapBox, IMapBoxComponent, ILocation } from "./types"

// Styles
import {
    Container, ContainerMapBox,
    ContainerMapBoxController,
    ContainerActionMapBox,
} from "./styles"

// Utils
import { handlerDebouceFunction } from "../../../../utils/Function/debounce"

const MapBox: React.FC<IMapBoxComponent> = ({ dataUser }) => {
    const [ mapData, setMapData ] = useState<IMapBox | any>({
        coordinates: {
            defaultCoordinates: {
                longitude: dataUser?.location?.coordinates[ 0 ],
                latitude: dataUser?.location?.coordinates[ 1 ]
            },
            longitude: 0,
            latitude: 0
        },
        action: {
            zoom: 10
        },
    })
    const [ myMap, setMyMap ] = useState<any>(null)
    const [ location, setLocation ] = useState<ILocation>({
        x: 0,
        y: 0,
        coords: {
            lat: 0,
            lng: 0
        }
    })
    const [ pointClicked, setPointClicked ] = useState<boolean>(false)

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAPBOX
        const map = new mapboxgl.Map({
            container: "map-box-container",
            style: process.env.REACT_APP_STYLE_MAPBOX,
            center: [
                Number(mapData?.coordinates?.defaultCoordinates?.longitude || 0),
                Number(mapData?.coordinates?.defaultCoordinates?.latitude || 0),
            ],
            zoom: mapData?.action?.zoom || 5,
        })

        map.on('click', (event: any) => {
            setPointClicked(true)
            setLocation({
                x: event.originalEvent.offsetX - 5,
                y: event.originalEvent.offsetY - 2,
                coords: event.lngLat
            })
        })

        setMyMap(map)
        return () => map.remove()
    }, [])

    function handlerSetZoomIn(zoom: number) {
        setPointClicked(false)
        if (zoom > 0 && (mapData.action.zoom + zoom) <= 20) {
            const newZoom = mapData.action.zoom + zoom
            myMap.setZoom(newZoom)
            setMapData(
                {
                    ...mapData,
                    action: {
                        zoom: newZoom
                    }
                }
            )
        }
    }

    function handlerSetZoomOut(zoom: number) {
        setPointClicked(false)
        if (zoom > 0 && (mapData.action.zoom - zoom) >= 1) {
            const newZoom = mapData.action.zoom - zoom
            myMap.setZoom(newZoom)
            setMapData(
                {
                    ...mapData,
                    action: {
                        zoom: newZoom
                    }
                }
            )
        }
    }

    function handlerSetMinDistance(meters: number) {
        setPointClicked(false)
        if (dataUser) {
            // @ts-ignore
            dataUser.minDistance = meters
            localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify(dataUser))
        }
    }

    function handlerSetMaxDistance(meters: number) {
        setPointClicked(false)
        if (dataUser) {
            // @ts-ignore
            dataUser.maxDistance = meters
            localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify(dataUser))
        }
    }

    function handlerSetCenterMap() {
        setPointClicked(false)
        myMap.setCenter([
            Number(mapData?.coordinates?.defaultCoordinates?.longitude),
            Number(mapData?.coordinates?.defaultCoordinates?.latitude),
        ])
    }

    function handlerSetMyNewLocation() {
        setPointClicked(false)
        if (dataUser && location.coords) {
            // @ts-ignore
            dataUser.location.coordinates = [
                location?.coords?.lng,
                location?.coords?.lat
            ]
            localStorage.setItem("@PICTOR:USER_DATA", JSON.stringify(dataUser))
        }
    }

    return (
        <Container>
            <ContainerMapBoxController>
                <ContainerActionMapBox
                    title="Aumente o zoom"
                    onClick={() => handlerDebouceFunction(handlerSetZoomIn, 100, 1)}
                >
                    <MdZoomIn />
                </ContainerActionMapBox>
                <ContainerActionMapBox
                    title="Diminua o zoom"
                    onClick={() => handlerDebouceFunction(handlerSetZoomOut, 100, 1)}
                >
                    <MdZoomOut />
                </ContainerActionMapBox>
                <ContainerActionMapBox
                    title="Ir para a sua localização"
                    onClick={() => handlerSetCenterMap()}
                >
                    <MdMyLocation />
                </ContainerActionMapBox>
                <ContainerActionMapBox
                    title="Marcar a localização minina"
                    onClick={() => handlerDebouceFunction(handlerSetMyNewLocation, 100)}
                >
                    < MdPanoramaHorizontal />
                </ContainerActionMapBox>
            </ContainerMapBoxController>
            {
                pointClicked === true && location && (
                    <MdCropFree
                        id="point-clicked"
                        style={{
                            fontSize: "var(--font-svg-size-min)",
                            color: "var(--icon-status-general)",
                            position: "absolute",
                            zIndex: 100,
                            left: location?.x || 0,
                            top: location?.y || 0
                        }}
                    />
                )
            }

            <ContainerMapBox />
        </Container >
    )
}

export default memo(MapBox)
