import axios from 'axios'

export async function getTasksFalse() {
    const result = await axios({
        url: '/api/todo/false-tasks',
        method: 'GET'
    })
    return result.data.getTasksFalse
}

export async function getTasksTrue() {
    const result = await axios({
        url: '/api/todo/true-tasks',
        method: 'GET'
    })
    return result.data.getTasksTrue
}

export async function addTodo(form) {
    const result = await axios({
        url: '/api/todo/add-todo/',
        method: 'POST',
        headers: {},
        data: form
    },)
}

export async function updateTodo(id) {
    const result = await axios({
        url: '/api/todo/update-task/' + id,
        method: 'PATCH',
    })
}

export async function updateDone(id) {
    const result = await axios({
        url: '/api/todo/update-done/' + id,
        method: 'PATCH',
    })
}

export async function deleteTasksDone() {
    const result = await axios({
        url: '/api/todo/delete-done/',
        method: 'DELETE'
    })
}