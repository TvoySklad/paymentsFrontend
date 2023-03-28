import { FC } from 'react';
import cn from './Cart.module.scss';
import { RentalOptions } from './components/RentalOptions/RentalOptions';
import { ProlongOptions } from './components/ProlongOptions/ProlongOptions';
import { Checkout } from './components/Checkout/Checkout';
import { getStore } from '../../store/mainSlice/getStore';
import { useSelector } from 'react-redux';

interface CartProps {
  className?: string;
}

export const Cart: FC<CartProps> = (props) => {
  const store = useSelector(getStore);

  return (
    <div className={cn.Cart}>
      <div className={cn.cart__summaryInfo}>
        <RentalOptions />
        <ProlongOptions />
      </div>
      <Checkout />
    </div>
  );
};
