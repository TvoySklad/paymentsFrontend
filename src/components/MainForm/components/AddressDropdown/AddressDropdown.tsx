import { FC, useState } from 'react';
import cn from './AddressDropdown.module.scss';
import triangle from '../../../../images/triangle.svg';
import { actions } from '../../../../store/mainSlice/slice';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import {SAR_IS27} from "../../../../db/db";

export const AddressDropdown: FC = () => {
  const dispatch = useDispatch();
  const store = useSelector(getStore);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const setAddress = (evt: any) => {
    dispatch(actions.resetStore());
    dispatch(actions.setCity(evt.target.dataset.city));
    dispatch(actions.setAddress(evt.target.innerText));
    dispatch(actions.setAddressId(evt.target.id));
    dispatch(actions.setPromoActivated(false));
    dispatch(actions.setPromoWithValueSum(0));
    dispatch(actions.setPromoSum(1));
    toggleDropdown();
  };

  const getAddressText = () => {
    if (store.city === '') {
      return <span className={cn.address__dropdownMenuText}>Выберите адрес склада</span>;
    } else {
      return (
        <span className={[cn.address__dropdownMenuText, cn.address__selected].join(' ')}>
          {store.address}
        </span>
      );
    }
  };
  return (
    <div className={cn.AddressDropdown}>
      <h3 className={cn.address__title}>
        Адрес склада <span className={cn.red}>*</span>
      </h3>
      <div
        className={[cn.address__dropdownMenu, isOpen ? cn.address__dropdownMenuOpen : ''].join(' ')}
        onClick={toggleDropdown}
      >
        {getAddressText()}
        <img
          src={triangle}
          alt='triangle'
          className={[cn.dropdownMenu__triangle, isOpen ? cn.rotate : ''].join(' ')}
        />
      </div>
      <div className={[cn.dropdownMenu, isOpen ? cn.dropdownOpen : ''].join(' ')}>
        <div className={cn.novorossBlock}>
          <h4 className={cn.dropdown__title}>Новороссийск</h4>
          <span
            id='M75'
            className={cn.dropdown__item}
            onClick={setAddress}
            data-city={'Новороссийск'}
          >
            Мысхакское Шоссе, 75А
          </span>
          <span
            id='D211'
            className={cn.dropdown__item}
            onClick={setAddress}
            data-city={'Новороссийск'}
          >
            Пр. Дзержинского, 211/2
          </span>
          <span
            id='K38'
            className={cn.dropdown__item}
            onClick={setAddress}
            data-city={'Новороссийск'}
          >
            Ул Куникова 38-40
          </span>
        </div>
        <div className={cn.kurskBlock}>
          <h4 className={cn.dropdown__title}>Курск</h4>
          <span id='A13' className={cn.dropdown__item} onClick={setAddress} data-city={'Курск'}>
            Александр Невского, 13, ТЦ "Панорама"
          </span>
        </div>
        <div className={cn.gelBlock}>
          <h4 className={cn.dropdown__title}>Геленджик</h4>
          <span
            id='GEL'
            className={cn.dropdown__item}
            onClick={setAddress}
            data-city={'Геленджик'}
          >
            Ул Халтурина 32
          </span>
        </div>
        <div className={cn.gelBlock}>
          <h4 className={cn.dropdown__title}>Саратов</h4>
          <span
            id='SAR_IS27'
            className={cn.dropdown__item}
            onClick={setAddress}
            data-city={'Саратов'}
          >
            Ул Н.В. Исаева, д. 27
          </span>
        </div>
      </div>
    </div>
  );
};
