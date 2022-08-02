import grapeVineAPI from "../config/api";

// data passed in from user signup from state
export async function signUp(data) {
  const payload = { user: { ...data } };
  console.log(payload);
  const response = await grapeVineAPI.post("api/sign_up", payload);
  console.log(response.data);
  return response.data;
}

// facilitates user login to FE/BE
export async function logIn(data) {
  const payload = { user: { ...data } };
  console.log(payload);
  const response = await grapeVineAPI.post("api/login", payload);
  console.log(response.data);
  return response.data;
}
