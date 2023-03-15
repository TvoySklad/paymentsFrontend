import { FC } from 'react';
import cn from './RentalOptions.module.scss';

interface RentalOptionsProps {
  className?: string;
}

export const RentalOptions: FC<RentalOptionsProps> = (props) => {
  const { className } = props;

  return (
    <div className={(cn.RentalOptions)}>
      <h3 className={cn.rentalOptions__title}>Параметры аренды</h3>
      <div className={cn.rentalOptions__address}>
        <span className={cn.rentalOptions__addressTitle}>Адрес склада:</span>
        <span className={cn.rentalOptions__addressValue}>Не выбрано</span>
      </div>
      <div className={cn.rentalOptions__size}>
        <span className={cn.rentalOptions__sizeTitle}>Размер бокса:</span>
        <span className={cn.rentalOptions__sizeValue}>Не выбрано</span>
      </div>
      <div className={cn.rentalOptions__period}>
        <span className={cn.rentalOptions__periodTitle}>Срок аренды:</span>
        <span className={cn.rentalOptions__periodValue}>Не выбрано</span>
      </div>
    </div>
  );
};