import grapeVineAPI from "/";

// data passed in from user signup from state
export async function signUp(data) {
  const response = await grapeVineAPI.post("/auth/signup", data);
  console.log(response.data);
  return response.data;
}
