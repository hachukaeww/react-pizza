import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Pizzablock from "../Components/PizzaBlock/Pizzablock";

function Home() {
  const [PizzaItems, setPizzaItems] = React.useState([]);
  const [IsLoading, setIsLoading] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: "популярности",
    sort: "rating",
  });
  

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas?category=" +
        activeIndex
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzaItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeIndex, activeSort]);
  return (
    <>
      <div className="content__top">
        <Categories
          value={activeIndex}
          onClickCategory={(id) => setActiveIndex(id)}
        />
         <Sort value={activeSort} onClickSort={(id) => setActiveSort(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {IsLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : PizzaItems.map((items, index) => (
              <Pizzablock key={index} {...items} />
            ))}
      </div>
    </>
  );
}

export default Home;
