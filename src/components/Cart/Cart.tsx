import { FC } from 'react';
import cn from './Cart.module.scss';

interface CartProps {
  className?: string;
}

export const Cart: FC<CartProps> = (props) => {
  const { className } = props;

  return <div className={cn.Cart}></div>;
};
