import { FC } from 'react';
import cn from './Input.module.scss';

interface InputProps {
  id: string
  className?: string;
  title?: string;
  placeholder?: string
  value: string;
  inputType?: string;
  setValue: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
  const { className, id, title, placeholder = '', inputType = 'text', value, setValue } = props;

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <div className={cn.InputContainer}>
      {title && <h3 className={cn.input__title}>{title}</h3>}
      <input id={id} className={cn.input} type={inputType} placeholder={placeholder} value={value} onChange={handleInputChange} />
    </div>
  );
};
