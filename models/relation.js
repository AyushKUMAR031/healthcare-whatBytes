const User = require('./User');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const PatientDoctor = require('./PatientDoctor');

// Associations
User.hasMany(Patient);
Patient.belongsTo(User);

Patient.belongsToMany(Doctor, { through: PatientDoctor });
Doctor.belongsToMany(Patient, { through: PatientDoctor });

module.exports = { User, Doctor, Patient, PatientDoctor };
