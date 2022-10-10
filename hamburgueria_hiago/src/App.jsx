import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Container from "./components/Galery";
import Header from "./components/Header";

function App() {
  const [value, SetValue] = useState("");

  const [Menu, SetMenu] = useState([]);
  const [FilteredMenu, SetFilteredMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => SetMenu(response))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    SetFilteredMenu(Menu);
  }, [Menu]);

  return (
    <div className="Container">
      <Header
        SetFilteredMenu={SetFilteredMenu}
        Menu={Menu}
        value={value}
        SetValue={SetValue}
      />
      <Container
        FilteredMenu={FilteredMenu}
        cart={cart}
        setCart={setCart}
        value={value}
        SetValue={SetValue}
        Menu={Menu}
        SetFilteredMenu={SetFilteredMenu}
      />
      <Cart cart={cart} setCart={setCart} value={value} SetValue={SetValue} />
    </div>
  );
}

export default App;
