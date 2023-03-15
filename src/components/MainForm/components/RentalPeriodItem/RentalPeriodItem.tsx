import { FC } from 'react';
import cn from './RentalPeriodItem.module.scss';

interface RentalPeriodItemProps {
  text: string;
  id: string;
}

export const RentalPeriodItem: FC<RentalPeriodItemProps> = (props) => {
  const { id, text } = props;

  return (
    <div className={cn.RentalPeriodItem}>
      <span className={cn.period__text}>{text}</span>
    </div>
  );
};
