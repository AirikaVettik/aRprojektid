const db = require ('../../../../db')
const Todo = db.Todos

module.exports = async function (req, res) {
    try {
        await Todo.updateOne({_id: req.params.id}, {
            checkbox: true
        })
        res.status(200).json ({ message: "Done!" })
    } catch (error) {
        res.status(500).json({ message : error })
    }
}