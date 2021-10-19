import React, { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './productList.css'
import {GetProductDetails} from '../service/dataService';


function ProductList() {
  const[products,setproducts]=React.useState([])
  useEffect(() => {
      GetProductDetails()
      .then((data)=>{setproducts(data.data)})
      
  },[]) 

  
  return (
    <div className ="listContainer" >
        <div className = "headerlist">
             <div className = "headerList1">Product List</div>
             <div className = "headerList2">welcome to Oreo</div>
        </div>
        
      <table class="table" style = {{padding:"10px", width:"90%" , border:"5px solid white",alignSelf:"center", position:"relative",bottom:"30px", backgroundColor:"white" }}  >
        <thead class="thead-dark"    >
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Detail</th>
            <th scope="col">Amount</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => 
            <tr>
              <th><img src={`${product.MainImg}`} alt="" width="50" height="50"></img> </th>
              <td>{product.name}</td>
              <td><font color="gray">{product.SmallDesc}</font> </td>
              <td>{product.Price}</td>
              <td><font color="green">{product.StockStatus}</font></td>
              <td><DeleteIcon  />  <EditIcon /> </td>
            </tr>
   )
          }
        {/* <tr>
            <th><img src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/1.png" alt="" width="50" height="50"></img> </th>
            <td>Simple Block Clock</td>
            <td><font color="gray">randomised worde even slightly believable</font> </td>
            <td>$16.00</td>
            <td><font color="green">In Stock</font></td>
            <td><DeleteIcon  />  <EditIcon /> </td>
          </tr>

          <tr>
            <th ><img src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/10.png" alt="" width="50" height="50"></img> </th>
            <td>Brone Candle</td>
            <td><font color="gray">  It is a long established will be distracted</font> </td>
            <td>$15.00</td>
            <td><font color="yellow">Low Stock</font></td>
            <td><DeleteIcon  />  <EditIcon /></td>
          </tr>
          <tr>
            <th > <img src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/11.png" alt="" width="50" height="50"></img></th>
            <td>Wood Simple Clock</td>
            <td><font color="gray"> There passages of Loem Ipsum available </font>  </td>
            <td>$16.00</td>
            <td><font color="yellow">Low Stock</font></td>
            <td><DeleteIcon  />  <EditIcon /></td>
          </tr>
          <tr>
            <th><img src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/5.png" alt="" width="50" height="50"></img> </th>
            <td>Unero Small Bag</td>
            <td><font color="gray"> It is a long established fact that a distracted</font> </td>
            <td>$23.00</td>
            <td><font color="red">Out Of Stock</font></td>
            <td><DeleteIcon  />  <EditIcon /></td>
          </tr>
          <tr>
            <th ><img src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/6.png" alt="" width="50" height="50"></img> </th>
            <td>Simple Block Clock</td>
            <td><font color="gray"> Contrary to popular belief, simply random text</font> </td>
            <td>$16.00</td>
            <td><font color="green">In Stock</font></td>
            <td><DeleteIcon  />  <EditIcon /></td>
          </tr>
          <tr>
            <th > <img src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/2.png" alt="" width="50" height="50"></img> </th>
            <td>Brone Lamp Glasses</td>
            <td><font color="gray"> All the Lorem Ipsum generators on predefined chunks</font> </td>
            <td>$12.00</td>
            <td><font color="green">In Stock</font></td>
            <td><DeleteIcon  />  <EditIcon /></td>
          </tr>
          <tr>
            <th > <img src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/3.png" alt="" width="50" height="50"></img></th>
            <td>Simple Block Clock</td>
            <td><font color="gray">   established fact that a be distracted </font></td>
            <td>$22.00</td>
            <td><font color="red">Out Of Stock</font></td>
            <td><DeleteIcon  />  <EditIcon /></td>
          </tr>
           */}
        </tbody>
      </table>
    </div>
  );
}
export default ProductList;
