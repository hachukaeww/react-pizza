import "./scss/app.scss";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import React from "react";




function App() {
  const [SearchValue,setSearchValue]=React.useState("");


  return (
    <div className="wrapper">
      <Header SearchValue={SearchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <div className="container">
        <Routes>
         <Route path="/" element = { <Home SearchValue={SearchValue}/>} /> 
         <Route path="/Cart" element = { <Cart/>} />
         <Route path="*" element = { <NotFound/>} />
          </Routes>
      
        </div>
      </div>
    </div>
  );
}

export default App;
