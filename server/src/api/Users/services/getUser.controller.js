const db = require ('../../../../db')
const Users = db.Users

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getUser  = await Users.findOne({_id: req.params.id})
        res.status(200).json ({ getUser })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}
