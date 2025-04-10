import express from 'express'

const router = express.Router();

// Crear una función de callback para manejar las solicitudes GET a /healtcheck
const healtcheck = (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Servidor en funcionamiento"
    });
};

router.get('/healtcheck', healtcheck);

export default router;