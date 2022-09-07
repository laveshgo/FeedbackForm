import axios from 'axios';

class DataService {

    dashboardCreatedByForms (user_id){
        // console.log("created by formss");
        return axios.get(`http://localhost:5050/profilepage?user_id=${user_id}`)
    }

    viewResult (form_id){
        return axios.get (`http://localhost:5050/viewreport?form_id=${form_id}`)
    }

    viewResponse (response_id){
        return axios.get(`http://localhost:5050/viewresponse?response_id=${response_id}`)
    }

    
}

export default new DataService() 