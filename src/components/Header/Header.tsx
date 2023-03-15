import { FC } from 'react';
import cn from './Header.module.scss';
import logo from '../../images/logo.svg';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <section className={cn.Header}>
      <img src={logo} alt='tvoy sclad logo' className={cn.header__logo} />
      <a href='https://tvoysklad.com' className={cn.header__backButton}>Вернуться на главную</a>
    </section>
  );
};
