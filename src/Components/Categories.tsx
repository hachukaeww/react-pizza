import React from "react";
type CategoriesPropsType={
  value:Number;
  onClickCategory:(index:number)=>void;
}

const Categories:React.FC<CategoriesPropsType>=({ value, onClickCategory })=> {
  let categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
