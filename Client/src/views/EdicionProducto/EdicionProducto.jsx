import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { traerProducto } from "../../redux/actions";
const EdicionProducto = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.producto);

  useEffect(() => {
    dispatch(traerProducto(id));
  }, [dispatch]);

  const {
    idProduct,
    name,
    imageURL,
    description,
    price,
    stock,
    discount,
    active,
    Category,
  } = producto;
  {
    Category ? console.log(Category.name) : null;
  }
};

export default EdicionProducto;
