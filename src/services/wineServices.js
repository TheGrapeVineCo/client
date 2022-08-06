import grapeVineAPI from "../config/api";

export async function getWineListings() {
  const response = await grapeVineAPI.get("/api/wine_listings");
  return response.data;
}

export async function createWine(data) {
  const response = await grapeVineAPI.post("/api/wine_listings", data);
  return response.data;
}

export async function getWine(id) {
  const response = await grapeVineAPI.get(`/wine_listings/${id}`);
  return response.data;
}

// export async function getMessagesByUser(username){
//     const response = await jitterAPI.get(`/messages?username=${username}`)
//     //console.log(response.data)
//     return response.data

// }
