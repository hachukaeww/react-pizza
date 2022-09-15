import logo from "./logo.svg";
import "./scss/app.scss";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Sort from "./Components/Sort";
import Pizzablock from "./Components/Pizzablock";
import React from "react";
function App() {
  const [PizzaItems, setPizzaItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas").then((res) =>
      res.json()
    ).then((arr)=>{
      setPizzaItems(arr);
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
            {PizzaItems.map((pzsitem) => (
              <Pizzablock key={pzsitem.id} {...pzsitem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
