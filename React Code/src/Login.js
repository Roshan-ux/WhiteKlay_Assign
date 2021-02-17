import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import APIServices from './APIServices'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:'',
            password:'',
            isLogged:false
        }
    }
    
    //Changing State
    changeHandler(e){
        this.setState({
        [e.target.name]:e.target.value
        })
    }

    checkLog = (e) =>{
        e.preventDefault();
        let Idpass = {
            email:this.state.email,
            password:thia.state.password
        }
        
        APIServices.checkLogin(Idpass)
        .then(res =>{
            console.log(res.data)
            if(res.data==="Match"){
                //If Admin verified Generating Token to Show Proper Navbars
                sessionStorage.setItem("log_token",true);

                //updating State to Redirect on home component
                this.setState({
                    isLogged:true
                })
                this.props.history.push('/')
            }
            else{
                //Redirecting to login Page if Admin Not verified
                alert("Please Enter Correct Email and Password")
                this.props.history.push('/')
            }
        })
        .catch(error =>{
            console.log(error)
            alert("Server side problem")
        })
    }
    
    render() {
        
            if(this.state.isLogged){
                return <Redirect to="/" />
            }
            
            return (
                <div className="container">
                    <div className="container contact_div">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                            <h3 className="pb-2">Admin Login</h3>
                                <form onSubmit={this.checkLog} >
    
                                    <div className="mb-3">
                                        <label className="form-lable">Email :</label><br />
                                        <input required type="text" name="email" value={this.state.email}
                                            onChange={(e)=>this.changeHandler(e)} className="form-control" /><br />
                                    </div>
    
                                    <div className="mb-3">
                                        <label className="form-lable">Password :</label><br />
                                        <input required type="password" name="password" value={this.state.password}
                                            onChange={(e)=>this.changeHandler(e)} className="form-control" /><br />
                                    </div>
    
                                    <button type="submit"  className="btn btn-primary" >Login</button><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        
    }
}

export default Login
