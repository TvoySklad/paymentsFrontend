import { FC } from 'react';
import cn from './ProlongOptions.module.scss';

interface ProlongOptionsProps {
  className?: string;
}

export const ProlongOptions: FC<ProlongOptionsProps> = (props) => {
  const { className } = props;

  return (
    <div className={(cn.ProlongOptions)}>
    <h3 className={cn.prolongOptions__title}>Информация для продления услуги</h3>
    <div className={cn.prolongOptions__contract}>
      <span className={cn.prolongOptions__contractTitle}>Номер договора:</span>
      <span className={cn.prolongOptions__contractValue}>13032204/1</span>
    </div>
    <div className={cn.prolongOptions__boxNumber}>
      <span className={cn.prolongOptions__boxNumberTitle}>Номер бокса:</span>
      <span className={cn.prolongOptions__boxNumberValue}>089</span>
    </div>
  </div>
  );
};