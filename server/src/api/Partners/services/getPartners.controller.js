const db = require ('../../../../db')
const Partners = db.Partners

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getPartners  = await Partners.find(filter)
        res.status(200).json ({ getPartners })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}

