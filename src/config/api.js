import axios from "axios";

// creates connection to Heroku
const grapeVineAPI = axios.create({
  baseURL: "https://grapevine-rails-api.herokuapp.com",
  // baseURL: "http://localhost:4000",
});

export default grapeVineAPI;
