import bcrypt from 'bcrypt';
import User from '../models/user.js';
import Train from '../models/train.js';
import Booking from '../models/booking.js';
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

export const getSeatAvailability = async (req, res) => {
  const { source, destination } = req.query;

  try {
    const trains = await Train.findAll({ where: { source, destination } });
    if (!trains.length) return res.status(404).json({ message: 'No trains found for this route' });

    const availability = trains.map(train => ({
      trainId: train.id,
      totalSeats: train.totalSeats,
      availableSeats: train.totalSeats - train.bookedSeats,
    }));

    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching seat availability', error });
  }
};


export const bookSeat = async (req, res) => {
  const { trainId } = req.body;
  const { userId } = req.user; // Extracted from JWT

  try {
    const train = await Train.findByPk(trainId);
    if (train.totalSeats <= train.bookedSeats) return res.status(400).json({ message: 'No available seats' });

    const booking = await Booking.create({ userId, trainId });
    train.bookedSeats += 1;
    await train.save();

    res.status(200).json({ message: 'Booking successful', bookingId: booking.id });
  } catch (error) {
    res.status(500).json({ message: 'Error booking seat', error });
  }
};

export const getBookingDetails = async (req, res) => {
    const { bookingId } = req.params;
    const { userId } = req.user;
  
    try {
      const booking = await Booking.findOne({ where: { id: bookingId, userId } });
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
  
      res.status(200).json({ message: 'Booking details', booking });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching booking details', error });
    }
  };


