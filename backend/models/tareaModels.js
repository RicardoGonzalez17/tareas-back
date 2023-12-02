const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    texto: {
        type: String,
        required: [true, 'Por favor teclea el texto de la tarea']
    }
},{
    // Esto crea una columna createdAt y nos pone fecha y hora de cuando se crea el registro y otra de updateAt
    timestamps: true
})

// Por buenas practias la colección se debe poner la primera letra en MAYUSCULA y se debe poner en singular
module.exports = mongoose.model('Tarea', tareaSchema)