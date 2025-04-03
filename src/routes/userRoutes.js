import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createUser, getAllUsers, getPost, createPost } from '../controllers/userController.js';
import { userValidation } from '../middleware/userValidationMiddleware.js'

const router = express.Router();

router.route('/create').post(userValidation, createUser).get(getAllUsers)
router.route('/post').post(protect, createPost).get(getPost)

export default router