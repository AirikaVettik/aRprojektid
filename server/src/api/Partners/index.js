
const express = require('express') 
const router = express.Router()

const { getPartners, 
        addPartner,  } = require ('../Partners/services/index')

router.get('/get-partners', getPartners )

router.get('/get-partner', (request, response) => {  
        response.status(200).json(
            {
                name: 'aRfoto OÜ',
                regcode: '12838033',
                email: 'info@av.ee',
                domain: 'www.airikavettik.ee',
                description: 'Ettevõtte tegeleb fotograafiaga',
                contact: [{
                        name: 'Airika Vettik',
                        email: 'airika@av.ee',
                        phone: '59194429'
                }],
                projects: [{
                        title: 'Uus koduleht domeenile www.airikavettik.ee',
                        status: 'Koostamisel'
                },{
                        title: 'Uus koduleht domeenile www.airikapood.ee',
                        status: 'Koostamisel'
                }],
                offers: [{
                        title: 'Uus koduleht domeenile www.airikavettik.ee',
                        status: 'Koostamisel'
                },{
                        title: 'Uus koduleht domeenile www.airikapood.ee',
                        status: 'Koostamisel'
                }]
            },
        )
    })

router.post('/add-partner', addPartner )


module.exports = router