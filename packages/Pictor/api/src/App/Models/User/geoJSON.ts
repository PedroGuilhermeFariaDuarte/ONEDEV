import mongoose from "mongoose"

export const Location = new mongoose.Schema({
    type: {
        type: String,
        enum: [ 'Point' ],
        required: true
    },
    coordinates: {
        type: [ Number ],
        required: true
    }
})
