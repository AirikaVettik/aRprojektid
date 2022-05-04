const db = require ('../../../../db')
const Todos = db.Todos

module.exports = async function (req, res) {
    try {
        const getTasksFalse = await Todos.find({checkbox: false})
        res.status(200).json ({ getTasksFalse })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}