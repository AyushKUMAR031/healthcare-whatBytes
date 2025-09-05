const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/config');

const PatientDoctor = sequelize.define('PatientDoctor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = PatientDoctor;
