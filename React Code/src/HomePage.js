import React, { Component } from 'react';
import Org_List from './Components/Organization/Org_List';
import Login from './Login';
import LoggedIn from './Navbar/LoggedIn';
import NotLoggedIn from './Navbar/NotLoggedIn';

class HomePage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             logInfo:false
        }
    }

    static getDerivedStateFromProps(props,state){

        let logToken = sessionStorage.getItem("log_token");

        if(logToken==null){
            return {logInfo:false}
        }
        else{
            return{logInfo:true}
        }
    }
    
    render(){
        if(this.state.logInfo){
        return<div>
                    <NotLoggedIn />
                    <Login />
                </div>
        }
        else{
            return<div>
                <Org_List />
            </div>
        }
    }
}

export default HomePage;