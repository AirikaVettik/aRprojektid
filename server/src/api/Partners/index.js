
const express = require('express') 
const router = express.Router()

const { getPartners,
        getPartner,
        addPartner,
        deletePartner,
        updatePartner,
          } = require ('../Partners/services/index')

router.get('/get-partners', getPartners )

router.get('/get-partner/:regcode', getPartner )

router.post('/add-partner', addPartner )

router.delete('/delete-partner/:regcode', deletePartner)

router.patch('/update-partner/:regcode', updatePartner)


module.exports = router