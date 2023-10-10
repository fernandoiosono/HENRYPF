import { Link } from "react-router-dom";
import "./Item.css";

function Item({ producto, handleDeleteProduct }) {
  const { idProduct, name, stock, price, active, Category } = producto;

  return (
    <div className="products-row">
      <div className="product-cell ">
        <span>{name}</span>
      </div>
      <div className="product-cell">
        <span>{Category.name}</span>
      </div>
      {active ? (
        <div className="product-cell ">
          <span className="status active">Activo</span>
        </div>
      ) : (
        <div className="product-cell ">
          <span className="status disabled">No Activo</span>
        </div>
      )}

      <div className="product-cell ">{stock}</div>
      <div className="product-cell ">
        <span className="cell-label">${price}</span>
      </div>
      <div className="product-cell edit">
        <Link to={`/detalleAdmin/${idProduct}`}>
          <div>Editar</div>
        </Link>
      </div>
      <div className="product-cell ">
        <button
          className="buttonEliminar"
          onClick={() => {
            handleDeleteProduct(idProduct);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Item;
