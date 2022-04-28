const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getProjectsMy = await Documents.find({status: 'Projekt', manager: 'Airika Vettik'})
        res.status(200).json ({ getProjectsMy })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}