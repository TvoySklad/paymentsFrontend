import { FC } from 'react';
import cn from './ProlongingBlock.module.scss';
import { Input } from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/mainSlice/slice';
import { getStore } from '../../../../store/mainSlice/getStore';

interface ProlongingBlockProps {
  className?: string;
}

export const ProlongingBlock: FC<ProlongingBlockProps> = (props) => {
  const { className } = props;

  const store = useSelector(getStore);
  const dispatch = useDispatch();

  const toggleProlongation = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setProlongation(evt.target.checked));
    if (evt.target.checked === false) {
      dispatch(actions.setProlongBoxNumber(''));
      dispatch(actions.setProlongContract(''));
    }
  };

  const setContractValue = (value: string) => {
    dispatch(actions.setProlongContract(value));
  };

  const setBoxNumberValue = (value: string) => {
    dispatch(actions.setProlongBoxNumber(value));
  };

  return (
    <div className={cn.ProlongingBlock}>
      <label className={cn.prolonging__checkboxContainer}>
        <input type='checkbox' checked={store.prolongation} onChange={toggleProlongation}/>
        <span className={cn.prolonging__checkboxCheckmark}></span>
        Я продлеваю услугу
      </label>

      <p className={cn.prolonging__subtitle}>Укажите, пожалуйста, дополнительную информацию</p>
      <div className={cn.prolonging__inputContainer}>
        <Input
          id='prolong_contract'
          value={store.prolongContract}
          setValue={setContractValue}
          placeholder='Номер договора'
          disabled={!store.prolongation}
        />
        <Input
          id='prolong_boxNumber'
          value={store.prolongBoxNumber}
          setValue={setBoxNumberValue}
          placeholder='Номер бокса'
          disabled={!store.prolongation}
        />
      </div>
    </div>
  );
};
