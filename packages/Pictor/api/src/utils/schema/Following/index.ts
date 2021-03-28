import * as Yup from "yup"

export const SchemaUserFollwing = Yup.object().shape({
    id: Yup.string().max(24),
    name: Yup.string().required("Your name is required!"),
    username: Yup.string()
        .min(6, "Your username dot not the min of characters, min is 6")
        .max(12, "Your username the max of characters, max is 12")
        .required("Your username is required!"),
    dateFollowing: Yup.date().required("Your date is required")
})
