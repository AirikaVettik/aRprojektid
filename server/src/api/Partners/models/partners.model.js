const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const schema = new Schema ({
    name: { type: String, require: true, minlenght: 3, maxlenght: 50 },
    regcode: { type: Number, require: true, unique: true, minlenght: 5, maxlenght: 15 },
    city: { type: String },
    phone: { type: Number },
    email: { type: String, require: true, minlenght: 3, maxlenght: 20 },
    contacts: [{
                name: { type: String, require: true },
                email: { type: String, require: true },
                phone: { type: Number, require: true }
            }]
})

schema.set('toJSON', { virtuals: true})
module.exports = mongoose.model('partners', schema)