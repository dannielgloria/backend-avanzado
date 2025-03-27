import dotenv from "dotenv";

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
})

import express from 'express';

const app = express()

// Configuracion basica de rutas HEALTCHECK
app.get('/healtcheck', (req, res)=> {
    const healtcheck = {
        status: "OK",
        code: "200",
        message: "Servidor en funcionamiento"
    }
    res.send(healtcheck)
})

const PORT = 5010;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})