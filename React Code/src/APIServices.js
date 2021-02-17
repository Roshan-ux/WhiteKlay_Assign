import axios from 'axios';

class APIServices{

    //Login Admin 
    checkLogin(IdPass){
        return axios.post("http://localhost:8080/check_admin_log",IdPass);
    }

    getOrgList(){
        return axios.get("http://localhost:8080/get_rog_list");
    }

    getEmployeeList(){
        return axios.get("http://localhost:8080/get_emp_list");
    }

    getRoleList(){
        return axios.get("http://localhost:8080/get_role_list");
    }

    getRoleDetails(id){
        return axios.get("http://localhost:8080/get_role_details"+id);
    }
    getEmployeeDetails(id){
        return axios.get("http://localhost:8080/get_emp_details"+id);
    }
    getOrgDetails(id){
        return axios.get("http://localhost:8080/get_org_details"+id);
    }

    addEmployee(data){
        return axios.post("http://localhost:8080/add_emp",data);
    }
    addOrganization(data){
        return axios.post("http://localhost:8080/add_org",data);
    }
    addRole(data){
        return axios.post("http://localhost:8080/add_role",data);
    }

    deleteEmployee(id){
        return axios.delete(`http://localhost:8080/delete_emp/${id}`);
    }
    deleteOrg(id){
        return axios.delete(`http://localhost:8080/delete_org/${id}`);
    }
    deleteRole(id){
        return axios.delete(`http://localhost:8080/delete_role/${id}`);
    }
}

export default new APIServices();