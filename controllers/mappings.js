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

    const mapping = await PatientDoctor.create({
      PatientId: patient.id,
      DoctorId: doctor.id,
    });

    res.status(201).json({ mapping, message: 'Doctor assigned to patient successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMappings = async (req, res) => {
  try {
    const mappings = await PatientDoctor.findAll({
      include: [Patient, Doctor]
    });
    res.json(mappings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getDoctorsForPatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.patient_id, {
      include: {
        model: Doctor,
        through: { attributes: [] } //Sequelize to use PatientDoctor but hide join table cols
      }
    });

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.json(patient.Doctors); // returns doctors assigned to this patient
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
    res.status(200).send({msg : "Doctor removed from patient successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { 
  assignDoctorToPatient, 
  getMappings, 
  getDoctorsForPatient, 
  removeDoctorFromPatient 
};
