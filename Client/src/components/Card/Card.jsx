import { Link } from "react-router-dom";
import "./Card.css";
import img_prueba from "../../assets/img/producto/ejemplo.png";

function Card({ producto }) {
  const { idProduct, name, imageURL, price, discount } = producto;

  return (
    <div className="card-container">
      {discount > 0 && (
        <div className="discountCircle">
          <p>OFERTA</p>
        </div>
      )}
      <div className="card">
        <div className="imgBox">
          <Link to={`/detalle/${idProduct}`}>
            <img src={imageURL} alt={name} className="img" />
          </Link>
        </div>
        <div className="contentBox">
          <h3>{name}</h3>
          {discount > 0 ? (
            <div>
              <h2 className="price-line">
                <p className="antes">${price}</p>
                <p className="descuento">${price - (price * discount) / 100}</p>
              </h2>
            </div>
          ) : (
            <h2 className="price">
              <p>${price}</p>
            </h2>
          )}

          <p>
            <Link className="buy" to={`/detalle/${idProduct}`}>
              Comprar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
