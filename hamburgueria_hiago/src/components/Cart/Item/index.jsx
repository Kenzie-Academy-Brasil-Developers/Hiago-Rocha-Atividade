function Item({ item, setCart, cart, value, SetValue }) {
  function remove() {
    let newArr = [];
    let variavel = cart.findIndex((x) => x[0].id === item.id);
    newArr = [...cart];
    newArr.splice(variavel, 1);
    setCart(newArr);
  }
  return (
    <div>
      <img src={item.img} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <span>{item.category}</span>
      </div>
      <p>{item.price}</p>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
}

export default Item;
