import React, { Component } from 'react'

class Logout extends Component {
    constructor(props) {
        super(props)
    
        sessionStorage.removeItem("emp_id");
        sessionStorage.removeItem("org_id");
        sessionStorage.removeItem("role_id");
        
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Logout
