const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        await Documents.create(req.body)
        res.status(200).json ({ message: 'Tehtud!' })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}
