const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3003

const app = express()

app.use('/api/tareas', require('./routes/tareas.routes'))

app.listen(port, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})