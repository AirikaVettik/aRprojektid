
const express = require('express') 
const router = express.Router()

const { getPartners,
        getPartner,
        addPartner,
        deletePartner,
        updatePartner,
        getPartnerContact,
          } = require ('../Partners/services/index')

router.get('/get-partners', getPartners )

router.get('/get-partner/:id', getPartner )

router.get('/contact/:name', getPartnerContact )

router.post('/add-partner', addPartner )

router.delete('/delete-partner/:id', deletePartner)

router.patch('/update-partner/:id', updatePartner)


module.exports = router