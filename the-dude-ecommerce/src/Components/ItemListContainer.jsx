import { Item } from "./Item";

function ItemListContainer(props) {
  return (
    <>
      <div>
        <h2>Hola, {props.name}</h2>
        <div className="flex flex-row justify-between flex-wrap">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
