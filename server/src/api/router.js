const partnerroutes = require('./Partners/index')
const express = require('express') 
const router = express.Router()

router.use('/partner', partnerroutes)

module.exports = router
