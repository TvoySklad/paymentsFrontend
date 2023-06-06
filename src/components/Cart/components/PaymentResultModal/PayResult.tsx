import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from './PayResult.module.scss';
import succesImg from '../../../../images/successImg.png';
import failImg from '../../../../images/failImg.png';
interface PayResultProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isSuccess: boolean;
}

export const PayResult: FC<PayResultProps> = (props) => {
  const { isOpen, setIsOpen, isSuccess } = props;
  const [isClosing, setIsClosing] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleModalClose = useCallback(() => {
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  }, [closeTimer.current]);

  const onContentClick = (evt: React.MouseEvent) => evt.stopPropagation();

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        handleModalClose();
      }
    },
    [handleModalClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(closeTimer.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div
      className={[cn.PayResultModal, isOpen ? cn.isOpen : '', isClosing ? cn.isClosing : ''].join(' ')}
    >
      <div className={cn.overlay} onClick={handleModalClose}>
        <div className={cn.content} onClick={onContentClick}>
          <h5 className={cn.payResultModal__title}>{isSuccess ? 'Оплата прошла' : 'Оплата не прошла'}</h5>
          <img className={cn.image} src={isSuccess ? succesImg : failImg} alt='' />
          <button
            className={cn.submitPayResultButton}
            onClick={handleModalClose}
          >
            {isSuccess ? 'Отлично' : 'Попробую еще раз'}
          </button>
        </div>
      </div>
    </div>
  );
};
