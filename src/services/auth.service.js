import axios from "axios";

const API_URL = "https://api.dvt.theyolostudio.com/auth/";

class AuthService {
  login(username, password, email) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
        email,
      })
      .then((response) => {
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, first_name, last_name) {
    return axios.post(API_URL + "registration", {
      username,
      password,
      first_name,
      last_name,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
