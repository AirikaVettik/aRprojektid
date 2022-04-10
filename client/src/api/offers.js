import axios from 'axios'

export async function getOffers() {
    const result = await axios({
        url: '/api/offer/get-offers',
        method: 'GET'
    })
    return result.data
}
