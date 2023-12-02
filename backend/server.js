const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler} = require('./middlewares/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

const port = process.env.PORT || 3003

connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tareas', require('./routes/tareas.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})