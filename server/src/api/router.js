const partnerroutes = require('./Partners/index')
const documentroutes = require('./Documents/index')


const express = require('express') 
const router = express.Router()


router.use('/partner', partnerroutes)
router.use('/document', documentroutes)

module.exports = router
