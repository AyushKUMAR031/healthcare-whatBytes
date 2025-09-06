const asyncHandler = require('express-async-handler');
const Patient = require('../models/Patient');

const addPatient = asyncHandler(async (req, res) => {
  const { name, age, gender } = req.body;
  const patient = await Patient.create({ name, age, gender, UserId: req.user.id });
  res.status(201).json(patient);
});

const getPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.findAll({ where: { UserId: req.user.id } });
  res.json(patients);
});

const getPatientById = asyncHandler(async (req, res) => {
  const patient = await Patient.findOne({ where: { id: req.params.id, UserId: req.user.id } });
  if (!patient) {
    res.status(404);
    throw new Error('Patient not found');
  }
  res.json(patient);
});

const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findOne({ where: { id: req.params.id, UserId: req.user.id } });
  if (!patient) {
    res.status(404);
    throw new Error('Patient not found');
  }
  await patient.update(req.body);
  res.json(patient);
});

const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findOne({ where: { id: req.params.id, UserId: req.user.id } });
  if (!patient) {
    res.status(404);
    throw new Error('Patient not found');
  }
  await patient.destroy();
  res.status(200).json({ message : "Patient deleted successfully"});
});

module.exports = { 
  addPatient, 
  getPatients, 
  getPatientById, 
  updatePatient, 
  deletePatient 
};
