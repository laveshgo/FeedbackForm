import axios from 'axios';

class DataService {

    dashboardCreatedByForms (user_id){
        return axios.get('/profilepage?user_id=1')
    }

 
    
}

export default new DataService()