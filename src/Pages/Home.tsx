import React from "react";
import Categories from "../Components/Categories";
import Sort, { sortList } from "../Components/Sort";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Pizzablock from "../Components/PizzaBlock/Pizzablock";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slice/filter/filterSlice";
import { selectFilter } from "../redux/slice/filter/selectors";

import { useSelectorPizza } from "../redux/slice/pizza/selectors";
import { fetchPizzas } from "../redux/slice/pizza/pizzaSlice";
import { useSelector, useDispatch } from "react-redux";

import PaginationReact from "../Components/Pagination/Pagination";
import qs from "qs";
import { useNavigate, Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";
import NotFoundBlock from "../Components/NotFoundBLock";
import { useAppDispatch } from "../redux/store";

function Home() {
  const { sort, categoryId, currentPage, SearchValue } =
    useSelector(selectFilter);
  const { pizzaItems, status } = useSelector(useSelectorPizza);
  const SortBy = sort.sortProperty

  const IsSearch = React.useRef(false);
  const IsMounted = React.useRef(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const category = categoryId > 0 ? `category=${categoryId}` : "";

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
    //@ts-ignore     
      dispatch(setFilters({ ...params, sort}));
      IsSearch.current = true;
    }
  }, []);

  const search = SearchValue ? `&search=${SearchValue}` : "";

  const fetchPizza = async () => {
   
    dispatch(fetchPizzas({ SortBy, category, currentPage:String(currentPage), search }));
  };

  React.useEffect(() => {
    if (!IsSearch.current) {
      fetchPizza();
    }
    IsSearch.current = false;

    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, SearchValue, currentPage]);

  React.useEffect(() => {
    if (IsMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    IsMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  const onChangeCurrentPage = (num: number) => {
    dispatch(setCurrentPage(num));
  };

  const pizzas = pizzaItems.map((items, index: number) => (
    <Pizzablock key={index} {...items} />
  ));
  const OnChangeCategoryId =React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  },[]); 
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={OnChangeCategoryId} />
        <Sort sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <NotFoundBlock />
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <PaginationReact onChangeCurrentPage={onChangeCurrentPage} />
    </>
  );
}

export default Home;
