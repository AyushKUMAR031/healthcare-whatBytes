const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const PatientDoctor = require('../models/PatientDoctor');

const assignDoctorToPatient = async (req, res) => {
  const { patientId, doctorId } = req.body;
  try {
    const patient = await Patient.findByPk(patientId);
    const doctor = await Doctor.findByPk(doctorId);

    if (!patient || !doctor) {
      return res.status(404).json({ error: 'Patient or Doctor not found' });
    }

    await patient.addDoctor(doctor);
    res.status(201).json({ message: 'Doctor assigned to patient successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMappings = async (req, res) => {
  try {
    const mappings = await PatientDoctor.findAll();
    res.json(mappings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDoctorsForPatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.patient_id, { include: Doctor });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.json(patient.Doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeDoctorFromPatient = async (req, res) => {
  const { id } = req.params;
  try {
    const mapping = await PatientDoctor.findByPk(id);
    if (!mapping) {
      return res.status(404).json({ error: 'Mapping not found' });
    }
    await mapping.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { assignDoctorToPatient, getMappings, getDoctorsForPatient, removeDoctorFromPatient };
