import grapeVineAPI from "../config/api";

export async function getComments() {
  const response = await grapeVineAPI.get("/comments");
  // console.log(response.data);
  return response.data;
}

export async function createComment(data) {
  const payload = { comment: { ...data } };
  console.log(payload);
  const response = await grapeVineAPI.post("/comments", payload);
  console.log(response);
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
