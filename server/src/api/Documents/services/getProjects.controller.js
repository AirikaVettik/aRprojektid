const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getProjects = await Documents.find({status: 'Projekt'})
        res.status(200).json ({ getProjects })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}