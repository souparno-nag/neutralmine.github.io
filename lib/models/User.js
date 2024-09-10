import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    location: {
        place: {
            type: String,
            required: true,
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true,
        },
    },
    governmentId: {
        type: String, // Government-issued ID for the facility
        required: true,
        unique: true,
    },
    environmentalLicenseNumber: {
        type: String, // Unique license number
        required: true,
    },

}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", UserSchema)