import axios from "axios";

const axiosConfig = {
  baseURL: "http://127.0.0.1:10001",
  timeout: 10000,
};

export default axios.create(axiosConfig);
