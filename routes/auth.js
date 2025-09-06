const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');
const validate = require('../middlewares/validation');
const { registerSchema, loginSchema } = require('../validators/auth');

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

module.exports = router;
