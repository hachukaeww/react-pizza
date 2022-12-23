import "./scss/app.scss";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import { useContext } from "react";
import React from "react";


export const SearchContext=React.createContext("");


function App() {
  const [SearchValue,setSearchValue]=React.useState("");


  return (
    <SearchContext.Provider value={{SearchValue,setSearchValue}}>
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
        <Routes>
         <Route path="/" element = { <Home />} /> 
         <Route path="/Cart" element = { <Cart/>} />
         <Route path="*" element = { <NotFound/>} />
          </Routes>
        
      
        </div>
      </div>
    </div>
    </SearchContext.Provider>
  );
}

export default App;
