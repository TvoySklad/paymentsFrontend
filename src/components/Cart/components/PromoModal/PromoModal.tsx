import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from './PromoModal.module.scss';
import { Input } from 'components/MainForm/components/Input/Input';
import { actions } from 'store/mainSlice/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getStore } from 'store/mainSlice/getStore';
import {promoForSumList, promoList} from 'db/promoList';

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
  }, [closeTimer.current]);

  const onContentClick = (evt: React.MouseEvent) => evt.stopPropagation();

  const checkPromo = useCallback(() => {
    let match = promoList.find((item) => item.name === store.promo);
    let matchOnValuePromo = promoForSumList.find((item) => item.name === store.promo);
    if (match?.name === 'НОВОРОССИЙСК' && store.city !== 'Новороссийск') {
      match = undefined;
    }
    if (match?.name === '2022' && store.city !== 'Курск') {
      match = undefined;
    }
    if (match) {
      dispatch(actions.setPromoActivated(true));
      dispatch(actions.setPromoSum(match.value));
      setError('');
      setPromoValue('');
      handleModalClose();
      return;
    }
    if (matchOnValuePromo?.name === 'Куникова1500' && store.addressId !== 'K38') {
      matchOnValuePromo = undefined;
    }
    if (matchOnValuePromo) {
      dispatch(actions.setPromoActivated(true));
      dispatch(actions.setPromoWithValueSum(matchOnValuePromo.value));
      setError('');
      setPromoValue('');
      handleModalClose();
      return;
    }
    dispatch(actions.setPromoActivated(false));
    dispatch(actions.setPromoSum(0));
    setError('Такого промокода не существует');
  }, [handleModalClose, store.promo, dispatch, store.city, store.addressId]);

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
      setError('');
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
          <Input id={'promo'} value={store.promo} setValue={setPromoValue} placeholder='Промокод' />
          <button
            className={cn.submitPromoButton}
            onClick={checkPromo}
            disabled={store.promo.length < 2}
          >
            Применить
          </button>
          <span className={cn.error}>{error}</span>
        </div>
      </div>
    </div>
  );
};
