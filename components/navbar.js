import React from "react";
import "./navbar.css"
import UserDisplay from "./userDisplay";
import NestedList from "./homeDisplay";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            choseHomeUser: true
        }

    }
    setNav = () =>{
        this.setState({choseHomeUser:false})
    }
    setNav1 = () => {
        this.setState({choseHomeUser:true})
    }
    listenToNestedList = (data) => {
       this.props.value(data)
    }
    render(){
        return(
            <div className = "navbarContainer">

                <div className = "navbarButtons "> 
                <button className = "home" onClick = {this.setNav}> <HomeIcon  /> Oreo </button>
                <button className = "user" onClick = {this.setNav1} > <  PersonIcon /> User </button>
                </div>
                <div className = "navbarContent ">
                    {this.state.choseHomeUser ?< UserDisplay />: <NestedList listenToNestedList = {this.listenToNestedList} />}
                </div>
                
                
                
                
                
                
                
                
                
                 </div>
        )
    }
}
export default NavBar