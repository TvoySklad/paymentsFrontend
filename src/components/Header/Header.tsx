import { FC } from 'react';
import cn from './Header.module.scss';
import logo from '../../images/logo.svg';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  const backToMain = () => {
    window.location.replace('https://tvoysklad.com');
  }

  return (
    <section className={cn.Header}>
      <img src={logo} alt='tvoy sclad logo' className={cn.header__logo} />
      <button type='button' className={cn.header__backButton} onClick={backToMain}>Вернуться на главную</button>
    </section>
  );
};
