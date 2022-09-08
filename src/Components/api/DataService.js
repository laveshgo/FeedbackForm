import axios from "axios";

class DataService {
  dashboardCreatedByForms(user_id) {
    return axios.get(`/profilepage?user_id=${user_id}`);
  }

  viewResult(form_id) {
    return axios.get(`http://localhost:5050/viewreport?form_id=${form_id}`);
  }

  viewResponse(response_id) {
    return axios.get(
      `http://localhost:5050/viewresponse?response_id=${response_id}`
    );
  }

  allUsers() {
    return axios.get(`/users`);
  }

  login() {
    return axios.post("/login");
  }
}

export default new DataService();
