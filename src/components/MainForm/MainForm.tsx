import { FC } from 'react';
import cn from './MainForm.module.scss';
import { UserCredentials } from './components/UserCredentials/UserCredentials';
import { AddressDropdown } from './components/AddressDropdown/AddressDropdown';
import { BoxSizeBlock } from './components/BoxSizeBlock/BoxSizeBlock';
import { RentalPeriodBlock } from './components/RentalPeriodBlock/RentalPeriodBlock';
import { ProlongingBlock } from './components/ProlongingBlock/ProlongingBlock';
import { useSelector } from 'react-redux';
import { getStore } from '../../store/mainSlice/getStore';

interface MainFormProps {
  className?: string;
}

export const MainForm: FC<MainFormProps> = (props) => {
  const store = useSelector(getStore);

  return (
    <div className={cn.MainForm}>
      <h1 className={cn.mainForm__title}>Оплата бокса</h1>
      <UserCredentials />
      <AddressDropdown />
      {store.city === '' ? null : (
        <>
          <BoxSizeBlock />
          <RentalPeriodBlock />
          <ProlongingBlock />
        </>
      )}
    </div>
  );
};
