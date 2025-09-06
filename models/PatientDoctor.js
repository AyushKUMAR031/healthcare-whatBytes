const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/config');

const PatientDoctor = sequelize.define('PatientDoctor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['PatientId', 'DoctorId']
    }
  ]
});

module.exports = PatientDoctor;
