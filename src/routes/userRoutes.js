import express from 'express'
import { createUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.route('/create').post(createUser).get(getAllUsers)

export default router