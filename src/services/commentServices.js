import grapeVineAPI from "../config/api";

export async function getComments() {
  const response = await grapeVineAPI.get("/comments");
  return response.data;
}

// TODO: create comment is not working at the moment due to auth error in the BE. Need to investigate in BE
export async function createComment(data) {
  const { user_id, wine_listing_id } = data;
  const payload = {
    comment: { user_id, wine_listing_id, user_comment: data.comment },
  };
  const response = await grapeVineAPI.post("/comments", payload);
  return response.data;
}

// Not yet implemented - possibly not necessary
// export async function getComment(id) {
//   const response = await grapeVineAPI.get(`/comments/${id}`);
//   return response.data;
// }

export async function editComment(data) {
  const { user_id, wine_listing_id, id } = data;
  const payload = {
    comment: { user_id, wine_listing_id, user_comment: data.comment },
  };
  const response = await grapeVineAPI.patch(`/comments/${id}`, payload);
  return response.data;
}

export async function removeComment(id) {
  const response = await grapeVineAPI.delete(`/comments/${id}`);
  return response.data;
}
