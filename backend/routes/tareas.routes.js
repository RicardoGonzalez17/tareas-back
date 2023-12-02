const express = require('express');
const router = express.Router()
const {getTareas,createTarea,updateTarea,deleteTarea} = require('../controllers/tareasController')
const { protect } = require('../middlewares/authMiddleware')

// Obtener tareas
router.get('/', protect, getTareas)

// Crear una nueva tarea
router.post('/', protect, createTarea)

// Modificar una tarea
router.put('/:id', protect, updateTarea)

// Eliminar una tarea
router.delete('/:id', protect, deleteTarea)

module.exports = router