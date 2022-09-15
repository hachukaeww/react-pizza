import logo from "./logo.svg";
import "./scss/app.scss";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Sort from "./Components/Sort";
import Pizzablock from "./Components/Pizzablock";
import pizzasitems from "./db.json";

function App() {
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
            {pizzasitems.map((pzsitem) => (
              <Pizzablock key={pzsitem.id} {...pzsitem} />
            ))}
            {/* title={pzsitem.title} image={pzsitem.imageUrl} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
