import axios from 'axios'

export async function getPartners() {
    const result = await axios({
        url: '/api/partner/get-partners',
        method: 'GET'
    })
    return result.data.getPartners
}

export async function getPartner(regcode) {
    const result = await axios({
        url: '/api/partner/get-partner/' + regcode,
        method: 'GET'
    })
    return result.data.getPartner
}

export async function addPartner(form) {
    const result = await axios({
        url: '/api/partner/add-partner/',
        method: 'POST',
        headers: {},
        data: form
    },)
} 

export async function deletePartner(regcode) {
    const result = await axios({
        url: '/api/partner/delete-partner/' + regcode,
        method: 'DELETE'
    })
}
