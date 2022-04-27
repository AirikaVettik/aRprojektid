const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getDocument  = await Documents.findOne({_id: req.params.id})
        res.status(200).json ({ getDocument })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}
