import React from "react";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TodayIcon from '@material-ui/icons/Today';
import MailIcon from '@material-ui/icons/Mail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FlagIcon from '@material-ui/icons/Flag';
import {ReactComponent as Midlogo} from "../pic/logo.svg";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import './header.css'

class Header extends React.Component{
    constructor(props){
        super()
        this.state = {
            openCloseNavbar : false
        }
    }
    sendDataToDashboard = () => {
        this.props.listenToHeader(!this.state.openCloseNavbar)
        this.setState({openCloseNavbar : !this.state.openCloseNavbar})
    }
    
    render(){
        return(
           <div className = "header">
                <div className = "headerItem1">
                    <div className = "icon11 ">
                    < Midlogo />
                    </div>
                    <div className = "icon12 ">
                        OREO
                    </div>
                </div>  

                <div className = "headerItem2 ">
                     <div  className = "icon21  "  >
                    <SwapHorizIcon onClick = {this.sendDataToDashboard} />
                    </div>
                    <div className = "icon22 ">
                    < TodayIcon />
                    </div>
                    <div className = "icon23  ">
                    < MailIcon />
                    </div>
                    <div className = "icon24 ">
                    <ContactPhoneIcon />
                    </div>
                    <div className = "icon25 ">
                    <NotificationsIcon />
                   </div>
                    <div className = "icon26">
                   < FlagIcon />
                    </div>
                </div> 
                <div className = "headerItem3">
                    <div className = "searchBar"  > 
                        < input className = "s1"  placeholder = "search" >
                        </ input>
                    </div>
                </div>
                <div className = "headerItem4">
                    <div className = "icon41">
                        <PowerSettingsNewIcon />
                    </div>
                    <div className = "icon42">
                        <SettingsApplicationsIcon />
                    </div>

                </div>
            </div> 
        )
    }
}
export default Header