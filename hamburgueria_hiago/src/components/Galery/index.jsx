import Produtc from "./Produtc";

function Container({
  FilteredMenu,
  cart,
  setCart,
  value,
  SetValue,
  Menu,
  SetFilteredMenu,
}) {
  function UpDateValue() {
    SetValue("");
    SetFilteredMenu(Menu);
  }
  return (
    <div>
      {value && (
        <div>
          <p>
            Resultados para:
            <span>{value}</span>
          </p>
          <button onClick={() => UpDateValue()}>Limpar busca</button>
        </div>
      )}
      {FilteredMenu &&
        FilteredMenu.map((key, index) => (
          <Produtc Item={key} cart={cart} setCart={setCart} key={index} />
        ))}
    </div>
  );
}

export default Container;
