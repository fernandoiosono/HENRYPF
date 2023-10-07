import { useSelector } from "react-redux";
import Item from "../Item/Item";
import "./List.css";
import { traerAllProductos } from "../../redux/actions.js";
import { useDispatch } from "react-redux";

function List() {
  const dispatch = useDispatch();
  // dispatch(traerAllProductos());
  const traerProductos = useSelector((state) => state.allProductos);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const ultimoIndiceProducto = currentPage * itemsPerPage;
  const primerIndiceProducto = ultimoIndiceProducto - itemsPerPage;
  const productsToShow = traerProductos.slice(
    primerIndiceProducto,
    ultimoIndiceProducto
  );
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
        {productsToShow.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default List;
