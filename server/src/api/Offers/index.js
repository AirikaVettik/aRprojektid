
const express = require('express') 
const router = express.Router()

router.get('/get-offers', (request, response) => {  
    response.status(200).json([
        {
            object: 'Hinnapakkumine',
            sellmanager: 'Tuuli Kena',
            project: 'Uus koduleht domeenile www.airikavettik.ee',
            partner: 'aRfoto OÜ',
            contact: 'Airika Vettik',
            status: 'Väljasaadetud'
        },
        {
            object: 'Hinnapakkumine',
            sellmanager: 'Tuuli Kena',
            project: 'Uus koduleht domeenile www.eb.ee',
            partner: 'EB OÜ',
            contact: 'Mihkel Tõrva',
            status: 'Koostamisel'
        },
        {
            object: 'Hinnapakkumine',
            sellmanager: 'Tuuli Kena',
            project: 'Uus koduleht domeenile www.raindesign.ee',
            partner: 'RainDesign OÜ',
            contact: 'Rain Tõrva',
            status: 'Kinnitatud'
        },


    ])
})

router.get('/get-offer', (request, response) => {  
    response.status(200).json(
        {
            name: 'aRfoto OÜ',
            regcode: '12838033',
            email: 'info@av.ee',
            domain: 'www.airikavettik.ee',
            contact: [{
                name: 'Airika Vettik',
                email: 'airika@av.ee',
                phone: '59194429'
            }],
            projects: []
        },
    )
})

router.post('/add-offer', (request, response) => {  
    response.status(201).json()
})



module.exports = router