import React, { Component } from 'react'
import LoggedIn from '../../Navbar/LoggedIn'

class AddRoles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             role_name:'',
             description:''
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleAdd = (e) =>{

        let data ={
            role_id:0,
            role_name:this.state.role_name,
            description:this.state.description
        }
        APIServices.addRoles(data)
        .then( res =>{
            if(res.status===200){
                alert("Employee Added SuccessFully");
            }
            this.props.history.push('/')
        })
        .catch(error =>{
            console.log(error)
            alert("Server side problem");
        })
    }
    render() {
        return (
            <div>
            <LoggedIn />
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <h2>Add Roles</h2>
                            <form onSubmit={this.handleAdd} ref="recipeform">
                                
                                <div className="mb-3">
                                    <label className="form-lable">Role Name :</label><br />
                                    <input required type="text" ref="title" value={this.state.role_name} onChange={this.changeHandler} name="role_name" className="form-control" />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-lable">Description :</label><br />
                                    <textarea required value={this.state.description} onChange={this.changeHandler} name="description" className="form-control"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddRoles
