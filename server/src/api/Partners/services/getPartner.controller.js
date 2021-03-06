const db = require ('../../../../db')
const Partner = db.Partners

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getPartner  = await Partner.findOne({_id: req.params.id})
        res.status(200).json ({ getPartner })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}

