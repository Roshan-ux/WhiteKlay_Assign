import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import APIServices from '../../APIServices'
import LoggedIn from '../../Navbar/LoggedIn'

class EmployeeList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            empList: []
        }
    }

    componentDidMount() {
        APIServices.getEmployeeList()
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        empList: res.data
                    })
                }
                else {
                    alert("AN error Occurred")
                }
            })
            .catch(error => {
                alert("Server Side problem")
            })
    }
    seeDetails(id,e){
        sessionStorage.setItem("emp_id",id)

    }

    delete(id,e){
        APIServices.deleteEmployee(id)
        .then( res =>{
            if(res.status===200){
                alert("Employee Deleted Successfully")
            }
        })
        .catch(error =>{
            console.log(error)
            alert("Server side problem")
        })
    }
    render() {
        const list = this.state.empList
        return (
            <div>
                <LoggedIn />
                <h1>Employee List</h1>
                <NavLink exact to='/add_employee' className="btn btn-primary" >Add New Employee</NavLink>
                <div className="container">
                    <table>
                        <tbody>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Employee Names</th>
                                <th>Action</th>
                                <th>Delete</th>
                            </tr>
                            <tr>
                                {
                                    list == null ? null
                                        : list.map((Employee, i) => {
                                            return <tr key={i}>
                                                <td style={{ fontWeight: "bold" }}>{i + 1}</td>
                                                <td>
                                                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                                                        {Employee.emp_name}
                                                    </p>
                                                </td>
                                                <td>
                                                    <button onClick={(e) => this.seeDetails(Employee.id, e)} className="btn btn-primary">Click To See</button>
                                                    <button onClick={(e) => this.delete(Employee.id, e)} className="btn btn-primary">Delete</button>

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

export default EmployeeList
