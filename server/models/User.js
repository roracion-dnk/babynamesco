// server/models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../models/index'); // Adjust path as necessary

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // options
});

module.exports = User;
