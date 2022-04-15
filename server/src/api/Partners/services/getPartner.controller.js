const db = require ('../../../../db')
const Partners = db.Partners

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getPartner  = await Partners.findOne({regcode: req.params.regcode})
        res.status(200).json ({ getPartner })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}

