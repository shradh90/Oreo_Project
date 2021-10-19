import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from '@mui/icons-material/Facebook';
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GridOnIcon from "@mui/icons-material/GridOn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import LockIcon from "@mui/icons-material/Lock";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import "./homeDisplay.css";
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function NestedList(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const setProductListView = () =>{
       props.listenToNestedList("ProductList") 
  }
  const setProductview = () =>{
       
    props.listenToNestedList("Product") 
  }
  const setProductDetailsView = () =>{
        
       props.listenToNestedList("ProductDetail") 
  }

  return (
      <div className= "headerHome">
         <div className="userHeader">
            <div className = "userlogo">
              <img className ="image1" src= "https://thememakker.com/templates/oreo/html/assets/images/profile_av.jpg" alt = ""  />  </div>
              <div className = "userHeader1">
                  <div className = "text1">Michael</div>
                  <div className = "text2">UI Ux designer</div>
              </div>
                  <div className = "logo2">
                <div className = "logo21"> < FacebookIcon /> </div>
                <div className = "logo22"> <TwitterIcon />  </div> 
                <div className= "logo23" >< InstagramIcon /> </div> 
            </div>
        </div>

    <List style = {{overflow:"hidden"}}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
     
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="App" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Ecommerce" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            < ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary= "Product" onClick = {setProductview} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            < ArrowRightAltIcon />
            
            </ListItemIcon> 
            <ListItemText primary="Product List " onClick = {setProductListView} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            < ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Product Details" onClick = {setProductDetailsView} />
          </ListItemButton>


        </List>
      </Collapse>



      <ListItemButton>
        <ListItemIcon>
          <SwapCallsIcon />
        </ListItemIcon>
        <ListItemText primary="UserInterface(UI)" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon></ListItemIcon>
        
      </ListItemButton>
      <div className="forms1">--FORMS,CHARTS,TABLES</div>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="FORMS" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <GridOnIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AspectRatioIcon />
        </ListItemIcon>
       
        <ListItemText primary="Widgets" />
      </ListItemButton>
      <div className="forms1">--EXTRA COMPONENTS</div>
      <ListItemButton>
        <ListItemIcon>
          <LockIcon />
        </ListItemIcon>
        <ListItemText primary="Authentications" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FileCopyOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Sample Pages" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Maps" />
      </ListItemButton>
    
      <div className="forms1"> --Extra</div>
      <div className="forms1"> TRAFFIC THIS MONTH</div>
      <div className="forms1"> SERVER LOAD</div>
      
      
        </List>
        </div>
      
  );
}
export default NestedList;
