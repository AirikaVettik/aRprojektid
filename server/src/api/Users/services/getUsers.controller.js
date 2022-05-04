const db = require ('../../../../db')
const Users = db.Users

module.exports = async function (req, res) {
    try {
        const getUsers  = await Users.find().sort({name: 1})
        res.status(200).json ({ getUsers })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}
