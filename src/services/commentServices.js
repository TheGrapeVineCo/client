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

// not yet tested -> tbd
export async function editComment(data) {
  console.log(data);
  const response = await grapeVineAPI.patch(`/comments/${data.id}`, {
    comment: data.comment,
    wine_listing_id: data.wine_listing_id,
    user_id: data.user_id,
  });
  console.log(response);
  return response.data;
}

export async function removeComment(id) {
  const response = await grapeVineAPI.delete(`/comments/${id}`);
  return response.data;
}
