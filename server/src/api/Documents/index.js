
const express = require('express') 
const router = express.Router()

const { getDocuments,
        getDocument,
        getOffers,
        getOffersDraft,
        getOffersSendout,
        getProjects,
        addDocument,
          } = require ('../Documents/services/index')

router.get('/get-documents', getDocuments)

router.get('/get-document/:id', getDocument)

router.get('/get-offers', getOffers)

router.get('/get-offersdraft', getOffersDraft)

router.get('/get-offerssendout', getOffersSendout)

router.get('/get-projects', getProjects)

router.post('/add-document', addDocument)

module.exports = router