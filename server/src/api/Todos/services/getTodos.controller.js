const db = require ('../../../../db')
const Todos = db.Todos

module.exports = async function (req, res) {
    try {
        const getTodos  = await Todos.find()
        res.status(200).json ({ getTodos })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}