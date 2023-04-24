import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from './CouponModal.module.scss';
import { Input } from '../../../../components/MainForm/components/Input/Input';
import { actions } from '../../../../store/mainSlice/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getStore } from '../../../../store/mainSlice/getStore';
import { fetchCoupon, updateCoupon } from '../../../../services/couponsService';
import { Coupon } from '../../../../store/types/types';

interface CouponModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const CouponModal: FC<CouponModalProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch<any>();
  const store = useSelector(getStore);

  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const setCouponValue = (value: string) => {
    dispatch(actions.setCoupon(value));
  };

  const handleModalClose = useCallback(() => {
    setIsClosing(true);

    closeTimer.current = setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  }, [setIsOpen, setIsClosing]);

  const onContentClick = (evt: React.MouseEvent) => evt.stopPropagation();

  const checkCoupon = useCallback(async () => {
    try {
      const coupon = await dispatch(fetchCoupon(store.coupon));
      console.log(coupon);
      if (!coupon.error) {
        dispatch(actions.setCouponActivated(true));
        dispatch(actions.setCouponActivatedValue(coupon.payload.value));
        dispatch(actions.setCouponSum(+coupon.payload.discount));
        setError('');
        handleModalClose();
        return;
      }
      dispatch(actions.setCouponActivated(false));
      dispatch(actions.setCouponActivatedValue(''));
      dispatch(actions.setCouponSum(null));
      if (coupon.payload === 'Промокод уже был использован') {
        setError('Этот купон уже был использован');
        return;
      }
      setError('Такого купона не существует');
    } catch {
      setError('Произошла ошибка - перезагрузите страницу и попробуйте еще раз');
      return;
    }
  }, [store.fetchedCoupon, dispatch, store.coupon, handleModalClose, store.couponActivatedValue, store.couponActivated]);

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        handleModalClose();
      } else if (evt.key === 'Enter') {
        checkCoupon();
      }
    },
    [handleModalClose, checkCoupon]
  );

  useEffect(() => {
    if (isOpen) {
      // @ts-ignore
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
      className={[cn.CouponModal, isOpen ? cn.isOpen : '', isClosing ? cn.isClosing : ''].join(' ')}
    >
      <div className={cn.overlay} onClick={handleModalClose}>
        <div className={cn.content} onClick={onContentClick}>
          <h5 className={cn.CouponModal__title}>Введите купон</h5>
          <Input id={'Coupon'} value={store.coupon} setValue={setCouponValue} placeholder='Купон' />
          <button
            className={cn.submitCouponButton}
            onClick={checkCoupon}
            disabled={store.coupon.length < 3}
          >
            Применить
          </button>
          <span className={cn.error}>{error}</span>
        </div>
      </div>
    </div>
  );
};
