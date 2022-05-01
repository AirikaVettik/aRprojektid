const db = require ('../../../../db')
const Users = db.Users

module.exports = async function (req, res) {
    try {
        let filter = {}
        filter = req.query
        if (req.query.age === 'true') {
          filter.age = { $exists: true }
        }

        const getUsers  = await Users.find(filter).sort({name: 1})
        res.status(200).json ({ getUsers })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}
