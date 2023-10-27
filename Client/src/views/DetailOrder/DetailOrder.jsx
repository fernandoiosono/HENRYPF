import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByID, patchOrders } from "../../redux/actions";
import Louder from "../../components/Louder/louder";
import Producto from "../../components/Producto/Producto";
import "./DetailOrder.css";
import Swal from "sweetalert2";

const DetailOrder = () => {
  let params = useParams();
  const location = useNavigate();

  const { id } = params;
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const loader = useSelector((state) => state.loader);

  const {
    idOrder,
    User,
    address,
    amount,
    deliveredDate,
    paymentDate,
    phone,
    postalCode,
    products,
    receivedDate,
    status,
  } = order;

  useEffect(() => {
    dispatch(getOrderByID(id));
  }, []);

  const handleButtonSend = () => {
    Swal.fire({
      title: "¿Deseas cambiar el estado a enviado?",
      text: "No se puede volver al estado anterior",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3005d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cambiar estado",
    }).then((result) => {
      if (result.value) {
        dispatch(patchOrders(idOrder, status));
        location("/catalogoAdmin");
      }
    });
  };

  const handleButtonReceived = () => {
    Swal.fire({
      title: "¿Deseas cambiar el estado a recibido?",
      text: "No se puede volver al estado anterior",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3005d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cambiar estado",
    }).then((result) => {
      if (result.value) {
        dispatch(patchOrders(idOrder, status));
        location("/catalogoAdmin");
      }
    });
  };

  return (
    <>
      {!loader ? (
        <Louder />
      ) : (
        <div className="container">
          <div className="userSection">
            <p>{`Nombre: ${User.name}`}</p>
            <p>{`Email: ${User.email}`}</p>
            <p>{`Telefono: ${phone}`}</p>
          </div>
          <hr />
          <div className="detailSection">
            <p>{`Status: ${status}`}</p>
            <p>{address}</p>
            <p>{`Codigo Postal: ${postalCode}`}</p>
            <p>{`Valor Pagado: ${amount}`}</p>
            <p>{`Fecha pago: ${paymentDate.slice(0, 19)}`}</p>
            {deliveredDate === null ? null : (
              <p>{`Fecha Envio: ${deliveredDate.slice(0, 19)}`}</p>
            )}
            {receivedDate === null ? null : (
              <p>{`Fecha Recibo: ${receivedDate.slice(0, 19)}`}</p>
            )}
          </div>
          <hr />
          <div className="productsSection">
            <div className="app-container">
              <div className="app-content">
                <div className="products-area-wrapper tableView">
                  <div className="products-header">
                    <div className="product-cell status-cell">Cantidad</div>
                    <div className="product-cell stock">Imagen</div>
                    <div className="product-cell stock">Nombre</div>
                  </div>
                  {products.length > 0
                    ? products.map((producto, index) => (
                        <Producto key={index} producto={producto} />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="buttonsSection">
            {status === "PAID" ? (
              <button className="btnOrder" onClick={handleButtonSend}>
                MARCAR COMO ENVIADO
              </button>
            ) : status === "DELIVERED" ? (
              <button className="btnOrder" onClick={handleButtonReceived}>
                MARCAR COMO RECIBIDO
              </button>
            ) : (
              <button className="btnOrder_disabled" disabled>
                PRODUCTO RECIBIDO
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailOrder;
