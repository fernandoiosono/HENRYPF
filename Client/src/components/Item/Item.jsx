import { Link } from "react-router-dom";
import "./Item.css";
import editar from "../../assets/img/catalogoAdmin/editar.png";
import eliminar from "../../assets/img/catalogoAdmin/eliminar.png";

function Item({ item }) {
  const { idProduct, name } = item;
  const borrarProducto = () => {
    alert(`Borrado con exito!`);
  };

  return (
    <tr>
      <td>{idProduct}</td>
      <td>{name}</td>
      <td>
        <Link to={`/detalleAdmin/${idProduct}`}>
          <button className="btn-adm">
            <img className="imgVista" src={editar} />
          </button>
        </Link>
      </td>
      <td>
        <button className="btn-adm" onClick={borrarProducto}>
          <img className="imgVista" src={eliminar} />
        </button>
      </td>
    </tr>
  );
}

export default Item;