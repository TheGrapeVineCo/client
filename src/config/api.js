import axios from "axios";

// creates connection to Heroku
const grapeVineAPI = axios.create({
  baseURL: "https://grapevine-rails-api.herokuapp.com",
});

export default grapeVineAPI;
