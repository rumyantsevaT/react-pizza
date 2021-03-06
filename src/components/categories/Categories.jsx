import React, { useState } from "react";

function Categories({ items, onClickItem }) {
  // console.log(items);
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    console.log(index, activeItem)
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
