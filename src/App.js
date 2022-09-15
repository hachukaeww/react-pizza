import "./scss/app.scss";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Sort from "./Components/Sort";
import Pizzablock from "./Components/PizzaBlock/Pizzablock";
import React from "react";
import { Skeleton } from "./Components/PizzaBlock/Skeleton";
function App() {
  const [PizzaItems, setPizzaItems] = React.useState([]);
  const [IsLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas").then((res) =>
      res.json()
    ).then((arr)=>{
      setPizzaItems(arr);
      setIsLoading(false);
    })
  },[]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
       
            {
              IsLoading? [...new Array(6)].map((_,index)=>(<Skeleton key={index}/>)):PizzaItems.map((items,index)=><Pizzablock key={index} {...items}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
