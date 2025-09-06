const Patient = require('../models/Patient');

const addPatient = async (req, res) => {
  const { name, age, gender } = req.body;
  try {
    const patient = await Patient.create({ name, age, gender, UserId: req.user.id });
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { UserId: req.user.id } });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id, UserId: req.user.id } });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id, UserId: req.user.id } });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    await patient.update(req.body);
    res.json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id, UserId: req.user.id } });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    await patient.destroy();
    res.status(200).json({ message : "Patient deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { 
  addPatient, 
  getPatients, 
  getPatientById, 
  updatePatient, 
  deletePatient 
};
