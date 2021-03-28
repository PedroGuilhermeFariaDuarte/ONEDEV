import * as Yup from "yup"

export const SchemaUserSignIn = Yup.object().shape({
    username: Yup.string().min(6).max(12).required("Your username is required!")
})

export const SchemaUserSignUp = Yup.object().shape({
    username: Yup.string().min(6).max(12).required("Your username is required!"),
    name: Yup.string().min(6).required("Your name is required!"),
    description: Yup.string().min(6).max(50).required("Your description is required!")
})

export const SchemaUserUpdate = Yup.object().shape({
    username: Yup.string().min(6).max(12),
    name: Yup.string().min(6),
    description: Yup.string().min(6).max(50),
})
