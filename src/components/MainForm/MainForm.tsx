import { FC } from 'react';
import cn from './MainForm.module.scss';
import { UserCredentials } from './components/UserCredentials/UserCredentials';
import { AddressDropdown } from './components/AddressDropdown/AddressDropdown';

interface MainFormProps {
  className?: string;
}

export const MainForm: FC<MainFormProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn.MainForm}>
      <h1 className={cn.mainForm__title}>Оплата бокса</h1>
      <UserCredentials />
      <AddressDropdown />
    </div>
  );
};
