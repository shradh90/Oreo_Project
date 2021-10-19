import React from "react";
import Header from "./header";
import NavBar from "./navbar";
import './dashboard.css'
import ProductDisplay from "./ProductDisplay/productDisplay";
import ProductCard from "./ProductCard/productCard";
import ProductList from "./productList";
import ProductDetails from "./ProductDetails";


class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isClick : "false" ,
            width: "0%",
            dashbordWidth: "100%",
            viewContainer: "productDisplay",
            productID : 0,
            
        }
    }

     listenToHeader = (data) => {
         console.log(data)
        if (data == true){
            this.setState({width:"15%" , dashbordWidth: "85%"}) 
        } else  if(data == false){
            this.setState({width:"0%", dashbordWidth: "100%"}) 
        } 
    }
    listenToProductDisplay = (data) => {
        console.log(data)
    }
    listenToNavbar = (data) => {
       this.setState ({
        viewContainer : data
       })
    }
    
    listenToProductDetail = (id) =>{
        console.log(id)
   
        this.setState ({
            viewContainer : "ProductDetail",
            productID : id
            
           })
           console.log(id)
    }
    
    render(){
        console.log(this.state.productID)
        return(
        <div className = "DashboardMainContainer" >
            <div className="Navbar" style = {{width: this.state.width, height:"100%"}}>
                <NavBar value = {this.listenToNavbar} />
                 </div>
            <div className = "DashbordView" style = {{width: this.state.dashbordWidth, height:"100%"}}>
                <div className = "headerContainer">
                <Header listenToHeader = {this.listenToHeader} />
                
                </div>
                <div className = "viewContainer">
                    {
                        this.state.viewContainer == "ProductDetail" ? <ProductDetails  productID = {this.state.productID} /> : this.state.viewContainer == "ProductList" ? 
                        <ProductList /> : <ProductDisplay listenToProductDisplay = {this.listenToProductDisplay}  listenToProductDetail = {this.listenToProductDetail}/>
                    }
                   </div>
            </div>
        </div>
        )
    }
}
export default Dashboard