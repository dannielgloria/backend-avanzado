import express from 'express'
import { registerUser, authenticateUser } from '../controllers/authController.js'; 
import { userValidation } from '../middleware/userValidationMiddleware.js'

const router = express.Router();

router.post('/register',userValidation, registerUser)
router.post('/login', authenticateUser)

export default router