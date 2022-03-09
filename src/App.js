import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fakeDb.json")
      .then((res) => res.json())
      .then((json) => setPizzas(json.pizzas));
    // console.log(dataPizzas);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas}/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
