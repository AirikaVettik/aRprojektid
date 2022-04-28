const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getProjectsNew = await Documents.find({status: 'Projekt', subStatus: 'Uus projekt'})
        res.status(200).json ({ getProjectsNew })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}