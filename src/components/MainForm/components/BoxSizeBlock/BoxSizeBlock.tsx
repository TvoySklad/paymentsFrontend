import { FC, useMemo } from 'react';
import cn from './BoxSizeBlock.module.scss';
import { BoxSizeItem } from '../BoxSizeItem/BoxSizeItem';
import { getStore } from '../../../../store/mainSlice/getStore';

import { A13, D211, M75 } from '../../../../db/db';
import { useSelector } from 'react-redux';
import { SizeSchema } from 'db/dbTypes';

interface BoxSizeBlockProps {
  className?: string;
}

export const BoxSizeBlock: FC<BoxSizeBlockProps> = (props) => {
  
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

  return (
    <div className={cn.BoxSizeBlock}>
      <h3 className={cn.boxSize__title}>Размер бокса*</h3>
      <div className={cn.boxSizeItemsContainer}>
        {mainStorage.map((item, index) => {
          return (
            <BoxSizeItem
              additionalSizes={item.additionalSizes}
              //@ts-ignore
              additionalText={item.additionalText || ''}
              mainSize={item.name}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
