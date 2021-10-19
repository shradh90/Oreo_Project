import React, { useEffect } from "react";
import './productCard.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard(props){
    const {product1} = props
    useEffect(() => { console.log( product1.productImage )})
    const takeClickEvent = (e) => {
        console.log(e.target.id)
        console.log(props)
        props.ProductDetailsDisplay(e.target.id)
    }
    let listenToProductDetail = () =>{
        props.listenToProductDetail(product1.id)
        
    }

    return (
      
            <div className = "product"  onClick = {takeClickEvent} id = {product1.id}   >
                <div className = "image "  > <img className ="picture" src= {`${product1.MainImg}`}  alt = ""  /> 
                <div className = "boxes">< AddBoxIcon  /> <ShoppingCartIcon /></div>
                 </div>
                <div className = "headding" onClick= {listenToProductDetail}  >  {product1.name} </div>
                <div className = "prize"> 
                 <div className = "prize1" > {product1.Price}</div>    
                 <div className = "prize2">   {product1.DiscountedPrice}  </div> 
                 </ div>

            </div>
      
    )
}
export default ProductCard