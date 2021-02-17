import React, { Component } from 'react'
import APIServices from '../../APIServices'

class EmployeeDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             organization:'',
             role:''
        }
    }
    componentDidMount(){
        let id = sessionStorage.getItem("emp_id");
        if(id!=null){
        APIServices.getEmployeeDetails(id)
        .then( res =>{
            let data = res.data
            if(res.status===200){
                this.setState({
                    name:data.emp_name,
                    email:data.email,
                    organization:data.organization,
                    role:data.role
                })
            }
        })
        .catch(error =>{
            console.log(error)
            alert("Server side problem")
        })
        }

    }
    
    render() {
        return (
            <div>
                <LoggedIn />
                <div>
                    <label>Employee Name : </label>
                    <h4>{this.state.name}</h4>
                </div>
                <div>
                    <label>Email : </label>
                    <h4>{this.state.email}</h4>
                </div>
                <div>
                    <label>Organization : </label>
                    <h4>{this.state.organization}</h4>
                </div>
                <div>
                    <label>Role : </label>
                    <h4>{this.state.role}</h4>
                </div>
            </div>
        )
    }
}

export default EmployeeDetails
