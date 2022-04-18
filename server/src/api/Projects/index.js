
const express = require('express') 
const router = express.Router()

router.get('/get-projects', (request, response) => {  
    response.status(200).json([
        {
            object: 'Projekt',
            project: 'Uus koduleht domeenile www.airikavettik.ee',
            partner: 'aRfoto OÜ',
            contact: 'Airika Vettik',
            status: 'Kujundustöö',
            manager: 'Airika Vettik',
        },
        {
            object: 'Projekt',
            project: 'Uus koduleht domeenile www.eb.ee',
            partner: 'EB OÜ',
            contact: 'Mihkel Tõrva',
            status: 'Pausil',
            manager: 'Airika Vettik',
        },
        {
            object: 'Projekt',
            project: 'Uus e-pood domeenile www.raindesign.ee',
            partner: 'Raindesign OÜ',
            contact: 'Rain Tõrva',
            status: 'Arendustöö',
            manager: 'Airika Vettik',
        },

    ])
})

router.post('/add-partner', (request, response) => {  
    response.status(201).json()
})



module.exports = router