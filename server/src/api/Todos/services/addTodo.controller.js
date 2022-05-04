const db = require ('../../../../db')
const Todo = db.Todos

module.exports = async function (req, res) {
    try {
        await Todo.create(req.body)
        res.status(200).json ({ message: 'Tehtud!' })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}
