import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

 
const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ShopContext);
  const cartAmount = getCartAmount();
  const rawDeliveryFee = cartAmount * 0.17; // Calculate delivery fee as 17% of cart amount
  const deliveryFee = Math.min(rawDeliveryFee, 300); // Cap delivery fee at $300
  const totalAmount = cartAmount + deliveryFee;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {cartAmount.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {deliveryFee.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency} {totalAmount.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;