const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const schema = new Schema ({
    status: { 
        type: String, 
        require: true, 
        enum: ['Hinnapakkumine', 'Projekt', 'Lõpetatud'],
        default: 'OFFER'
    },
    subStatus: {
        type: String, 
        enum: ['Koostamisel', 'Välja saadetud', 'Tagasi lükatud', 'Uus projekt', 'Töösse võetud', 'Kujundustööd', 'Arendustööd', 'Testimisel', 'Ootel', 'Pausil', 'Parandustööd', 'Hooldustööd', 'Lõpetatud'],
        default: 'DRAFT'
    },
    title: { type: String, require: true },
    sellmanager: { type: String, require: true },
    period: { type: String, require: true },
    start: { type: String, require: true },
    partner: { type: String, require: true },
    contact: { type: String, require: true },
    domain: { type: String, require: true },
    description: { type: String },
    offer: [{
        name: { type: String },
        description: { type: String },
        hours: { type: Number },
        price: { type: Number },
        total: { type: Number }
    }],
    conditions: { type: String },
    totalhours: { type: Number },
    prepayment: { type: String, require: true },
    total: { type: Number },
    manager: { type: String, require: true },
    developer: { type: String, require: true },
    logs: [{
        title: { type: String },
        info: { type: String },
        date: { type: Date, default: Date.now },
    }],
    timetable: [{
        checkbox: { type: Boolean, default: false},
        name: { type: String },
        start: { type: Date, default: Date.now },
        finish: { type: Date, default: Date.now },
    }],
    budget: [{
        name: { type: String },
        hours: { type: Number },
        price: { type: Number },
        realhours: { type: Number },
        realprice: { type: Number },
        profit: { type: Number }
    }],
    cost: { type: Number },
    profit: { type: Number },
    plugins: [{
        name: { type: String },
        sum: { type: Number },
        start: { type: Date, default: Date.now },
        end:{ type: Date, default: Date.now },
    }],
    pluginstotal: { type: Number },
    payment: [{
        checkbox: { type: Boolean, default: false},
        name: { type: String },
        sum: { type: Number },
        date: { type: Date, default: Date.now },
    }],
    paymenttotal: { type: Number },
    guaranty: [{
        name: { type: String },
        start: { type: Date, default: Date.now },
        end: { type: Date, default: Date.now },
    }],
    projectend: [{
        date: { type: Date, default: Date.now },
        name: { type: String },
    }],
})

schema.set('toJSON', { virtuals: true})
module.exports = mongoose.model('documents', schema)