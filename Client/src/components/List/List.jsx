import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./List.css";

function List({ productos }) {
  const borrarItem = () => {
    alert(`El item se borraria`);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID Producto</th>
          <th>Nombre del producto</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default List;
