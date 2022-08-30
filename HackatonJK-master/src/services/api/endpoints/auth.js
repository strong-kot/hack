import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/register/", data),
  login: (data) => axios.post("/login/", data),
  getProfile: () => axios.get("/me/"),
  getAppartments: () => axios.get("/user/apartments"),
  getRecomendation:() => axios.get("/user/apartments/recommendations"),
  getResidential:() => axios.get("/residentialComplexes"),
  getDate: () => axios.get("/requests"),
  updateToken: (data) => axios.post("/token/refresh/", data),

};

export default endpoints;
