import React from "react";
import Categories from "../Components/Categories";
import Sort, { sortList } from "../Components/Sort";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Pizzablock from "../Components/PizzaBlock/Pizzablock";
import { SearchContext } from "../App";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slice/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PaginationReact from "../Components/Pagination/Pagination";
import qs from "qs";
import { useNavigate } from "react-router-dom";

function Home() {
  const activeSort = useSelector((state) => state.filter.sort);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const CurrentPage = useSelector((state) => state.filter.currentPage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { SearchValue } = React.useContext(SearchContext);
  const [PizzaItems, setPizzaItems] = React.useState([]);
  const [IsLoading, setIsLoading] = React.useState(true);

  const category = categoryId > 0 ? `category=${categoryId}` : "";


  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas?${category}&page=${CurrentPage}&limit=8&sortBy=${activeSort.sortProperty}&order=desc${search}`
      )
      .then((res) => {
        setPizzaItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, activeSort, SearchValue, CurrentPage]);
  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: activeSort.sortProperty,
      categoryId,
      CurrentPage,
    });

    navigate(`?${queryString}`);
  }, [categoryId, activeSort, CurrentPage]);
  const onChangeCurrentPage = (num) => {
    dispatch(setCurrentPage(num));
  };
  const search = SearchValue ? `&search=${SearchValue}` : "";
  const pizzas = PizzaItems.map((items, index) => (
    <Pizzablock key={index} {...items} />
  ));
  const OnChangeCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={OnChangeCategoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{IsLoading ? skeletons : pizzas}</div>
      <PaginationReact onChangeCurrentPage={onChangeCurrentPage} />
    </>
  );
}

export default Home;
