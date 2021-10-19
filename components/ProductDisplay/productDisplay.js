import React, { useEffect } from "react";
import ProductCard from "../ProductCard/productCard";
import "../ProductDisplay/productDisplay.css"
import {GetProductDetails} from '../../service/dataService'

function ProductDisplay(props){
    
    const[products,setproducts]=React.useState([])
    useEffect(() => {
        GetProductDetails()
        .then((data)=>{setproducts(data.data)})
    },[]) 
   let ProductDetailsDisplay = (data) => {
        console.log(data)
        props.listenToProductDetail(data)

   }
let listenToProductDetail = (id) =>{
    console.log(id)
    props.listenToProductDetail(id)
}


  
    const ProductList = products.map(product => <ProductCard ProductDetailsDisplay = {ProductDetailsDisplay} product1 = {product}  listenToProductDetail ={listenToProductDetail} />  )
    return <div className = "container">
        
        
        <div className = "product_container" > {ProductList} </div>
        </div>
      
}
export default ProductDisplay
