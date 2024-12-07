import express from 'express';
import { addTrain } from '../controllers/adminController.js';
import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware.js';

const router = express.Router();

router.post('/add-train', apiKeyMiddleware, addTrain);

export default router;
