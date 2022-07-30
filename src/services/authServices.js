import grapeVineAPI from '../config/api';

// data passed in from user signup from state
export async function signUp(data) {
  const response = await grapeVineAPI.post("api/sign_up", data);
  console.log(response.data);
  return response.data;
}
