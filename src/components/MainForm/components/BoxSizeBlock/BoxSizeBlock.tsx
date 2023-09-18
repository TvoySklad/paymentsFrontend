import {FC, useCallback, useMemo} from 'react';
import cn from './BoxSizeBlock.module.scss';
import {BoxSizeItem} from '../BoxSizeItem/BoxSizeItem';
import {getStore} from '../../../../store/mainSlice/getStore';

import {A13, D211, M75, K38, GEL, SAR_IS27} from '../../../../db/db';
import {useSelector} from 'react-redux';

export const BoxSizeBlock: FC = () => {
  const store = useSelector(getStore);

  const mainStorage = useMemo(() => {
    switch (store.addressId) {
      case 'M75':
        return M75;
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

  const renderSizes = useCallback(() => {
    return (
      mainStorage.map((item, index) => {
        return (
          <BoxSizeItem
            additionalSizes={item.additionalSizes}
            additionalText={(item.additionalText && item.additionalText) || ''}
            mainSize={item.name}
            index={index}
            key={item.periods[0].total + item.subscriptionCost + index}
          />
        );
      })
    )
  }, [mainStorage])

  return (
    <div className={cn.BoxSizeBlock}>
      <h3 className={cn.boxSize__title}>
        Размер бокса<span className={cn.red}>*</span>
      </h3>
      <div className={cn.boxSizeItemsContainer}>
        {renderSizes()}
      </div>
    </div>
  );
};
