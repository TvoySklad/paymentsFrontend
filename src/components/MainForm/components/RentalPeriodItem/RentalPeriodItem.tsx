import { FC, useCallback, useMemo } from 'react';
import cn from './RentalPeriodItem.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/mainSlice/slice';

interface RentalPeriodItemProps {
  text: string;
  index: number;
}

export const RentalPeriodItem: FC<RentalPeriodItemProps> = (props) => {
  const { index, text } = props;
  const store = useSelector(getStore);
  const dispatch = useDispatch();

  const selected = useMemo(() => {
    return index === store.rentalPeriodIndex;
  }, [store.rentalPeriodIndex])

  const handleClick = useCallback(() => {
    dispatch(actions.setRentalPeriod(text));
    dispatch(actions.setRentalPeriodIndex(index));
  }, [])

  return (
    <div data-index={index}  className={[cn.RentalPeriodItem, selected ? cn.selected : ''].join(' ')} onClick={handleClick}>
      <span className={[cn.period__text, selected ? cn.selectedText : ''].join(' ')}>{text}</span>
    </div>
  );
};
