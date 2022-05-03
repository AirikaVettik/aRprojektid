const db = require ('../../../../db')
const Partner = db.Partners

module.exports = async function (req, res) {
    try {
        await Partner.create(req.body)
        res.status(200).json ({ message: 'Tehtud!' })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}

