import { FC } from 'react';
import cn from './RentalPeriodBlock.module.scss';
import { RentalPeriodItem } from '../RentalPeriodItem/RentalPeriodItem';

interface RentalPeriodBlockProps {
  className?: string;
}

export const RentalPeriodBlock: FC<RentalPeriodBlockProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn.RentalPeriodBlock}>
      <h3 className={cn.RentalPeriod__title}>Срок аренды*</h3>
      <div className={cn.RentalPeriodItemsContainer}>
        <RentalPeriodItem id='1' text='1 месяц' />
        <RentalPeriodItem id='3' text='3 месяца (-10%)' />
        <RentalPeriodItem id='6' text='6 месяцев (-15%)' />
        <RentalPeriodItem id='12' text='12 месяцев (-20%)' selected />
      </div>
    </div>
  );
};
