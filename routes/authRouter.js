const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require("config")
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const router = Router()
const UserController = require('../controllers/UserController')


router.post('/register',
    [
      check('email', 'Некорректный email').isEmail(),
      check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),
        UserController.register
    ],

)


router.post('/login', [
    check('email', "Введите корректный email").normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
    UserController.login

],

)







module.exports = router