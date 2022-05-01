
const express = require('express') 
const router = express.Router()

const { getUsers,
        getUser,
        addUser,
        updateUser,
          } = require ('../Users/services/index')

router.get('/get-users', getUsers)

router.get('/get-user/:id', getUser)

router.post('/add-user', addUser )

router.patch('/update-user/:id', updateUser)


module.exports = router