import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from './CouponModal.module.scss';
import { Input } from '../../../../components/MainForm/components/Input/Input';
import { actions } from '../../../../store/mainSlice/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getStore } from '../../../../store/mainSlice/getStore';
import { couponList } from '../../../../db/promoList';
interface CouponModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const CouponModal: FC<CouponModalProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
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

  const checkCoupon = useCallback(() => {
    const match = couponList.find((item) => item.name === store.coupon);
    console.log(match);
    if (match) {
      dispatch(actions.setCouponActivated(true));
      dispatch(actions.setCouponSum(match.value));
      setError('');
      handleModalClose();
      return;
    }
    dispatch(actions.setCouponActivated(false));
    dispatch(actions.setCouponSum(null));
    setError('Такого купона не существует');
  }, [handleModalClose, store.coupon, dispatch]);

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
            disabled={store.coupon.length < 4}
          >
            Применить
          </button>
          <span className={cn.error}>{error}</span>
        </div>
      </div>
    </div>
  );
};
