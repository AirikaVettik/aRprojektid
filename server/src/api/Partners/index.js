
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
            regcode: '12223333',
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
            regcode: '19910209',
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
            description: 'Ettevõte tegeleb fotograafiaga.',
            contact: [{
                name: 'Airika Vettik',
                email: 'airika@av.ee',
                phone: '59194429'
            },{
                name: 'Mari Maasikas',
                email: 'mari@av.ee',
                phone: '59194345'
            }],
            offers: [{
                status: 'Koostamisel',
                title: 'Uus koduleht domeenile www.airikavettik.ee'
            },
            {
                status: 'Koostamisel',
                title: 'Uus koduleht domeenile www.airikavettik.ee'
            }],
            projects: [{
                title: 'Uus e-pood domeenile www.airikavettik.ee'
            }]
        },
    )
})

router.post('/add-partner', (request, response) => {  
    response.status(201).json()
})



module.exports = router