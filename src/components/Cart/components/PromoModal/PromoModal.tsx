import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from './PromoModal.module.scss';
import { Input } from '../../../../components/MainForm/components/Input/Input';
import { actions } from '../../../../store/mainSlice/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getStore } from '../../../../store/mainSlice/getStore';
import { promoList } from '../../../../db/promoList';
interface PromoModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const PromoModal: FC<PromoModalProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const store = useSelector(getStore);

  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const setPromoValue = (value: string) => {
    dispatch(actions.setPromo(value));
  };

  const handleModalClose = useCallback(() => {
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  }, [setIsOpen, setIsClosing]);

  const onContentClick = (evt: React.MouseEvent) => evt.stopPropagation();

  const checkPromo = useCallback(() => {
    const match = promoList.find((item) => item.name === store.promo);
    console.log(match);
    if (match) {
      dispatch(actions.setPromoActivated(true));
      dispatch(actions.setPromoSum(match.value));
      setError('');
      handleModalClose();
      return;
    }
    dispatch(actions.setPromoActivated(false));
    dispatch(actions.setPromoSum(null));
    setError('Такого промокода не существует');
  }, [handleModalClose, store.promo, dispatch]);

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        handleModalClose();
      } else if (evt.key === 'Enter') {
        checkPromo();
      }
    },
    [handleModalClose, checkPromo]
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
      className={[cn.PromoModal, isOpen ? cn.isOpen : '', isClosing ? cn.isClosing : ''].join(' ')}
    >
      <div className={cn.overlay} onClick={handleModalClose}>
        <div className={cn.content} onClick={onContentClick}>
          <h5 className={cn.promoModal__title}>Введите промокод</h5>
          <Input id={'promo'} value={store.promo} setValue={setPromoValue} />
          <button
            className={cn.submitPromoButton}
            onClick={checkPromo}
            disabled={store.promo.length < 4}
          >
            Применить
          </button>
          <span className={cn.error}>{error}</span>
        </div>
      </div>
    </div>
  );
};
