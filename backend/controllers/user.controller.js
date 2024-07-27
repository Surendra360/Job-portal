import { User } from "../models/user.model";
import bcrypt from "bcryptjs";


export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Somthing is missing...",
                success: false
            })
        };

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User alrady registered with this email",
                success: false
            })
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        })

    } catch (error) {
        console.log(error);
    }
}


export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Somthing is missing",
                success: false,
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "password not match",
                success: false
            })
        }

    } catch (error) {
        console.log(error);
    }
}