import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { loginUser } from '../controllers/userController.js';
import { getSeatAvailability } from '../controllers/userController.js';
import { bookSeat } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);
router.get('/seat-availability', getSeatAvailability);

router.post('/book-seat', authMiddleware, bookSeat);
router.get('/booking/:bookingId', authMiddleware, getBookingDetails);
export default router;


