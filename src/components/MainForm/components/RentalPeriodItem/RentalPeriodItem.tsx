import { FC } from 'react';
import cn from './RentalPeriodItem.module.scss';

interface RentalPeriodItemProps {
  text: string;
  id: string;
  selected?: boolean;
}

export const RentalPeriodItem: FC<RentalPeriodItemProps> = (props) => {
  const { id, text, selected } = props;

  return (
    <div className={[cn.RentalPeriodItem, selected ? cn.selected : ''].join(' ')}>
      <span className={cn.period__text}>{text}</span>
    </div>
  );
};
