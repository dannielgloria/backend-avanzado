import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // hace la relacion entre un post y un usuario
        ref: 'User'
    }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;