
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
            objectoffer: 'Hinnapakkumine',
            offerstatus: 'koostamisel',
            title: 'Uus koduleht domeenile www.raindesign.ee',
            sellmanager: 'Tuuli Kena',
            period: '12 töönädalat',
            start: '23.04.2022',
            partner: [{
                name: 'Raindesign OÜ',
                contact: 'Rain Tõrva',
                domain: 'www.raindesign.ee',
                description: 'Käsitööna valmivad väiksemad tooted majapidamisse, disainmööbel ja laste aktiivsusmänguasjad.'
            }],
            offer: [{
                name: 'Kujundus',
                description: 'Kliendi soovil valitakse creativemarketist talle sobiv kodulehe teema. Tehakse minimaalse muudatused.',
                hours: 20,
                price: 40,
                total: 800
            },{
                name: 'Arendustööd',
                description: 'Turvaline koduleht',
                hours: 60,
                price: 60,
                total: 3600
            },{
                name: 'Testimine',
                description: 'Testimine erinevates etappides',
                hours: 20,
                price: 40,
                total: 800
            },{
                name: 'Projektijuhtimine',
                description: 'Projekti kordineerimine ja elluviimine',
                hours: 30,
                price: 30,
                total: 900
            }],
            conditions: 'Ettevõtte tingimused projekti elluviimiseks.',
            totalhours: 130,
            prepayment: '50%',
            total: 6100,
            objectproject: 'Projekt',
            manager: 'Kaari Kari',
            developer: 'Kodulehed OÜ',
            projectstatus: 'ootel',
            logs: [{
                title: 'Projekti võeti töösse',
                info: 'Esitati ettemaksuarve',
                date: '01.02.2022'
            },{
                title: 'Kõne - sisend',
                info: 'Helistasin, lubab esimest kodulehe sisendit 20.02.',
                date: '05.02.2022'
            },{
                title: 'Kiri - sisend',
                info: 'Kliendilt saadud vajalik sisend, kujundusega saab jätkata',
                date: '20.02.2022'
            },{
                title: 'Kiri - kliendilt',
                info: 'Soovib 2 nädalaks panna projekti ootele, kliendil kiired ajad.',
                date: '25.02.2022'
            }],
            timetable: [{
                checkbox: true,
                name: 'Kujundus',
                start: '20.02.2022',
                finish: '28.02.2022',
            },{
                checkbox: false,
                name: 'Arendustööd',
                start: '01.03.2022',
                finish: '01.05.2022',
            },{
                checkbox: false,
                name: 'Testimine',
                start: '01.04.2022',
                finish: '01.05.2022',
            },{
                checkbox: false,
                name: 'Ettevalmistused LIVE minekuks',
                start: '01.05.2022',
                finish: '05.05.2022',
            }],
            budget: [{
                name: 'Kujundus',
                realhours: 10,
                realprice: 30,
                profit: 500
            },{
                name: 'Arendustööd',
                realhours: 50,
                realprice: 40,
                profit: 1600
            },{
                name: 'Testimine',
                realhours: 20,
                realprice: 20,
                profit: 400
            },{
                name: 'Projektijuhtimine',
                realhours: 20,
                realprice: 20,
                profit: 500
            }],
            cost: 3000,
            profit: 3100,
            plugins: [{
                name: 'Tõlkeplugin WPML, aastamakse',
                sum: 100,
                start: '20.02.2022',
                end:'20.02.2023',
            }],
            pluginstotal: 100,
            payment: [{
                checkbox: true,
                name: 'Ettemaks 50%',
                sum: 3050,
                date: '10.02.2022',
            },{
                checkbox:  false,
                name: 'II osamakse - www.raindesign.ee',
                sum: 1016,
                date: '01.03.2022',
            },{
                checkbox:  false,
                name: 'III osamakse - www.raindesign.ee',
                sum: 1016,
                date: '01.04.2022',
            },{
                checkbox:  false,
                name: 'Lõppmakse - www.raindesign.ee',
                sum: 1018,
                date: '01.05.2022',
            }],
            paymenttotal: 6010,
            guaranty: [{
                start: '05.05.2022',
                end: '05.08.2022'
            }],
            projectend: '10.05.2022',
            service: '10.05.2022'
        }
    )
})

router.post('/add-offer', (request, response) => {  
    response.status(201).json()
})



module.exports = router