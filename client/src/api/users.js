import axios from 'axios'

export async function getUsers() {
    const result = await axios({
        url: '/api/user/get-users',
        method: 'GET'
    })
    return result.data.getUsers
}