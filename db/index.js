const { Sequelize } = require('sequelize');
const User = require('../models/User');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
});

User.hasMany(Patient);
Patient.belongsTo(User);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    await sequelize.sync({ alter: true });
    console.log('Models synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
