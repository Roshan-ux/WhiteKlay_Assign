import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import APIServices from '../../APIServices'
import LoggedIn from '../../Navbar/LoggedIn'

class Role_List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             role_list:[]
        }
    }
    componentDidMount(){
        APIServices.getRoleList()
        .then( res =>{
            if(res.status===200){
                this.setState({
                    role_list:res.data
                })
            }
            else{
                alert("An Error Occurred")
            }
        })
        .catch( error =>{
            console.log(error)
            alert("Server Side Problem")
        })
    }

    seeDetails(id,e){
        sessionStorage.setItem("role_id",id);
        // this.props.history.push();
    }

    delete(id,e){
        APIServices.deleteRole(id)
        .then( res =>{
            if(res.status===200){
                alert("ROle Deleted Successfully")
            }
        })
        .catch(error =>{
            console.log(error)
            alert("Server side problem")
        })
    }

    render() {
        const list = this.state.role_list
        return (
            <div>
            <LoggedIn />
                <h1>Roles</h1>
                <NavLink exact to='/add_role' className="btn btn-primary" >Add New Role</NavLink>
                <div className="container">
                    <table>
                        <tbody>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Roles</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                {
                                    list == null ? null
                                        : list.map((Role, i) => {
                                            return <tr key={i}>
                                                <td style={{ fontWeight: "bold" }}>{i + 1}</td>
                                                <td>
                                                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                                                        {Role.role_name}
                                                    </p>
                                                </td>
                                                <td>
                                                    <button onClick={(e) => this.seeDetails(Role.role_id, e)} className="btn btn-primary">Click To See</button>
                                                    <button onClick={(e) => this.delete(Org.org_id, e)} className="btn btn-primary">delete</button>

                                                </td>
                                            </tr>
                                        })
                                }
                            </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        )
    }
}

export default Role_List
