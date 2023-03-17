import { FC } from 'react';
import cn from './UserCredentials.module.scss';
import { Input } from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/mainSlice/slice';
import { getStore } from '../../../../store/mainSlice/getStore';

interface UserCredentialsProps {
  className?: string;
}

export const UserCredentials: FC<UserCredentialsProps> = (props) => {
  const dispatch = useDispatch();
  const store = useSelector(getStore);

  const setNameValue = (value: string) => {
    dispatch(actions.setUserName(value));
  };

  const setPhoneValue = (value: string) => {
    dispatch(actions.setUserPhone(value));
  };

  const setEmailValue = (value: string) => {
    dispatch(actions.setUserEmail(value));
  };

  return (
    <div className={cn.UserCredentials}>
      <Input
        id='name'
        title='ФИО*'
        value={store.userName}
        setValue={setNameValue}
        inputType='text'
        min='3'
        required={true}
        placeholder='Укажите ФИО'
      />
      <Input
        id='tel'
        title='Номер телефона*'
        value={store.userPhone}
        setValue={setPhoneValue}
        inputType='email'
        min='5'
        required={true}
        placeholder='+7 900 000 00 00'
      />
      <Input
        id='email'
        title='Электронная почта (если есть)'
        value={store.userEmail}
        setValue={setEmailValue}
        inputType='tel'
        placeholder='example@mail.ru'
      />
    </div>
  );
};
