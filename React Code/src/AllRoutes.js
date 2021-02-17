import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddEmployee from './Components/Employee/AddEmployee';
import EmployeeList from './Components/Employee/EmployeeList';
import Add_Organization from './Components/Organization/Add_Organization';
import Org_List from './Components/Organization/Org_List';
import AddRoles from './Components/Roles/AddRoles';
import Role_List from './Components/Roles/Role_List';
import HomePage from './HomePage';
import Logout from './Logout';

class AllRoutes extends Component {

    render(){
        return(
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/add_org' component={Add_Organization} />
                <Route exact path='/employee_list' component={EmployeeList} />
                <Route exact path='/add_employee' component={AddEmployee} />
                <Route exact path='/role_list' component={Role_List} />
                <Route exact path='/add_role' component={AddRoles} />
                <Route exact path='/logout' component={Logout} />
            </Switch>
        )
    }
    
}

export default AllRoutes;