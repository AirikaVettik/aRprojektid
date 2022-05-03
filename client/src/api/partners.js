import axios from 'axios'

export async function getPartners() {
    const result = await axios({
        url: '/api/partner/get-partners',
        method: 'GET'
    })
    return result.data.getPartners
}

export async function getPartner(id) {
    const result = await axios({
        url: '/api/partner/get-partner/' + id,
        method: 'GET'
    })
    return result.data.getPartner
}

export async function getPartnerContact(selectedPartner) {
    const result = await axios({
        url: '/api/partner/contact/' + selectedPartner,
        method: 'GET'
    })
    return result.data.getPartnerContact
}


export async function addPartner(form) {
    const result = await axios({
        url: '/api/partner/add-partner/',
        method: 'POST',
        headers: {},
        data: form
    },)
} 

export async function deletePartner(id) {
    const result = await axios({
        url: '/api/partner/delete-partner/' + id,
        method: 'DELETE'
    })
}

export async function updatePartner(id, newData) {
    const result = await axios({
        url: '/api/partner/update-partner/' + id,
        method: 'PATCH',
        headers: {},
        data: newData
    })
}
