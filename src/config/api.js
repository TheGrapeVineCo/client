import axios from "axios";

// creates connection to Heroku
const grapeVineAPI = axios.create({

  // fetching API from local laptop
  baseURL: "http://localhost:4000",

  // fetching API from Heroku
  // baseURL: "https://grapevine-rails-api.herokuapp.com/",

  //This worked. Request headers maintain Auth Bearer token during login sessions for wine_listings pages.
  headers: {
    Authorization : sessionStorage.getItem("token")
    }
});

export default grapeVineAPI;
// Request interceptors for API calls

// This axios interceptors.request hasn't worked in storing jwt into sessionStorage.
// See codes above for storing jwt in sessionStorage instead.
// grapeVineAPI.interceptors.request.use(
//   config => {
//     const token = sessionStorage.getItem("token")
//     console.log(token)
//     if (token === !undefined)
//       config.headers["Authorization"] = sessionStorage.getItem("token");
//         return config;
//       },
//       error => {
//         return Promise.reject(error);
//       }
// );


// grapeVineAPI.interceptors.request.use((request) => {
//   const token = sessionStorage.getItem("token")
  
  // if (token === !undefined) {
  //   request.headers["Authorization"] = `Bearer ${token}`
  // }
//   return request
// })


