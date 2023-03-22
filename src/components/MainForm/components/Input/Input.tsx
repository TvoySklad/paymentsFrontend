import { FC } from 'react';
import cn from './Input.module.scss';
import InputMask from 'react-input-mask';

interface InputProps {
  id: string;
  className?: string;
  title?: string;
  placeholder?: string;
  value: string;
  inputType?: string;
  min?: string;
  max?: string;
  required?: boolean;
  disabled?: boolean;
  setValue: (value: string) => void;
  masked?: boolean;
  mask?: string;
  maskPlaceholder?: string;
  requiredStar?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    className,
    id,
    title,
    placeholder = '',
    inputType = 'text',
    value,
    setValue,
    min = '0',
    max = '0',
    required = false,
    disabled = false,
    masked = false,
    mask,
    maskPlaceholder,
    requiredStar = false
  } = props;

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <div className={cn.InputContainer}>
      {title && (
        <h3 className={cn.input__title}>
          {title}
          <span className={cn.red}>{requiredStar ? ` *` : ''}</span>
        </h3>
      )}
      {masked ? (
        <InputMask
          mask={mask}
          maskChar={null}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          required={required}
          id={id}
          className={cn.input}
          type={inputType}
          placeholder={placeholder}
          min={min}
          max={max}
        />
      ) : (
        <input
          required={required}
          id={id}
          className={cn.input}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          disabled={disabled}
        />
      )}
    </div>
  );
};
