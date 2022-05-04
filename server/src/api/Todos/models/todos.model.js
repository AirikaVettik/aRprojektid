const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    checkbox: { type: Boolean, default: false},
    title: { type: String, required: true },
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('todo', schema)