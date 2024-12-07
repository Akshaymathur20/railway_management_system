import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db.js';

const Train = db.define('Train', {
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookedSeats: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Train;
