
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { postCartThunk } from "../../store/slices/cart.slice";
import "./styles/prodCard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProdCard = ({ prod }) => {
  const navigate = useNavigate();


  const handleDetail = () => {
    navigate(`product/${prod.id}`);
  };

  //traer los datos de un usurio por defecto para el login

  const [usuario, getUsuario] = useFetch('');

  useEffect(() => {
    getUsuario("/users/1");
    console.log(usuario);
    
  }, []);

  const handleAddCart = () => {
    //const today = new Date().toISOString().split('T')[0];
    // dispatch(
    //     postCartThunk({
    //       userId: usuario?.id,
    //       date: today,
    //       products:[{productId:prod.id,quantity:1}]
    //   })
    // );
  }
  //console.log(prod);

  return (
    <div onClick={handleDetail} className="prodcard" role="button" tabIndex={0}>
      <div className="prodcard__container">
        <figure className="prodcard__img">
          <img src={prod.image} alt="product image" />
        </figure>
        <div className="prodcard__data">
          <div className="prodcard__price">$ {prod.price}</div>
          <div className="prodcard__title">{prod.title}</div>
        </div>
        <div className="prodcard__button">
          <button onClick={handleAddCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
