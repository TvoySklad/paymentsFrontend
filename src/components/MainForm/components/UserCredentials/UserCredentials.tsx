import { FC } from 'react';
import cn from './UserCredentials.module.scss';
import { Input } from '../Input/Input';

interface UserCredentialsProps {
  className?: string;
}

export const UserCredentials: FC<UserCredentialsProps> = (props) => {
  const { className } = props;

  return (
    <div className={(cn.UserCredentials)}>
      <Input id='name' title='ФИО*'/>
      <Input id='tel' title='Номер телефона*'/>
      <Input id='email' title='Электронная почта (если есть)*'/>
    </div>
  );
};