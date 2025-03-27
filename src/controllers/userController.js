import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user)
    } catch (error) {
        console.error(error)
        res.status(400).json({message: error.message})
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.status(201).json(user)
    } catch (error) {
        console.error(error)
        res.status(400).json({message: error.message})
    }
}