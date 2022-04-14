const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const schema = new Schema ({
    name: { type: String, require: true, minlenght: 3, maxlenght: 50 },
    regcode: { type: Number, require: true, unique: true, minlenght: 3, maxlenght: 50 },
    email: { type: String, require: true, minlenght: 3, maxlenght: 50 },
    domains: [{
        name: { type: String }
    }],
    description: { type: String },
    contacts: [{
                name: { type: String, require: true },
                email: { type: String, require: true },
                phone: { type: String, require: true }
            }],
    offers: [{
                status: { type: String },
                title: { type: String }
            }]
})

schema.set('toJSON', { virtuals: true})
module.exports = mongoose.model('partners', schema)