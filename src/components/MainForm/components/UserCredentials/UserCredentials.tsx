import { FC, useState } from 'react';
import cn from './UserCredentials.module.scss';
import { Input } from '../Input/Input';

interface UserCredentialsProps {
  className?: string;
}

export const UserCredentials: FC<UserCredentialsProps> = (props) => {
  const { className } = props;
  const [nameValue, setNameValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  return (
    <div className={cn.UserCredentials}>
      <Input
        id='name'
        title='ФИО*'
        value={nameValue}
        setValue={setNameValue}
        inputType='text'
        min='3'
        required={true}
        placeholder='Укажите ФИО'
      />
      <Input
        id='tel'
        title='Номер телефона*'
        value={telValue}
        setValue={setTelValue}
        inputType='email'
        min='5'
        required={true}
        placeholder='+7 900 000 00 00'
      />
      <Input
        id='email'
        title='Электронная почта (если есть)*'
        value={emailValue}
        setValue={setEmailValue}
        inputType='tel'
        placeholder='example@mail.ru'
      />
    </div>
  );
};
