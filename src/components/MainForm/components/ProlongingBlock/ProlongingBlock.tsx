import { FC } from 'react';
import cn from './ProlongingBlock.module.scss';
import { Input } from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/mainSlice/slice';
import { getStore } from '../../../../store/mainSlice/getStore';

export const ProlongingBlock: FC = () => {
  const store = useSelector(getStore);
  const dispatch = useDispatch();

  const setContractValue = (value: string) => {
    dispatch(actions.setProlongContract(value));
  };

  const setBoxNumberValue = (value: string) => {
    dispatch(actions.setProlongBoxNumber(value));
  };

  return (
    <div className={cn.ProlongingBlock}>
      <p className={cn.prolonging__subtitle}>Укажите, пожалуйста, дополнительную информацию</p>
      <div className={cn.prolonging__inputContainer}>
        <Input
          id='prolong_contract'
          value={store.prolongContract}
          setValue={setContractValue}
          placeholder='20232010/7'
          title='Номер договора'
          requiredStar={true}
        />
        <Input
          id='prolong_boxNumber'
          value={store.prolongBoxNumber}
          setValue={setBoxNumberValue}
          placeholder='100'
          title='Номер бокса'
          requiredStar={true}
        />
      </div>
    </div>
  );
};
