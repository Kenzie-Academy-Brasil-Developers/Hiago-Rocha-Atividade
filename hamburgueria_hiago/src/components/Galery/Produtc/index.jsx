function Produtc({ Item, cart, setCart }) {
  function add() {
    let NewArr = [...cart, [Item]];
    setCart(NewArr);
  }
  return (
    <div>
      <img src={Item.img} alt={Item.name} />
      <h2>{Item.name}</h2>
      <span>{Item.category}</span>
      <p>{Item.price}</p>
      <button onClick={() => add()}>Adicionar</button>
    </div>
  );
}

export default Produtc;
