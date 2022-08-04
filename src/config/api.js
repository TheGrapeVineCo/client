import axios from "axios";

// creates connection to Heroku
const grapeVineAPI = axios.create({
  // fetching API from local laptop
  baseURL: "http://localhost:4000",

  // fetching API from Heroku
  // baseURL: "https://grapevine-rails-api.herokuapp.com/"
});

grapeVineAPI.interceptors.request.use((request) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  if (token === !undefined) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default grapeVineAPI;
