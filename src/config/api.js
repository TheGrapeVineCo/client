import axios from "axios";

// creates connection to Heroku
const grapeVineAPI = axios.create({
  baseURL: "http://localhost:4000"
});

grapeVineAPI.interceptors.request.use(request => {
  const token = sessionStorage.getItem("token")
  console.log(token)
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`
  }
  return request
})

export default grapeVineAPI;
