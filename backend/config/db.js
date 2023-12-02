const mongoose = require('mongoose')

//Función para conectarnos a nuestra base de datos
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        //.cyan.underline es del npm colors es para que pinte y subraye en este caso lo que esta en el console.log
        console.log(`Conectado a la base de datos: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        // Se detiene la ejecución del programa
        process.exit(1)
    }
}

module.exports = connectDB