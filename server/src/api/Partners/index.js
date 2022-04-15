
const express = require('express') 
const router = express.Router()

const { getPartners, 
        getPartner,
        addPartner,  } = require ('../Partners/services/index')

router.get('/get-partners', getPartners )
router.get('/get-partner/:regcode', getPartner )

router.post('/add-partner', addPartner )


module.exports = router