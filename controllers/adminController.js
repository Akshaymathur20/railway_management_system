import Train from '../models/train.js';

export const addTrain = async (req, res) => {
  const { source, destination, totalSeats } = req.body;

  try {
    const newTrain = await Train.create({ source, destination, totalSeats });

    res.status(201).json({ message: 'Train added successfully', trainId: newTrain.id });
  } catch (error) {
    res.status(500).json({ message: 'Error adding train', error });
  }
};
