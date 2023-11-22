const express = require('express');
const router = express.Router()
const {getTareas,createTarea,updateTarea,deleteTarea} = require('../controllers/tareasController')

// Obtener tareas
router.get('/', getTareas)

// Crear una nueva tarea
router.post('/', createTarea)

// Modificar una tarea
router.put('/:id', updateTarea)

// Eliminar una tarea
router.delete('/:id', deleteTarea)

module.exports = router