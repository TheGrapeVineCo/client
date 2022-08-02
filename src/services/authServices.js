import grapeVineAPI from '../config/api';

// data passed in from user signup from state
export async function signUp(data) {
  // data needs to be stored inside user: as devise gem from Rails requires to data its data in this way
  const data_for_devise = {user: data}
  const response = await grapeVineAPI.post("api/sign_up", data_for_devise);
  console.log(response.data);

  return response.data;
}
