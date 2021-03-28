import { PropsWithChildren } from "react"

export interface IMapBox {
    coordinates: {
        defaultCoordinates: {
            longitude: number | Number,
            latitude: number | Number
        }
        longitude: number | Number,
        latitude: number | Number
    },
    action: {
        zoom: number | Number
    }
}

export interface IMapBoxComponent extends PropsWithChildren<any> {
    dataUser?: {
        chatting?: {
            colors?: string
            imageURL?: string
        } | undefined
        id: string
        name: string
        username: string
        description: string
        location: {
            type: string
            coordinates: Array<number> | Array<any>
        }
    }
}

export interface ILocation {
    x?: number,
    y?: number
    coords: {
        lng: number,
        lat: number,
    }
}
