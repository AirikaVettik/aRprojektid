const db = require ('../../../../db')
const Todos = db.Todos

module.exports = async function (req, res) {
    try {
        const getTasksTrue  = await Todos.find({checkbox: true})
        res.status(200).json ({ getTasksTrue })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}