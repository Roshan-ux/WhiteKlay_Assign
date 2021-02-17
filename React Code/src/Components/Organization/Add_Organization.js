import React, { Component } from 'react'
import LoggedIn from '../../Navbar/LoggedIn'

class Add_Organization extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             size_of_org_unit:'',
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
            org_id:0,
            name:this.state.name,
            size_of_org_unit:this.state.size_of_org_unit,
            description:thia.state.description
        }
        APIServices.addEmployee(data)
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
                            <h2>Add Organization</h2>
                            <form onSubmit={this.handleAdd} ref="recipeform">
                                
                                <div className="mb-3">
                                    <label className="form-lable">Organization Name :</label><br />
                                    <input required type="text" ref="title" value={this.state.name} onChange={this.changeHandler} name="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable">Organization Unit Size :</label><br />
                                    <input required type="text" ref="title" value={this.state.size_of_org_unit} onChange={this.changeHandler} name="size_of_org_unit" className="form-control" />
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

export default Add_Organization
