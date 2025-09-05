const express = require('express');
const router = express.Router();
const { assignDoctorToPatient, getMappings, getDoctorsForPatient, removeDoctorFromPatient } = require('../controllers/mappings');
const { protect } = require('../middlewares/auth');

router.route('/').post(protect, assignDoctorToPatient).get(protect, getMappings);
router.route('/:patient_id').get(protect, getDoctorsForPatient);
router.route('/:id').delete(protect, removeDoctorFromPatient);

module.exports = router;
