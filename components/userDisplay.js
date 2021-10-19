import "./userDisplay.css";
import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { breakpoints } from "@mui/system";

class UserDisplay extends React.Component {
  render() {
    return (
      <div className="userContainer">
        <div className="userHeader">
            <div className = "userlogo">
              <img className ="image1" src= "https://thememakker.com/templates/oreo/html/assets/images/profile_av.jpg" alt = ""  />  </div>
              <div className = "userHeader1">
                  <div className = "text1">Michael</div>
                  <div className = "text2">UI Ux designer</div>
              </div>
                  <div className = "logo2">
                <div className = "logo21"> <FacebookIcon/>  </div>
                <div className = "logo22"> <TwitterIcon />  </div> 
                <div className= "logo23" > <InstagramIcon /> </div> 
            </div>
        </div>
        <div className="userMidContainer">


            <div className = "mid1 ">750 Folsom Ave, Suite 600  San Fransisco CAD 94107 </div>
            <div className = "mid8">
                 <div className = "mid81 "> Following </div> 
                 <div className = "mid82 ">Follower </div> 
                 <div className = "mid83  ">Post </div>
            </div>
            <div className = "mid9">
                 <div className = "mid91 ">  324k</div> 
                 <div className = "mid92  "> 13k</div> 
                 <div className = "mid93  ">234</div>
            </div>



            <div className = "mid2 border  "  > Email Adress  <br /> michael@gmail.com </div>
            <div className = "mid3 border "  >phone Number: +2022-555-0197</div>
            <div className = "mid4 border  "> PhotoShop</div>
            <div className = "mid5 border   ">WordPress</div>
            <div className = "mid6 border  ">HTML 5</div>
            <div className = "mid7 border ">Angular</div>
          
           
        </div>
      </div>
    );
  }
}
export default UserDisplay;
