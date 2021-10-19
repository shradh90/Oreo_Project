import React from "react";
import { GetProductDetails } from "../service/dataService";
import "./ProductDetails.css";

class ProductDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      choseButton: 1,
      choseImage: 1,
      productName : "",
      
    };
    console.log(this.props)
  }
  componentDidMount(){
   let id = this.props.productID
   let arr ;
   console.log(id)
    GetProductDetails()
        .then((data)=>{ 
          console.log(data.data)
          console.log(data.id)
           arr = data.data.filter(function(product){ 
            if(product.id == id){
              return product
            }
          }) 
        // this.setState({productName : arr[0].name})
        // this.setState({productName :  })
        console.log(arr[0])
        })
  }
  setButton1 = () => {
    this.setState({
      choseButton:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n \n There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    });
  };
  setButton2 = () => {
    this.setState({
      choseButton:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum by Cicero' are also reproduced in their exact original form, accompanied",
    });
  };
  setButton3 = () => {
    this.setState({
      choseButton:
        "WHERE DOES IT COME FROM? \n \n Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. \n\n Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    });
  };

  setImage1 = () => {
    this.setState({ choseImage: "https://thememakker.com/templates/oreo/html/assets/images/ecommerce/1.png" });
  };
  setImage2 = () => {
    this.setState({ choseImage: "https://thememakker.com/templates/oreo/html/assets/images/ecommerce/2.png" });
  };
  setImage3 = () => {
    this.setState({ choseImage: "https://thememakker.com/templates/oreo/html/assets/images/ecommerce/3.png" });
  };

  setImage4 = () => {
    this.setState({ choseImage: "https://thememakker.com/templates/oreo/html/assets/images/ecommerce/4.png" });
  };
  setImage5 = () => {
    this.setState({ choseImage5: "https://thememakker.com/templates/oreo/html/assets/images/ecommerce/5.png" });
  };
  
  render() {
    return (
      <div className="productDetailContainer">
        <div className="headerDetails">
          <div className="headerDetails1">Product Details</div>
          <div className="headerDetails2">welcome to Oreo</div>
        </div>

        <div className="allDetails">
          <div className="midDetails">
            <div className="imageDetails">
              <div className="imageDetails6">
                  <img className="picture" src={this.state.choseImage} alt="" />
                  </div>
                  
                <div className="imageDetails1">
                
                 <div className="imagebox">  <img className="image1 " src = "https://thememakker.com/templates/oreo/html/assets/images/ecommerce/1.png" onClick={this.setImage1}  /> </div>
                 <div className="imagebox">  <img className="image1" src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/2.png" onClick={this.setImage2}/>
                  </div>
                 <div className="imagebox"> <img className="image1" src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/3.png" onClick={this.setImage3}/> </div>
                 <div className="imagebox">  <img className="image1" src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/4.png" onClick={this.setImage4}/></div>
                 <div className="imagebox"> <img className="image1" src="https://thememakker.com/templates/oreo/html/assets/images/ecommerce/5.png" onClick={this.setImage5}/>
                </div>
              </div>
          
             </div>

            <div className="textDetails">
              
                <div className="textDetails1">
                  <div className="textheading"> {this.state.productName} simple clock </div>
                  <div className="textheading2">130</div>
                  <div className="textheading3">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p> 78% of buyers enjoyed this product! (23 votes)</p>
                  </div>
                </div>

                <div className="textDetails22"> sizes:    s m l xl</div>
                <div className="textDetails23"> 
                <div className="textDetails231"> <div className="color1">Color: </div> <div className="color2"></div>
                <div className="color3"></div> <div className="color4"></div>
                </div>
                 </div>

                <div className="textheading21">
                  <button className="textDetails24 "> add to cart</button>
                  <button className="textDetails25 "> like </button>
                </div>
              </div>
            </div>

          <div className="footerDetails">
              <div className="footerDetails1">
                <button className="Description buttons "onClick={this.setButton1}> Description </button>
                <button className="Review buttons" onClick={this.setButton2}> Review</button>
                <button className="About buttons" onClick={this.setButton3}> About</button>
              </div>

              <div className="footerDetails2"> {this.state.choseButton} </div>
           
            </div>
          
          
            </div>
          </div> 
       
      
    );
  }
}
export default ProductDetails;
