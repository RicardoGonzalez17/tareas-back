const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AsyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//Registrar un usuario
const registerUser = AsyncHandler( async (req, res) => {

    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Faltan datos, favor de verificar')
    }

    //Verificamos si el usuario existe
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('El usuario ya existe')
    }

    else{
        //Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Crear usuario para insertar
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        if(user){   
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email:user.email,
                admin: user.isAdmin
            })
        }
        else {
            res.status(400)
            throw new Error('No se pudo guardar el usuario')
        }
    }

})

//Hacer login
const loginUser = AsyncHandler( async (req, res) => {
    const {email, password} = req.body

    if(!email || !password) {
        res.status(400)
        throw new Error('Faltan datos, favor de verificar')
    }

    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            admin: user.isAdmin,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Credenciales incorrectas, favor de verificar')
    }
})

//Muestra los datos del usuario
const datosUser = AsyncHandler( async(req, res) => {
    res.status(200).json(req.user)
})

//Generamos el JWT
const generateToken = (idUser) => {
    return jwt.sign({idUser},process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    datosUser
}