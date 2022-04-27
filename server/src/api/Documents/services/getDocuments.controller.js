const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getDocuments  = await Documents.find(filter)
        res.status(200).json ({ getDocuments })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}

