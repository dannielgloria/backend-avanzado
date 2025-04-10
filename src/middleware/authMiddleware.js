import User from "../models/User.js";
import { jwtSecret } from "../config/constants.js"
import jwt from "jsonwebtoken"

export const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,jwtSecret);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({message:'Not athorized, token failed'});
        }
    }
    if(!token){
        res.status(401).json({message:'Not athorized, no token'});
    }
};