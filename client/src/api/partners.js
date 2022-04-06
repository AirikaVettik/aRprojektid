import axios from 'axios'

export async function getParners() {
    const result = await axios({
        url: '/api/partner/get-partners',
        method: 'GET'
    })
    return result.data
}
