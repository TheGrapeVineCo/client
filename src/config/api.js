import axios from "axios";

// creates connection to Heroku
const grapeVineAPI = axios.create({
  // fetching API from local laptop
  // baseURL: "http://localhost:4000",

  // fetching API from Heroku
  baseURL: "https://grapevine-rails-api.herokuapp.com/",
});

// enables user to perform authorized crud actions
grapeVineAPI.interceptors.request.use((req) => {
  // sends token in related request
  const token = JSON.parse(sessionStorage.getItem("token"));

  if (token) {
    req.headers["Authorization"] = `${token}`;
  }
  return req;
});

export default grapeVineAPI;
