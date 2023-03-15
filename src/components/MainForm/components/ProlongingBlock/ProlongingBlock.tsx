import { FC } from 'react';
import cn from './ProlongingBlock.module.scss';
import { Input } from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { actions, storeSlice } from '../../../../store/mainSlice/slice';
import { getStoreValue } from '../../../../store/mainSlice/getStoreValue';
import { getStore } from '../../../../store/mainSlice/getStore';

interface ProlongingBlockProps {
  className?: string;
}

export const ProlongingBlock: FC<ProlongingBlockProps> = (props) => {
  const { className } = props;

  const test = useSelector(getStore);
  const dispatch = useDispatch();


  return (
    <div className={cn.ProlongingBlock}>
      <label className={cn.prolonging__checkboxContainer}>
        <input type='checkbox' />
        <span className={cn.prolonging__checkboxCheckmark}></span>
        Я продлеваю услугу
      </label>

      <p className={cn.prolonging__subtitle}>Укажите, пожалуйста, дополнительную информацию</p>
      <div className={cn.prolonging__inputContainer}>
        <Input
          id='prolong_contract'
          value=''
          setValue={() => {}}
          placeholder='Номер договора'
          disabled
        />
        <Input
          id='prolong_boxNumber'
          value=''
          setValue={() => {}}
          placeholder='Номер бокса'
          disabled
        />
      </div>
    </div>
  );
};
