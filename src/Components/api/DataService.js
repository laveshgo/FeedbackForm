import axios from 'axios';

class DataService {

    dashboardCreatedByForms (user_id){
        console.log("created by formss");
        return axios.get("http://localhost:5050/profilepage")
    }

    
}

export default new DataService() 