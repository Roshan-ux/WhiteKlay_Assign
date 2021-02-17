import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LoggedIn extends Component {
    render() {
        return (
            <div>
                <div className="Head">
                    <h1 style={{fontWeight:"bold", fontSize:"120%"}}>
                        Organization Administration App
                    </h1>
                </div>
                <div className="links">
                    <NavLink exact to="/" className="navlink" >Organization</NavLink>
                    <NavLink exact to="/employee_list" className="navlink" >Employee</NavLink>
                    <NavLink exact to="/role_list" className="navlink" >Roles</NavLink>
                    <NavLink exact to="/logout" className="navlink" >Logout</NavLink>
                </div>
            </div>
        )
    }
}

export default LoggedIn
