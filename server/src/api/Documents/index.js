
const express = require('express') 
const router = express.Router()

const { getDocuments,
        getDocument,
        getOffers,
        getOffersDraft,
        getOffersSendout,
        getProjects,
        getProjectsNew,
        getProjectsMy,
        addDocument,
          } = require ('../Documents/services/index')

router.get('/get-documents', getDocuments)

router.get('/get-document/:id', getDocument)

router.get('/get-offers', getOffers)

router.get('/get-offersdraft', getOffersDraft)

router.get('/get-offerssendout', getOffersSendout)

router.get('/get-projects', getProjects)

router.get('/get-projectsnew', getProjectsNew)

router.get('/get-projectsmy', getProjectsMy)

router.post('/add-document', addDocument)

module.exports = router