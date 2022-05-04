const partnerroutes = require('./Partners/index')
const documentroutes = require('./Documents/index')
const userroutes = require('./Users/index')
const todoroutes = require('./Todos/index')


const express = require('express') 
const router = express.Router()


router.use('/partner', partnerroutes)
router.use('/document', documentroutes)
router.use('/user', userroutes)
router.use('/todo', todoroutes)

module.exports = router
