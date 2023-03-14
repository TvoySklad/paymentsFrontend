import { FC, useState } from 'react';
import cn from './AddressDropdown.module.scss';
import triangle from '../../../../images/triangle.svg';

interface AddressDropdownProps {
  className?: string;
}

export const AddressDropdown: FC<AddressDropdownProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn.AddressDropdown}>
      <h3 className={cn.address__title}>Адрес склада*</h3>
      <div
        className={[cn.address__dropdownMenu, isOpen ? cn.address__dropdownMenuOpen : ''].join(' ')}
        onClick={toggleDropdown}
      >
        <span className={cn.address__dropdownMenuText}>Выберите адрес склада</span>
        <img
          src={triangle}
          alt='triangle'
          className={[cn.dropdownMenu__triangle, isOpen ? cn.rotate : ''].join(' ')}
        />
      </div>
      <div className={[cn.dropdownMenu, isOpen ? cn.dropdownOpen : ''].join(' ')}>
        <div className={cn.novorossBlock}>
          <h4 className={cn.dropdown__title}>Новороссийск</h4>
          <span id='M75A' className={cn.dropdown__item} onClick={toggleDropdown}>Мысхакское Шоссе, 75А</span>
          <span id='D211' className={cn.dropdown__item} onClick={toggleDropdown}>Пр. Дзержинского, 211/2</span>
        </div>
        <div className={cn.kurskBlock}>
          <h4 className={cn.dropdown__title}>Курск</h4>
          <span id='A13' className={cn.dropdown__item} onClick={toggleDropdown}>Александр Невского, 13, ТЦ  "Панорама"</span>
        </div>
      </div>
    </div>
  );
};
