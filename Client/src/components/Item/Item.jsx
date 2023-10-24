import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faSquare,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ producto, handleDeleteProduct, handleActiveProduct }) {
  const { idProduct, name, stock, price, active, Category } = producto;

  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  // };

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
          <FontAwesomeIcon
            icon={faPen}
            size="lg"
            style={{ color: "#f5c52e" }}
          />
        </Link>
      </div>
      <div className="product-cell ">
        {active ? (
          <div
            className="buttonEliminar"
            role="button" // Añade un atributo de rol para indicar que es un botón
            onClick={() => {
              handleActiveProduct(idProduct, active);
            }}
          >
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#f5c52e" }}
              size="lg"
            />
          </div>
        ) : (
          <div
            className="buttonEliminar"
            role="button" // Añade un atributo de rol para indicar que es un botón
            onClick={() => {
              handleActiveProduct(idProduct, active);
            }}
          >
            <FontAwesomeIcon
              icon={faSquare}
              style={{ color: "#f5c52e" }}
              size="lg"
            />
          </div>
        )}
      </div>
      <div className="product-cell ">
        <div
          className="buttonEliminar"
          role="button" // Añade un atributo de rol para indicar que es un botón
          onClick={() => {
            handleDeleteProduct(idProduct, active);
          }}
        >
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
            style={{ color: "#f5c52e" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Item;
