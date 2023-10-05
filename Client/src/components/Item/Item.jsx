import { Link } from "react-router-dom";
import "./Item.css";
import editar from "../../assets/img/catalogoAdmin/editar.png";
import eliminar from "../../assets/img/catalogoAdmin/eliminar.png";

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
          <button className="btn-adm">
            <img className="img" src={editar} />
          </button>
        </Link>
      </td>
      <td>
        <button className="btn-adm" onClick={borrarProducto}>
          <img className="img" src={eliminar} />
        </button>
      </td>
    </tr>
  );
}

export default Item;
