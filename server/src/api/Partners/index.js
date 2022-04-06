
const express = require('express') 
const router = express.Router()

router.get('/get-partners', (request, response) => {  
    response.status(200).json([
        {
            name: 'aRfoto OÜ',
            regcode: '12838033',
            email: 'info@av.ee',
            domain: 'www.airikavettik.ee',
            contact: [{
                name: 'Airika Vettik',
                email: 'airika@av.ee',
                phone: '59194429'
            }]
        },
        {
            name: 'EB OÜ',
            regcode: '12838033',
            email: 'info@av.ee',
            domain: 'www.airikavettik.ee',
            contact: [{
                name: 'Airika Vettik',
                email: 'airika@av.ee',
                phone: '59194429'
            }]
        },
        {
            name: 'EB OÜ',
            regcode: '12838033',
            email: 'info@av.ee',
            domain: 'www.airikavettik.ee',
            contact: [{
                name: 'Airika Vettik',
                email: 'airika@av.ee',
                phone: '59194429'
            }]
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