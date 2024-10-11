import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductId = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.products);
  const product = products.filter((prod) => prod.id === +id);
  // console.log(product);

  return (
    <article className="proddetail">
      <figure className="proddetail__img">
        <img src={product[0]?.image} alt="image product" />
      </figure>
      <div>
        <h2>{product[0]?.title}</h2>
        <ul className="proddetail__list">
          <li>
            <span className="proddetail__item">Descripción: </span>
            <span>{product[0]?.description}</span>
          </li>
          <li>
            <span className="proddetail__item">Precio: </span>
            <span>{product[0]?.price} $</span>
          </li>
        </ul>
        <div className="prod__buttons">
          <button>Buy</button>
        </div>
      </div>
    </article>
  );
};

export default ProductId;
