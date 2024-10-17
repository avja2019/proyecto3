import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/elementCart.css'
import { deleteProductThunk, updateProductThunk } from '../../store/slices/cart.slice';

const ElementCart = ({ productId, quantity, cartId}) => {
  const products = useSelector((store) => store.products);
  console.log(products);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductThunk(cartId));
  }

  const handleLess = () => {
    quantity= quantity - 1
  }

  const handlePlus = () => {
    updateProductThunk();
    quantity= quantity + 1
  }
  

  return (
    <article className='itemCart'>
      <h3 className='itemCart_title'>{products[productId]?.title}</h3>
      <figure className='itemCart_img'>
        <img src={products[productId]?.image} alt="product image"/>
      </figure>
      <div className='itemCart__buttons'>
        <button onClick={handleLess}>-</button>
        <span>{quantity}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={handleDelete} className='itemCart__btn'>delete</button>
      <p className='itemCart__total'>Total: $ <span>{products[productId]?.price*quantity}</span></p>
    </article>
  );
}

export default ElementCart;
