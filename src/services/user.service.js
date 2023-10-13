import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.dvt.theyolostudio.com/auth/employee/management/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }
  saveCSVData(formData) {
    return axios.post(API_URL, formData, { headers: authHeader() });
  }
  // getUserBoard() {
  //   return axios.get(API_URL + "user", { headers: authHeader() });
  // }
}

export default new UserService();
