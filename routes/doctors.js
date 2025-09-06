const express = require('express');
const router = express.Router();
const { addDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor } = require('../controllers/doctors');
const { protect } = require('../middlewares/auth');

router.route('/').post(protect, addDoctor).get(protect, getDoctors);
router.route('/:id').get(protect, getDoctorById).put(protect, updateDoctor).delete(protect, deleteDoctor);

module.exports = router;
