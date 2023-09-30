import { Link } from "react-router-dom";

import "./Card.css";

function Card({ producto }) {
  const { id, nombre, imagen, precio } = producto;

  return (
    <div className="card-container">
      <p>{id}</p>
      <Link>
        <img className="img" src={imagen} alt={nombre} />
      </Link>
      <h2>{nombre}</h2>
      <p>{precio}</p>
    </div>
  );
}

export default Card;
