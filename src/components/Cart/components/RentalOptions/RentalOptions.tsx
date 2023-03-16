import { FC } from 'react';
import cn from './RentalOptions.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useSelector } from 'react-redux';

interface RentalOptionsProps {
  className?: string;
}

export const RentalOptions: FC<RentalOptionsProps> = (props) => {
  const store = useSelector(getStore);

  return (
    <div className={(cn.RentalOptions)}>
      <h3 className={cn.rentalOptions__title}>Параметры аренды</h3>
      <div className={cn.rentalOptions__address}>
        <span className={cn.rentalOptions__addressTitle}>Адрес склада:</span>
        <span className={cn.rentalOptions__addressValue}>{store.address ? store.address :'Не выбрано'}</span>
      </div>
      <div className={cn.rentalOptions__size}>
        <span className={cn.rentalOptions__sizeTitle}>Размер бокса:</span>
        <span className={cn.rentalOptions__sizeValue}>{store.boxSize ? store.boxSize :'Не выбрано'}</span>
      </div>
      <div className={cn.rentalOptions__period}>
        <span className={cn.rentalOptions__periodTitle}>Срок аренды:</span>
        <span className={cn.rentalOptions__periodValue}>{store.rentalPeriod ? store.rentalPeriod :'Не выбрано'}</span>
      </div>
    </div>
  );
};