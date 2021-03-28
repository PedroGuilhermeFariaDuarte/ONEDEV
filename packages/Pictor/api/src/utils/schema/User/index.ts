import * as Yup from "yup"

export const SchemaUserCreate = Yup.object().shape({
    name: Yup.string().required("Your name is required!"),
    description: Yup.string(),
    username: Yup.string()
        .min(6, "Your username dot not the min of characters, min is 6")
        .max(12, "Your username the max of characters, max is 12")
        .required("Your username is required!"),
    location: Yup.object({
        type: Yup.string(),
        coordinates: Yup.array()
    }).required("Your location is required")
})

export const SchemaUserIndex = Yup.object().shape({
    username: Yup.string().min(6).max(12).required("Your username is required!")
})


export const SchemaUserUpdate = Yup.object().shape({
    name: Yup.string(),
    description: Yup.string(),
    username: Yup.string(),
    location: Yup.object({
        type: Yup.string(),
        coordinates: Yup.array()
    })
})


export const SchemaGeoUserIndex = Yup.object().shape({
    longitude: Yup.number().min(-180).max(180).required("Your longitude is required"),
    latitude: Yup.number().min(-90).max(90).required("Your latitude is required"),
    idUser: Yup.string().max(24).required("Your idUser is required")
})
