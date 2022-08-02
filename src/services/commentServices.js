import grapeVineAPI from "../config/api";

export async function getComments() {
  const response = await grapeVineAPI.get("/comments");
  // console.log(response.data);
  return response.data;
}

export async function createComment(data) {
  const response = await grapeVineAPI.post("/comments", data);
  return response.data;
}

export async function getComment(id) {
  const response = await grapeVineAPI.get(`/comments/${id}`);
  //console.log(response.data)
  return response.data;
}

export async function removeComment(id) {
  const response = await grapeVineAPI.get(`/comments/${id}`);
  console.log(response.data);
  return response.data;
}
