import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartsThunk } from '../store/slices/cart.slice';
import ElementCart from '../components/cartPage/ElementCart';

const Cart = () => {
  const cartP = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCarts = async () => {
        await dispatch(getCartsThunk());
    };
    
    fetchCarts();
}, [dispatch]);
  
  console.log("cartP data:", cartP); // Verifica la estructura de cartP
  
  return (
    <div>
      {cartP?.length ? (
        cartP.map((cart, index) => (
          <div key={index}>
            <h2>Carrito ID: {cart.id}</h2>
            {cart.products?.map(prod => (
              <ElementCart
                key={prod.productId}
                productId={prod.productId}
                quantity={prod.quantity}
                cartId={cart.id}
              />
            ))}
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito.</p>  // Mensaje si el carrito está vacío
      )}
    </div>
  );
};

export default Cart;
