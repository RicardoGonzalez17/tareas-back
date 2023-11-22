const getTareas = (req, res)=>{
    res.status(200).json({
        message:'Obtener Tareas'
     })
}

const createTarea = (req,res) => {
    res.status(201).json({
        message:'Tarea Creada'
     })
}

const updateTarea = (req, res) => {
    res.status(200).json({
        message: `Se modificó la tarea ${req.params.id}`
     })
}

const deleteTarea = (req, res) => {
    res.status(200).json({
        message: `Se eliminó la tarea ${req.params.id}`
     })
}

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}