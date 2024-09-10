import mongoose from "mongoose"

const MongoDB_URI = process.env.MONGODB_URI

export default async function connectDB() {
    const connectionState = mongoose.connection.readyState;
    if (connectionState == 1) {
        console.log("Already connected to the database")
        return;
    }
    else if (connectionState == 2) {
        console.log("Connecting to the database...")
        return;
    }
    try {
        mongoose.connect("mongodb://localhost:27017/NeutralMINE", {
            bufferCommands: true,
            // useUnifiedTopology: true,
            // useNewUrlParser: true,

        })
        console.log("Connected to the database")
    }
    catch (e) {
        console.log(e)
        throw new Error("Failed to connect to the database")
    }
}