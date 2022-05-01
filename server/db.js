const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGODB_URI )
mongoose.Promise = global.Promise

module.exports = {
    Partners: require('./src/api/Partners/models/partners.model'),
    Documents: require('./src/api/Documents/models/documents.model'),
    Users: require('./src/api/Users/models/users.model')
}