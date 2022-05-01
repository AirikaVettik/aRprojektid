const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getOffers = await Documents.find({ $or : [ {status: 'Hinnapakkumine'}, { subStatus: "Tagasi lükatud"} ] })
        res.status(200).json ({ getOffers })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}

