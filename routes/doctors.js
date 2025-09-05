const express = require('express');
const router = express.Router();
const { addDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor } = require('../controllers/doctors');
const { protect } = require('../middlewares/auth');

router.route('/').post(protect, addDoctor).get(getDoctors);
router.route('/:id').get(getDoctorById).put(protect, updateDoctor).delete(protect, deleteDoctor);

module.exports = router;
