import React, { Component } from 'react'
import LoggedIn from '../../Navbar/LoggedIn';

class RoleDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             role:'',
             description:''
        }
    }
    componentDidMount(){
        let id = sessionStorage.getItem("role_id");
        if(id!=null){
        APIServices.getRoleDetails(id)
        .then( res =>{
            let data = res.data
            if(res.status===200){
                this.setState({
                    role:data.role_name,
                    description:data.description
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
                    <label>Role : </label>
                    <h4>{this.state.role}</h4>
                </div>
                <div>
                    <label>Description : </label>
                    <h4>{this.state.description}</h4>
                </div>
            </div>
        )
    }
}

export default RoleDetails
