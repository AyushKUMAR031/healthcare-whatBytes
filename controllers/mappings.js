const asyncHandler = require('express-async-handler');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const PatientDoctor = require('../models/PatientDoctor');

const assignDoctorToPatient = asyncHandler(async (req, res) => {
  const { patientId, doctorId } = req.body;
  const patient = await Patient.findByPk(patientId);
  const doctor = await Doctor.findByPk(doctorId);

  if (!patient || !doctor) {
    res.status(404);
    throw new Error('Patient or Doctor not found');
  }

  const [mapping, created] = await PatientDoctor.findOrCreate({
    where: { PatientId: patient.id, DoctorId: doctor.id },
    defaults: { PatientId: patient.id, DoctorId: doctor.id },
  });

  if (created) {
    res.status(201).json({ mapping, message: 'Doctor assigned to patient successfully' });
  } else {
    res.status(409).json({ mapping, message: 'Doctor already assigned to this patient' });
  }
});

const getMappings = asyncHandler(async (req, res) => {
  const mappings = await PatientDoctor.findAll({
    include: [Patient, Doctor]
  });
  res.json(mappings);
});

const getDoctorsForPatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findByPk(req.params.patient_id, {
    include: {
      model: Doctor,
      through: { attributes: [] } //Sequelize to use PatientDoctor but hide join table cols
    }
  });

  if (!patient) {
    res.status(404);
    throw new Error('Patient not found');
  }

  res.json(patient.Doctors); // returns doctors assigned to this patient
});

const removeDoctorFromPatient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const mapping = await PatientDoctor.findByPk(id);
  if (!mapping) {
    res.status(404);
    throw new Error('Mapping not found');
  }
  await mapping.destroy();
  res.status(200).send({msg : "Doctor removed from patient successfully" });
});

module.exports = { 
  assignDoctorToPatient, 
  getMappings, 
  getDoctorsForPatient, 
  removeDoctorFromPatient 
};
