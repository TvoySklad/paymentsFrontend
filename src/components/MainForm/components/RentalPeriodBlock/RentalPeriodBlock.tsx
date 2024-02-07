import { FC, useMemo } from 'react';
import cn from './RentalPeriodBlock.module.scss';
import { RentalPeriodItem } from '../RentalPeriodItem/RentalPeriodItem';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useSelector } from 'react-redux';
import {A13, D211, M75, K38, GEL, SAR_IS27, ROS148} from '../../../../db/db';

export const RentalPeriodBlock: FC = () => {
  const store = useSelector(getStore);

  const mainStorage = useMemo(() => {
    switch (store.addressId) {
      case 'M75':
        return M75;
      case 'ROS148':
        return ROS148;
      case 'D211':
        return D211;
      case 'K38':
        return K38;
      case 'A13':
        return A13;
      case 'GEL':
        return GEL;
      case 'SAR_IS27':
        return SAR_IS27;
    }
  }, [store.addressId]);

  return (
    <div className={cn.RentalPeriodBlock}>
      <h3 className={cn.RentalPeriod__title}>Срок аренды<span className={cn.red}>*</span></h3>
      <div className={cn.RentalPeriodItemsContainer}>
        {mainStorage[0].periods.map((item, index) => <RentalPeriodItem index={index} text={item.name} key={item.price}/>)}
      </div>
    </div>
  );
};
