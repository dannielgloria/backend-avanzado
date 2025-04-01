import User from "../models/User.js";
import Post from "../models/Post.js";

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

export const getPost = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'name email');
        res.status(201).json(posts)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) =>{
    const { title, userId } = req.body;

    // Verificamos si el usuario existe en Mongo
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found'});
    }

    //Creamos Post
    const post = new Post({
        title,
        user: userId
    });

    // Aqui se guardara nuestro objeto post en Mongodb
    try {
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        return res.status(400).json({ message: error.message});
    }
};