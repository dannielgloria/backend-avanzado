import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true,
    }

});

// Método para hasear el password antes de guardar el usuario
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model('User', UserSchema);
export default User;