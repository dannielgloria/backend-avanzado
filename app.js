import express from 'express';
import connectDB from "./src/config/db.js";
import healtcheckRoutes from "./src/routes/healtcheckRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import authRoutes from "./src/routes/authRoutes.js"
import fileRoutes from "./src/routes/fileRoutes.js"
import { errors } from "celebrate";

connectDB();

const app = express()

//Routes

//app.use('/api/v0/users', )
app.use(express.json());
app.use('/api/v0/', healtcheckRoutes)
app.use('/api/v0/users', userRoutes)
app.use('/api/v0/auth', authRoutes)
app.use('/api/v0/files', fileRoutes)


app.use(errors());

const PORT = 5010;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})