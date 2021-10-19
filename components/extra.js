import React from "react";
import './extra.css'
 



// const projects = [{
//     photo:[{firstProjectPhoto},{secondProjectPhoto},{thirdProjectPhoto}],
//     },
//     {
//     text:["Project number one", "Project number two", "Project number 3"],
//     }];


    const products = [{ photo : "../pic/prod1" , text : "prod1" }, { photo : "asd" , text : "prod2" },
     { photo : "asd" , text : "prod3" }, { photo : "prod4" , text : "prod5" },{ photo : "prod6" , text : "prod7" },
    { photo : "asd" , text : "prod8" },{ photo : "asd" , text : "prod9" }, { photo : "asd" , text : "prod10" },
    { photo : "asd" , text : "prod11" }, { photo : "asd" , text : "prod12" }]



class Extra extends React.Component {
    render() {
        return (
            <div className="text-center" id="listOfProjects">
                
                {products.map(e => 
                <div>
                    <img src = {e.photo} /> 
                    <div> {e.text} </div>
                </div>
                )   
                }
                
            </div>
        );
    }
}

export default Extra