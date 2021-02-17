import React, { Component } from 'react'
import APIServices from '../../APIServices'
import LoggedIn from '../../Navbar/LoggedIn'

class AddEmployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             emp_name:'',
             email:'',
             role:'',
             organization:''
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleAdd = (e) =>{
        let data ={
            emp_id:0,
            emp_name:this.state.emp_name,
            email:this.state.email,
            role:this.state.role,
            organization:this.state.organization
        }
        APIServices.addEmployee(data)
        .then( res =>{
            if(res.status===200){
                alert("Employee Added SuccessFully");
            }
            this.props.history.push('/');
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
                            <h2>Add Employee</h2>
                            <form onSubmit={this.handleAdd} ref="recipeform">
                                
                                <div className="mb-3">
                                    <label className="form-lable">Employee Name :</label><br />
                                    <input required type="text" ref="title" value={this.state.emp_name} onChange={this.changeHandler} name="emp_name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable">Email ID :</label><br />
                                    <input required type="text" ref="title" value={this.state.email} onChange={this.changeHandler} name="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable">Role :</label><br />
                                    <input required type="text" value={this.state.role} onChange={this.changeHandler} name="role" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable">Organization :</label><br />
                                    <input required type="text" value={this.state.organization} onChange={this.changeHandler} name="organization" className="form-control"></input>
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

export default AddEmployee
