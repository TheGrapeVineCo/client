import wineAPI from "../config/api";


export async function getWineListings(){
    const response = await wineAPI.get('/api/wine_listings')
    //console.log(response.data)
    return response.data

}

export async function createWine(data){
    const response = await wineAPI.post('/api/wine_listings', data)
    return response.data
}

export async function getWine(id){
    const response = await wineAPI.get(`/wine_listings/${id}`)
    //console.log(response.data)
    return response.data

}

// export async function getMessagesByUser(username){
//     const response = await jitterAPI.get(`/messages?username=${username}`)
//     //console.log(response.data)
//     return response.data

// }