const asyncHandler = require('express-async-handler');
const Doctor = require('../models/Doctor');

const addDoctor = asyncHandler(async (req, res) => {
  const { name, specialization } = req.body;
  const doctor = await Doctor.create({ name, specialization });
  res.status(201).json(doctor);
});

const getDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
});

const getDoctorById = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) {
    res.status(404);
    throw new Error('Doctor not found');
  }
  res.json(doctor);
});

const updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) {
    res.status(404);
    throw new Error('Doctor not found');
  }
  await doctor.update(req.body);
  res.json(doctor);
});

const deleteDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) {
    res.status(404);
    throw new Error('Doctor not found');
  }
  await doctor.destroy();
  res.status(200).send({ message: "Doctor deleted successfully" });
});

module.exports = { 
  addDoctor, 
  getDoctors, 
  getDoctorById, 
  updateDoctor, 
  deleteDoctor 
};
