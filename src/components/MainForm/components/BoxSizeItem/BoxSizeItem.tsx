import { FC, useCallback, useMemo } from 'react';
import cn from './BoxSizeItem.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/mainSlice/slice';

interface BoxSizeItemProps {
  index: number;
  mainSize: string;
  additionalSizes: string[];
  selected?: boolean;
}

export const BoxSizeItem: FC<BoxSizeItemProps> = (props) => {
  const { mainSize, additionalSizes, index } = props;
  const dispatch = useDispatch();
  const store = useSelector(getStore);

  const selected = useMemo(() => {
    return index === store.boxSizeIndex;
  }, [index, store.boxSizeIndex])

  const handleClick = useCallback(() => {
     dispatch(actions.setBoxSize(mainSize));
     dispatch(actions.setBoxSizeIndex(index));
  }, [mainSize, index])

  return (
    <div id={mainSize} data-index={index} className={[cn.BoxSizeItem, selected ? cn.selected : ''].join(' ')} onClick={handleClick}>
      <span className={cn.mainSize}>{mainSize}</span>
      <div className={cn.additionalSizesConationer}>
        {additionalSizes.map((item) => (
          <span className={cn.additionalSizeItem}>{item}</span>
        ))}
      </div>
    </div>
  );
};
