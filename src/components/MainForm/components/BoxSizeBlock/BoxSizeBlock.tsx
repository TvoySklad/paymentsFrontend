import { FC, useCallback, useMemo } from 'react';
import cn from './BoxSizeBlock.module.scss';
import { BoxSizeItem } from '../BoxSizeItem/BoxSizeItem';
import { actions } from '../../../../store/mainSlice/slice';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';

import { A13, D211, M75 } from '../../../../db/M75';

interface BoxSizeBlockProps {
  className?: string;
}

export const BoxSizeBlock: FC<BoxSizeBlockProps> = (props) => {
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
    <div className={cn.BoxSizeBlock}>
      <h3 className={cn.boxSize__title}>Размер бокса*</h3>
      <div className={cn.boxSizeItemsContainer}>
        {mainStorage.map((item, index) => {
          return (
            <BoxSizeItem
              additionalSizes={item.additionalSizes}
              mainSize={item.name}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
