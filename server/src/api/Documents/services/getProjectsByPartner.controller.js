const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const getProjectsByPartner = await Documents.find({
            status: { $in: ['Projekt', 'Lõpetatud']},
            partner: req.params.partner
        })
        res.status(200).json ({ getProjectsByPartner })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}