import dotenv from "dotenv";
import express from 'express';

import connectDB from "./src/config/db.js";
import healtcheckRoutes from "./src/routes/healtcheckRoutes.js"

dotenv.config();

connectDB();

const app = express()

//Routes

//app.use('/api/v0/users', )
app.use('/api/v0/', healtcheckRoutes)


const PORT = 5010;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})