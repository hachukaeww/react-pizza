import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function FullPizza() {
  const {id} =useParams();
 
  const [pizza,setPizza]=React.useState();
  console.log(pizza)
    React.useEffect(()=>{
         async function fetchPizza(){
          try{
            const {data} = await axios.get("https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas/"+id);
            console.log(data)
            setPizza(data);
          }catch{
            alert("Ошибка при получении пиццы")
          }
            
        }
        fetchPizza()
    },[])
    if(!pizza){
      return <h1 className='container'>Загрузка ....</h1>
    }
  return (
    <div className="pizza-block">
    <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
    <h4 className="pizza-block__title">{pizza.name}</h4>
    {/* <div className="pizza-block__selector"></div> */}
      </div>
  )
}

export default FullPizza;