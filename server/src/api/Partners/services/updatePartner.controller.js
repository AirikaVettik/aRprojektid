const db = require ('../../../../db')
const Partner = db.Partners

module.exports = async function (req, res) {
    try {
        await Partner.updateOne({_id: req.params.id}, {
            $set: req.body
        })
        res.status(200).json ({ message: req.body })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}