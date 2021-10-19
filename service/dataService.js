import axios from "axios";

export const GetProductDetails = async function(){
  let resp = await axios.get('http://localhost:3000/products')
  return resp
}


