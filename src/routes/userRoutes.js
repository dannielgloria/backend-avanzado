import express from 'express'
import { createUser, getAllUsers, getPost, createPost } from '../controllers/userController.js';

const router = express.Router();

router.route('/create').post(createUser).get(getAllUsers)
router.route('/post').post(createPost).get(getPost)

export default router