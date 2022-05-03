import axios from 'axios'

export async function getDocuments() {
    const result = await axios({
        url: '/api/document/get-documents',
        method: 'GET'
    })
    return result.data.getDocuments
}

export async function getDocument(id) {
    const result = await axios({
        url: '/api/document/get-document/' + id,
        method: 'GET'
    })
    return result.data.getDocument
}

export async function getOffers() {
    const result = await axios({
        url: '/api/document/get-offers',
        method: 'GET'
    })
    return result.data.getOffers
}

export async function getOffersDraft() {
    const result = await axios({
        url: '/api/document/get-offersdraft',
        method: 'GET'
    })
    return result.data.getOffersDraft
}

export async function getOffersSendout() {
    const result = await axios({
        url: '/api/document/get-offerssendout',
        method: 'GET'
    })
    return result.data.getOffersSendout
}

export async function getProjects() {
    const result = await axios({
        url: '/api/document/get-projects',
        method: 'GET'
    })
    return result.data.getProjects
}

export async function getProjectsNew() {
    const result = await axios({
        url: '/api/document/get-projectsnew',
        method: 'GET'
    })
    return result.data.getProjectsNew
}

export async function getProjectsMy() {
    const result = await axios({
        url: '/api/document/get-projectsmy',
        method: 'GET'
    })
    return result.data.getProjectsMy
}

export async function addDocument(document) {
    const result = await axios({
        url: '/api/document/add-document/',
        method: 'POST',
        headers: {},
        data: document
    },)
} 

export async function updateDocument(id, newOffer) {
    const result = await axios({
        url: '/api/document/update-document/' + id,
        method: 'PATCH',
        headers: {},
        data: newOffer
    })
}

export async function duplicateDocument(id) {
    const result = await axios({
        url: '/api/document/duplicate/' +id,
        method: 'POST',
    },)
} 