import axios from "axios";

// creates connection to Heroku
const grapeVineAPI = axios.create({

  // fetching API from local laptop
  baseURL: "http://localhost:4000",

  // fetching API from Heroku
  // baseURL: "https://grapevine-rails-api.herokuapp.com/",

  // Request headers maintain Auth Bearer token during login sessions for wine_listings pages.
  headers: {
    Authorization : sessionStorage.getItem("token")
    }
});

export default grapeVineAPI;
