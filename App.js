import './App.css';
import Signup from './components/signup';
// import signup from './components/signup';
import Extra from './components/extra'
import Signin from './components/signin';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';

import Greeting from './components/extra';
import NavBar from './components/navbar';
import Dashboard from './components/dashboard';
import productDisplay from './components/ProductDisplay/productDisplay';
import ProdList from './components/ProductDisplay/productDisplay';
import ProductDisplay from './components/ProductDisplay/productDisplay';
import UserDisplay from './components/userDisplay';
import NestedList from './components/homeDisplay';
import ProductList from './components/productList';
import ProductDetails from './components/ProductDetails';



import GetData from './components/getData';

function App() {
  return (
    <div className="App">
    
      <Dashboard /> 

     {/* <GetData /> */}
    
    </div>
  );
}

export default App;
