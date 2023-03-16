import { FC } from 'react';
import cn from './ProlongOptions.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useSelector } from 'react-redux';
interface ProlongOptionsProps {
  className?: string;
}

export const ProlongOptions: FC<ProlongOptionsProps> = (props) => {
  const store = useSelector(getStore);

  return (
    <div className={(cn.ProlongOptions)}>
    <h3 className={cn.prolongOptions__title}>Информация для продления услуги</h3>
    <div className={cn.prolongOptions__contract}>
      <span className={cn.prolongOptions__contractTitle}>Номер договора:</span>
      <span className={cn.prolongOptions__contractValue}>{store.prolongContract ? store.prolongContract : '-----'}</span>
    </div>
    <div className={cn.prolongOptions__boxNumber}>
      <span className={cn.prolongOptions__boxNumberTitle}>Номер бокса:</span>
      <span className={cn.prolongOptions__boxNumberValue}>{store.prolongBoxNumber ? store.prolongBoxNumber : '---'}</span>
    </div>
  </div>
  );
};