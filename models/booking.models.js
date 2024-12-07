import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db.js';

const Booking = db.define('Booking', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trainId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Booking;
