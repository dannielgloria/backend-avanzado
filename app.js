import dotenv from "dotenv";
import express from 'express';

import connectDB from "./src/config/db.js";
import healtcheckRoutes from "./src/routes/healtcheckRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import authRoutes from "./src/routes/authRoutes.js"

dotenv.config();

connectDB();

const app = express()

//Routes

//app.use('/api/v0/users', )
app.use(express.json());
app.use('/api/v0/', healtcheckRoutes)
app.use('/api/v0/users', userRoutes)
app.use('/api/v0/auth', authRoutes)


const PORT = 5010;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})