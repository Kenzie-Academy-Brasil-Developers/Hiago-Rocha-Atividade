import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect } from "react";
import Item from "./Item";

function Cart({ cart, setCart, value, SetValue }) {
  const [Total, setTotal] = useState(0);

  function clear() {
    setCart([]);
    setTotal(0);
  }

  useEffect(() => {
    let teste = 0;

    for (let i = 0; i < cart.length; i++) {
      teste += cart[i][0].price;
      setTotal(teste);
    }
  }, [cart]);
  return (
    <div>
      <div>
        <h2>Carrinho de compras</h2>
      </div>
      <div>
        {cart &&
          cart.map((item, key) => (
            <Item
              item={item[0]}
              setCart={setCart}
              key={key}
              cart={cart}
              value={value}
              SetValue={SetValue}
            />
          ))}
      </div>
      {Total == 0 ? (
        <div>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>
      ) : (
        <div>
          <div>
            <p>Total</p>
            <p>{Total}</p>
          </div>
          <button onClick={() => clear()}>Remover todos</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
