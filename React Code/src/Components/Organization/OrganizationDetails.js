import React, { Component } from 'react'

class OrganizationDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             size:'',
             description:''
        }
    }
    componentDidMount(){
        let id = sessionStorage.getItem("org_id");
        if(id!=null){
        APIServices.getOrgDetails(id)
        .then( res =>{
            let data = res.data
            if(res.status===200){
                this.setState({
                    name:data.name,
                    size:data.size_of_org_unit,
                    description:data.description,
                    
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
                    <label>Organization : </label>
                    <h4>{this.state.name}</h4>
                </div>
                <div>
                    <label>Size : </label>
                    <h4>{this.state.size}</h4>
                </div>
                <div>
                    <label>Description : </label>
                    <h4>{this.state.description}</h4>
                </div>
                
                
            </div>
        )
    }
}

export default OrganizationDetails
