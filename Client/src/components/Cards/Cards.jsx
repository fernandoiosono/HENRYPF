import Card from "../Card/Card";
import "./Cards.css";

function Cards({ productos }) {
  return (
    <div className="card-list" >
      {productos.length > 0
        ? productos.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))
        : null}
    </div>
  );
}

export default Cards;
