import { Link } from "react-router-dom";
import "./Card.css";
import img_prueba from "../../assets/img/producto/ejemplo.png";

function Card({ producto }) {
  const { idProducto, nombre, imagen, precio, descuento } = producto;

  return (
    <div className="card-container">
      {descuento > 0 && (
        <div className="discountCircle">
          <p>OFERTA</p>
        </div>
      )}
      <div className="card">
        <div className="imgBox">
          <Link to={`/detalle/${idProducto}`}>
            <img src={imagen} alt={nombre} className="img" />
          </Link>
        </div>
        <div className="contentBox">
          <h3>{nombre}</h3>
          {descuento > 0 ? (
            <div>
              <h2 className="price-line">
                <p className="antes">${precio}</p>
                <p className="descuento">
                  ${precio - (precio * descuento) / 100}
                </p>
              </h2>
            </div>
          ) : (
            <h2 className="price">
              <p>${precio}</p>
            </h2>
          )}

          <p>
            <Link className="buy" to={`/detalle/${idProducto}`}>
              Comprar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
