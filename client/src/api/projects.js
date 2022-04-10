import axios from 'axios'

export async function getProjects() {
    const result = await axios({
        url: '/api/project/get-projects',
        method: 'GET'
    })
    return result.data
}
