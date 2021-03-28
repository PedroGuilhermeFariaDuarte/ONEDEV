import mongoose from "mongoose"

// Types
import { Location } from "./geoJSON"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    following: {
        type: Array,
        require: false,
    },
    followers: {
        type: Array,
        require: false,
    },
    location: Location
}, {
    timestamps: true
})

UserSchema.index({ location: "2dsphere" })

export default mongoose.model("User", UserSchema)
