const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getOffersSendout = await Documents.find({status: 'Hinnapakkumine', subStatus: 'Välja saadetud', sellmanager: 'Airika Vettik'})
        res.status(200).json ({ getOffersSendout })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}