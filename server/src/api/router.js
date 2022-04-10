const partnerroutes = require('./Partners/index')
const offerroutes = require('./Offers/index')
const projectroutes = require('./Projects/index')

const express = require('express') 
const router = express.Router()

router.use('/partner', partnerroutes)
router.use('/offer', offerroutes)
router.use('/project', projectroutes)

module.exports = router
