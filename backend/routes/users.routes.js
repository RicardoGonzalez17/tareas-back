const express = require('express');
const router = express.Router();
const { registerUser,loginUser,datosUser } = require('../controllers/usersController')
const { protect } = require('../middlewares/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/datos', protect, datosUser)

module.exports = router