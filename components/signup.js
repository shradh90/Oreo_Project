
import React  from "react";
import './signup.css'
import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import {FormControl,FormControlLabel,Checkbox,Button} from '@material-ui/core';
import {ReactComponent as Midlogo} from "../pic/logo.svg";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx = /^(?=.[A-Z])(?=.[a-z])(?=[^!@#$%^&+=][!@#$%^&+=][^!@#$%^&+=]$)(?=.*[0-9]).{8,}$/
const userNameRegEx = /^[A-Z]{1}[a-z]{2,}$/;


class Signup extends React.Component {
    
      
    constructor() {
        super()
        this.state = {
            userName: '',
            email: '',
            password: '',
            showPassword: false,

            
        }
    }

    
    takeUserName = event => {
        this.setState({
            userName: event.target.value
        })
    }

    

    takeEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    takePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    takeConfirmPassword = event => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    
    submit = () => {

        let userNameCheck = userNameRegEx.test(this.state.userName)
        let emailCheck = emailRegex.test(this.state.email)
        let passwordCheck = passwordRegEx.test(this.state.password)
       

        if (userNameCheck == true) {
            this.setState({
                errorUserName: false,
                helperTextUserName: ''
            })
        } else {
            this.setState({
                errorUserName: true,
                helperTextUserName: 'Incorrect input'
            })
        }

        

        if (emailCheck == true) {
            this.setState({
                errorEmail: false,
                helperTextEmail: ''
            })
        } else {
            this.setState({
                errorEmail: true,
                helperTextEmail: 'Incorrect input'
            })
        }

        if (passwordCheck == true) {
            this.setState({
                errorPassword: false,
                helperTextPassword: ''
            })
        } else {
            this.setState({
                errorPassword: true,
                helperTextPassword: 'Incorrect input'
            })
        }

      

      }
     

        render() {
            return (
                <div>
                <div className="signup-container"  >  
                   <div className="header1">
                        <div className="header1-1 ">
                                Oreo
                        </div>
                        <div className="header1-2  ">
                                <div className= "t1">Home
                                </div>
                                <div className="t2"> Search Result
                                </div>
                                <div className= "t3"> <TwitterIcon/>
                                </div>
                                <div className= "t4"> <FacebookIcon />
                                </div>
                                <div className="t5"> <InstagramIcon/>
                                </div>
                                <div className= "t6">< button className="signInButton">Sign in</button>
                                </div>
                                
                        </div>
                    </div>
                    <div className="body">
                        <div className="b1">
                            <div className="mid1 margin_bottom">
                                <Midlogo/>
                            </div>
                            <div className="mid2 margin_bottom">
                                Sign up
                            </div>
                            <div className="mid3 margin_bottom">
                                Register a new membership
                            </div>
                        </div>
                        <div className="b2">
                            <div className="m1 margin_bottom">
                              
                            <input onChange = {this.takeUserName} type = "text" placeholder = "Enter User Name" className ="formInput" />
                                
                            </div>
                            <div className="m2 margin_bottom">
                            <input onChange =  {this.takeEmail } type = "text" placeholder = "Enter Email" className ="formInput" />
                            </div>

                            <div className="m3 margin_bottom">
                                 <input onChange = {this.takePassword} type = "text" placeholder = "Password" className ="formInput" /> 
                                 </div>
                        </div>
                        <div className="b3">
                          
                        <div className="checkBox-container">
                                <input type="checkbox" id = "terms" className="checkbox"/>
                                <label for = "terms"> I read and Agree to the terms of usage </label>     
                            </div>
                        </div>

                        <div className="b4">
                        < button onClick={this.submit} className="signupButton">Sign Up</button>
                            
                        </div>
                    </div>
                    <div className= "footer">
                        < div className="section1">
                            <div className="f1">
                             CONTACT US
                            </div>
                            <div className="f2">
                                ABOUT US
                            </div>
                            <div className="f3">
                                FAQ
                            </div>
                        </div>
                        <div className="section2">
                            @2021 Designed By TheamMaker
                        </div>
                    </div>
             
        
                </div>
                </div>


    )
    }
    
 }   


export default Signup
