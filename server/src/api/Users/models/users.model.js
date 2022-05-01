const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const schema = new Schema ({
    name: { type: String, require: true },
    position: { type: String, require: true },
    phone: { type: Number, require: true },
    email: { type: String, require: true },
})

schema.set('toJSON', { virtuals: true})
module.exports = mongoose.model('users', schema)