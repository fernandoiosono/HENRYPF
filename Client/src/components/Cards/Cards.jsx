import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Cards.css";

function Cards() {
  const traerProductos = useSelector((state) => state.productosMostrar);
  const currentPage = useSelector((state) => state.currentPage);
  console.log(currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const ultimoIndiceProducto = currentPage * itemsPerPage;
  const primerIndiceProducto = ultimoIndiceProducto - itemsPerPage;
  const productsToShow = traerProductos.slice(
    primerIndiceProducto,
    ultimoIndiceProducto
  );
  return (
    <div className="card-list">
      {productsToShow.length > 0
        ? productsToShow.map((producto) => (
            <Card key={producto.idProducto} producto={producto} />
          ))
        : null}
    </div>
  );
}

export default Cards;
