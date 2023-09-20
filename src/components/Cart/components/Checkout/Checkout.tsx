import { FC, useEffect, useMemo, useState } from 'react';
import cn from './Checkout.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import {A13, D211, M75, K38, GEL, SAR_IS27} from '../../../../db/db';
import {
  handleSendAlfaPaymentResultNotifications,
  handleSendManagerNotifications
} from '../../../../api/notificationsAPI';
import { actions } from '../../../../store/mainSlice/slice';

import {
  createOrder,
  getOrderStatus
} from '../../../../services/alfapayments';
import { PayResult } from '../PaymentResultModal/PayResult';
import {PromoInput} from "../PromoInput/PromoInput";

export const Checkout: FC = () => {
  const store = useSelector(getStore);
  const dispatch = useDispatch<any>();

  const mainStorage = useMemo(() => {
    switch (store.addressId) {
      case 'M75':
        return M75;
      case 'D211':
        return D211;
      case 'K38':
        return K38;
      case 'A13':
        return A13;
      case 'GEL':
        return GEL;
      case 'SAR_IS27':
        return SAR_IS27;
    }
  }, [store.addressId]);

  const totalSum = useMemo(() => {
    let total = 0;
    if (store.address && store.boxSize && store.rentalPeriod) {
      total = +mainStorage[+store.boxSizeIndex].periods[+store.rentalPeriodIndex].total;
    }

    return total;
  }, [
    store.address,
    store.boxSize,
    store.rentalPeriod,
    store.boxSizeIndex,
    store.rentalPeriodIndex,
    mainStorage
  ]);

  const subscriptionCost = useMemo(() => {
    if (store.address && store.boxSize) {
      return +mainStorage[+store.boxSizeIndex].subscriptionCost;
    }

    return null;
  }, [store.address, store.boxSize, store.boxSizeIndex, mainStorage]);

  const toPaySum = useMemo(() => {
    if (store.address && store.boxSize && store.rentalPeriod) {
      const sum = Math.floor((totalSum * store.promoSum) - store.couponSum - store.promoWithValue);
      return sum >= 0 ? sum : 0
    }
    return 0;
  }, [totalSum, store.address, store.boxSize, store.rentalPeriod, store.promoSum, store.promoWithValue, store.couponSum]);

  const discount = useMemo(() => {
    if (store.rentalPeriodIndex > 0) {
      return (
        +mainStorage[+store.boxSizeIndex].periods[0].total *
        +mainStorage[+store.boxSizeIndex].periods[+store.rentalPeriodIndex].period -
        totalSum
      );
    }
    return 0;
  }, [mainStorage, totalSum, store.boxSizeIndex, store.rentalPeriodIndex]);

  const payButtonActive = useMemo(() => {
    if (store.addressId === 'SAR_IS27') return false;

    return (
      store.prolongContract.length > 0 &&
      store.prolongBoxNumber.length > 0 &&
      store.address.length > 0 &&
      store.boxSize.length > 0 &&
      store.rentalPeriod.length > 0 &&
      store.userName.length > 0 &&
      store.userPhone.length > 0
    );
  }, [
    store.addressId,
    store.prolongContract,
    store.prolongBoxNumber,
    store.address,
    store.boxSize,
    store.rentalPeriod,
    store.userName,
    store.userPhone
  ]);

  const [isPayResultModalOpen, setIsPayResultModalOpen] = useState(false);
  const [isAlfaPaymentSuccessful, setIsAlfaPaymentSuccessful] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasParams = params.toString().length > 0;

    if (!hasParams) return;

    const checkUrlParams = async () => {
      const orderId = params.get('orderId');
      const addressId = params.get('addressId');
      const result = await getOrderStatus(orderId, addressId);
      if (result.OrderStatus === 1 || result.OrderStatus === 2) {
        console.log('success');
        setIsAlfaPaymentSuccessful(true);
        setIsPayResultModalOpen(true);
        await handleSendAlfaPaymentResultNotifications({
          amount: (result.depositAmount / 100).toString() || '',
        }, true)
      } else {
        console.log('fail');
        setIsAlfaPaymentSuccessful(false);
        setIsPayResultModalOpen(true);
        await handleSendAlfaPaymentResultNotifications({
          amount: (result.depositAmount / 100).toString() || '',
          errorCode: result.ErrorCode || '',
        }, false)
      }

      setTimeout(() => {
        window.location.href = 'https://pay.tvoysklad.com';
      }, 4500);
    };

    checkUrlParams();
  }, []);

  useEffect(() => {
    dispatch(actions.setToPaySum(toPaySum));
  }, [toPaySum]);

  useEffect(() => {
    if (!!payButtonActive) {
      switch (store.paymentType) {
        case 'Reccurent':
          if (store.addressId === 'K38' || store.addressId === 'GEL') {
            handlePayAlfa();
            return;
          }
          break;
        case 'Full':
            handlePayAlfa();
          break;
        default:
          break;
      }
    }
  }, [store.paymentType]);


  const handlePayAlfa = async () => {
    if (store.paymentType === 'Reccurent') {
      return;
    } else {
      const response = await createOrder(toPaySum, store.userEmail, store.userPhone, store.addressId);
      if (response?.formUrl) {
        await handleSendManagerNotifications(store, true);
        window.location.href = response.formUrl;
      }
    }
  };

  const handlePayFull = () => {
    dispatch(actions.setPaymentType('Full'));
  };

  return (
    <div className={cn.Checkout}>
      <div className={cn.promoContainer}>
        <PromoInput />
      </div>
      <div className={cn.summaryContainer}>
        <div className={cn.summaryBlock}>
          <span className={cn.summaryBlock__title}>Итого</span>
          <span className={cn.summaryBlock__value}>{totalSum}₽</span>
        </div>
        <div className={cn.summaryBlock}>
          <span className={cn.summaryBlock__title}>Экономия</span>
          <span className={cn.summaryBlock__value}>{discount}₽</span>
        </div>
        {store.promoActivated && (
          <div className={cn.summaryBlock}>
            <span className={cn.summaryBlock__title}>Промокод</span>
            <span
              className={cn.summaryBlock__value}>{((totalSum - (totalSum * store.promoSum)) + store.promoWithValue).toString()}₽</span>
          </div>
        )}
        {store.couponActivated && (
          <div className={cn.summaryBlock}>
            <span className={cn.summaryBlock__title}>Купон</span>
            <span className={cn.summaryBlock__value}>{store.couponSum.toString()}₽</span>
          </div>
        )}
      </div>
      <div className={cn.payContainer}>
        <div className={cn.totalSum}>
          <span className={cn.totalSum__title}>Сумма к оплате</span>
          <span className={cn.totalSum__value}>{toPaySum} ₽</span>
        </div>
        <button className={cn.payButton} disabled={!payButtonActive} onClick={handlePayFull}>
          Оплатить
        </button>
      </div>
      <div className={cn.agreement}>
        <a className={cn.agreement__text} href='https://tvoysklad.com/privacy' target='blank'>
          Нажимая оплатить или оформить подписку, я даю свое согласие с условиями Оферты, а также с
          условиями договора-оферты и на обработку персональных данных и ознакомлен с политикой
          конфиденциальности.
        </a>
      </div>
      <PayResult isOpen={isPayResultModalOpen} setIsOpen={setIsPayResultModalOpen}
                 isSuccess={isAlfaPaymentSuccessful} />
    </div>
  );
};
