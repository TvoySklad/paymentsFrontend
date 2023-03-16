import { FC, useMemo } from 'react';
import cn from './RentalPeriodBlock.module.scss';
import { RentalPeriodItem } from '../RentalPeriodItem/RentalPeriodItem';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import { A13, D211, M75 } from '../../../../db/M75';

interface RentalPeriodBlockProps {
  className?: string;
}

export const RentalPeriodBlock: FC<RentalPeriodBlockProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const store = useSelector(getStore);

  const mainStorage = useMemo(() => {
    switch (store.addressId) {
      case 'M75':
        return M75;
      case 'D211':
        return D211;
      case 'A13':
        return A13;
    }
  }, [store.addressId]);

  // const getMainStorage = () => {
  //   switch (store.addressId) {
  //     case 'M75':
  //       return M75;
  //     case 'D211':
  //       return D211;
  //     case 'A13':
  //       return A13;
  //   }
  // }

  return (
    <div className={cn.RentalPeriodBlock}>
      <h3 className={cn.RentalPeriod__title}>Срок аренды*</h3>
      <div className={cn.RentalPeriodItemsContainer}>
        {mainStorage[0].periods.map((item, index) => <RentalPeriodItem index={index} text={item.name} />)}
      </div>
    </div>
  );
};
