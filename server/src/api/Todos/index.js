const express = require('express') 
const router = express.Router()

const { addTodo, getTodos, getTasksFalse, getTasksTrue, updateTodo, updateDone, deleteTasksDone
          } = require ('../Todos/services/index')

router.post('/add-todo', addTodo )

router.get('/all-todos', getTodos)

router.get('/false-tasks', getTasksFalse)

router.get('/true-tasks', getTasksTrue)

router.patch('/update-task/:id', updateTodo)

router.patch('/update-done/:id', updateDone)

router.delete('/delete-done', deleteTasksDone)


module.exports = router