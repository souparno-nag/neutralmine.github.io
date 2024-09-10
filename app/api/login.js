// pages/api/login.js
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken"; // Use JSON Web Token for authentication

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { governmentId, environmentalLicenseNumber } = req.body;

        try {
            // Connect to the database
            await connectToDatabase();

            // Find user by governmentId and environmentalLicenseNumber
            const user = await User.findOne({ governmentId, environmentalLicenseNumber });

            if (!user) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            // Generate a JWT token
            const token = jwt.sign(
                { id: user._id, name: user.name },
                process.env.JWT_SECRET, // Ensure JWT_SECRET is defined in your .env.local
                { expiresIn: "7d" }
            );

            // Return the token and user details
            res.status(200).json({
                token,
                user: {
                    name: user.name,
                    companyName: user.companyName,
                    location: user.location,
                },
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
