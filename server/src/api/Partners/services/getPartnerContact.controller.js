const db = require ('../../../../db')
const Partner = db.Partners

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getPartnerContact  = await Partner.findOne({name: req.params.name})
        res.status(200).json ({ getPartnerContact })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}
