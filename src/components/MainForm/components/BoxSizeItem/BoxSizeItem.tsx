import { FC, useCallback, useMemo } from 'react';
import cn from './BoxSizeItem.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/mainSlice/slice';

interface BoxSizeItemProps {
  index: number;
  mainSize: string;
  additionalSizes: string[];
  additionalText?: string;
}

export const BoxSizeItem: FC<BoxSizeItemProps> = (props) => {
  const { mainSize, additionalSizes, additionalText = '', index } = props;
  const dispatch = useDispatch();
  const store = useSelector(getStore);

  const selected = useMemo(() => {
    return index === store.boxSizeIndex;
  }, [index, store.boxSizeIndex]);

  const handleClick = useCallback(() => {
    dispatch(actions.setBoxSize(mainSize));
    dispatch(actions.setBoxSizeIndex(index));
  }, [mainSize, index]);

  return (
    <div
      id={mainSize}
      data-index={index}
      className={[cn.BoxSizeItem, selected ? cn.selected : ''].join(' ')}
      onClick={handleClick}
    >
      <div className={cn.mainSizeContainer}>
        {additionalText.length > 0 && <span className={cn.additionalText}>{additionalText}</span>}
        <span className={cn.mainSize}>{mainSize}</span>
      </div>
      <div className={cn.additionalSizesConationer}>
        {additionalSizes.map((item) => (
          <span className={cn.additionalSizeItem} key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};
