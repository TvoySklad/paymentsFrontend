import { FC } from 'react';
import cn from './Main.module.scss';
import { MainForm } from '../MainForm/MainForm';
import { Cart } from '../Cart/Cart';

interface MainProps {
  className?: string;
}

export const Main: FC<MainProps> = (props) => {
  const { className } = props;

  return (
    <section className={cn.Main}>
      <MainForm />
      <Cart />
    </section>
  );
};
