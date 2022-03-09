import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";

function Home({ items }) {
  // console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => console.log(item)}
          items={["Мясная", "Вегетарианская", "Гриль", "Острая", "Закрытая"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
