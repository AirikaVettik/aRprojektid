const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getOffersByPartner = await Documents.find({
            status: 'Hinnapakkumine', 
            partner: req.params.partner
        })
        res.status(200).json ({ getOffersByPartner })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}