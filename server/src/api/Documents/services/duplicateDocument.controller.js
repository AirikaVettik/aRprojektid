const db = require ('../../../../db')
const Documents = db.Documents

module.exports = async function (req, res) {
    try {
        const ObjectId = require('mongodb').ObjectID;
        const document = await Documents.findOne({_id: req.params.id})
        document._id = new ObjectId()
        document.isNew = true
        await Documents.create(document);
        res.status(200).json ( document )
    } catch (error) {
        res.status(500).json({ message : error.message })
    }
}
