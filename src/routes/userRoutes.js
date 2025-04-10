import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createUser, getAllUsers, getPost, createPost } from '../controllers/userController.js';
import { userValidation } from '../middleware/userValidationMiddleware.js'
import { postValidation } from '../middleware/postValidationMiddleware.js';

const router = express.Router();

router.route('/create').post(userValidation, createUser).get(getAllUsers)
router.route('/post').post(protect,postValidation, createPost).get(getPost)

export default router