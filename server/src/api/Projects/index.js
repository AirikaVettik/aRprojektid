
const express = require('express') 
const router = express.Router()

router.get('/get-projects', (request, response) => {  
    response.status(200).json([
        {
            object: 'Projekt',
            project: 'Uus koduleht domeenile www.airikavettik.ee',
            partner: 'aRfoto OÜ',
            contact: 'Airika Vettik',
            status: 'Pausil',
            manager: 'Mari Maasikas',
        },
        {
            object: 'Projekt',
            project: 'Uus koduleht domeenile www.eb.ee',
            partner: 'EB OÜ',
            contact: 'Mihkel Tõrva',
            status: 'Arendustööd',
            manager: 'Juhan Klaas',
        },
        {
            object: 'Projekt',
            project: 'Uus e-pood domeenile www.raindesign.ee',
            partner: 'Raindesign OÜ',
            contact: 'Rain Tõrva',
            status: 'Kliendi sisendi ootel',
            manager: 'Airika Vettik',
        },

    ])
})

router.get('/get-partner', (request, response) => {  
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

router.post('/add-partner', (request, response) => {  
    response.status(201).json()
})



module.exports = router