import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Pizzablock from "../Components/PizzaBlock/Pizzablock";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slice/filterSlice";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import PaginationReact from "../Components/Pagination/Pagination";




function Home() {
  const activeSort = useSelector(state=>state.filter.sort)
  const categoryId=useSelector((state)=>state.filter.categoryId)
  const dispatch = useDispatch();


  const {SearchValue,setSearchValue}=React.useContext(SearchContext)
  const [PizzaItems, setPizzaItems] = React.useState([]);
  const [IsLoading, setIsLoading] = React.useState(true);
  const [CurrentPage, setCurrentPage] = React.useState(1);
  console.log(CurrentPage)

  React.useEffect (() => {
    setIsLoading(true);
 
    axios.get(
        `https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }page=${CurrentPage}&limit=4&sortBy=${activeSort.sort}&order=desc${search}`
      ).then((res)=>{
        setPizzaItems(res.data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0);
  }, [categoryId, activeSort,SearchValue,CurrentPage]);
  const search = SearchValue ?`&search=${SearchValue}`:"";
  const pizzas=PizzaItems.map((items, index) => (
    <Pizzablock key={index} {...items} />
  ));
  const OnChangeCategoryId=(id)=>{
    dispatch(setCategoryId(id));
  }
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={OnChangeCategoryId}
        />
        <Sort  />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {IsLoading
          ?skeletons
          :pizzas}
      </div>
      <PaginationReact onChangePage={(number)=>setCurrentPage(number)}/>
  </>
     
     
   
  );
}

export default Home;
