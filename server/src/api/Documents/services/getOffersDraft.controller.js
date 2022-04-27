const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getOffersDraft = await Documents.find({status: 'Hinnapakkumine', subStatus: 'Koostamisel'})
        res.status(200).json ({ getOffersDraft })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}