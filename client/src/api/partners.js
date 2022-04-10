import axios from 'axios'

export async function getPartners() {
    const result = await axios({
        url: '/api/partner/get-partners',
        method: 'GET'
    })
    return result.data
}

export async function getPartner() {
    const result = await axios({
        url: '/api/partner/get-partner',
        method: 'GET'
    })
    return result.data
}
