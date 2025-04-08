import express from 'express'
import upload from '../middleware/uploadFirebaseMiddleware.js';
import { uploadFileFirebase } from '../controllers/fileController.js';
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/uploadFirebase',protect, upload.single('file'), uploadFileFirebase)
//router.post('/uploadLocal', authenticateUser)

export default router