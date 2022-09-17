import "./scss/app.scss";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";



function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
        <Routes>
         <Route path="/" element = { <Home/>} /> 
         <Route path="/Cart" element = { <Cart/>} />
         <Route path="*" element = { <NotFound/>} />
          </Routes>
      
        </div>
      </div>
    </div>
  );
}

export default App;
