import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LoggedIn from '../../Navbar/LoggedIn'

class Org_List extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             orgList:[]
        }
    }

    componentDidMount(){
        APIServices.getOrgList()
        .then( res =>{
            if(res.status===200){
                this.setState({
                    orgList:res.data
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
    
    seeDetails (id,e){
        sessionStorage.setItem("org_id",id);
        // this.props.history.push();
    }
    delete(id,e){
        APIServices.deleteOrg(id)
        .then( res =>{
            if(res.status===200){
                alert("Organization Deleted Successfully")
            }
        })
        .catch(error =>{
            console.log(error)
            alert("Server side problem")
        })
    }
    render() {
        const list=this.state.orgList
        return (
            <div>
            <LoggedIn />
            <h1>Organization List</h1>
            <NavLink exact to='/add_org' className="btn btn-primary" >Add New Organization</NavLink>
            <div className="container">
                    <table>
                        <tbody>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Organization List</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                {
                                    list == null ? null
                                        : list.map((Org, i) => {
                                            return <tr key={i}>
                                                <td style={{ fontWeight: "bold" }}>{i + 1}</td>
                                                <td>
                                                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                                                        {Org.name}
                                                    </p>
                                                </td>
                                                <td>
                                                    <button onClick={(e) => this.seeDetails(Org.org_id, e)} className="btn btn-primary">Click To See</button>
                                                    <button onClick={(e) => this.delete(Org.org_id, e)} className="btn btn-primary">Delete</button>

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

export default Org_List
