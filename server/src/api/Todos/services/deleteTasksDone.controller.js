const db = require ('../../../../db')
const Todos = db.Todos

module.exports = async function (req, res) {
    try {
        await Todos.deleteMany({checkbox: true})
        res.status(200).json ({ message: 'Tehtud!' })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}