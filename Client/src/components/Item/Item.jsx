import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  const { idProducto, nombre } = item;
  const borrarProducto = () => {
    alert(`Borrado con exito!`);
  };

  return (
    <tr>
      <td>{idProducto}</td>
      <td>{nombre}</td>
      <td>
        <Link to={`/detalleAdmin/${idProducto}`}>
          <button>Editar</button>
        </Link>
      </td>
      <td>
        <button onClick={borrarProducto}>Borrar</button>
      </td>
    </tr>
  );
}

export default Item;
