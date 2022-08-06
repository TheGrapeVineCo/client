import grapeVineAPI from "../config/api";

// data passed in from user signup from state
export async function signUp(data) {
  const payload = { user: { ...data } };
  const response = await grapeVineAPI.post("api/sign_up", payload);
  return response.data;
}

// facilitates user login to FE/BE
export async function logIn(data) {
  const payload = { user: { ...data } };
  const response = await grapeVineAPI.post("api/login", payload);
  const { username, id } = response.data.user;
  const sessionData = {
    userID: id,
    username: username,
    jwt: response.headers.authorization,
  };

  return sessionData;
}
