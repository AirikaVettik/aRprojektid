const db = require ('../../../../db')
const Partners = db.Partners

module.exports = async function (req, res) {
    try {
        await Partners.deleteOne({_id: req.params.id})
        res.status(200).json ({ message: 'Tehtud!' })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}