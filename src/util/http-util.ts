import axios from "axios";

export default axios.create({
  baseURL: "https://gitlab.com/clean-kitchen-home-tasks/frontend-task/-/raw/main/",
  withCredentials: false,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});