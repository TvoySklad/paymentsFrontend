import { FC, useMemo } from 'react';
import cn from './Checkout.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store/mainSlice/slice';
import { A13, D211, M75 } from '../../../../db/db';

interface CheckoutProps {
  className?: string;
}

export const Checkout: FC<CheckoutProps> = (props) => {
  const { className } = props;
  const store = useSelector(getStore);
  const dispatch = useDispatch();

  const mainStorage = useMemo(() => {
    switch (store.addressId) {
      case 'M75':
        return M75;
      case 'D211':
        return D211;
      case 'A13':
        return A13;
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
    mainStorage,
  ]);

  const toPaySum = useMemo(() => {
    if (store.address && store.boxSize && store.rentalPeriod) {
      return totalSum - store.promoSum;
    }
    return 0;
  }, [totalSum, store.address, store.boxSize, store.rentalPeriod, store.boxSizeIndex]);

  const discount = useMemo(() => {
    if (store.rentalPeriodIndex > 0) {
      return (
        +mainStorage[+store.boxSizeIndex].periods[0].total *
          +mainStorage[+store.boxSizeIndex].periods[+store.rentalPeriodIndex].period -
        totalSum
      );
    }
    return 0;
  }, [mainStorage, totalSum]);

  const payButtonActive = useMemo(() => {
    if (store.prolongation) {
      return (
        store.prolongContract.length > 0 &&
        store.prolongBoxNumber.length > 0 &&
        store.address.length > 0 &&
        store.boxSize.length > 0 &&
        store.rentalPeriod.length > 0 &&
        store.userName.length > 0 &&
        store.userPhone.length > 0
      );
    }
    return (
      store.address.length > 0 && store.boxSize.length > 0 && store.rentalPeriod.length > 0 && store.userName.length > 0 && store.userPhone.length > 0
    );
  }, [
    store.prolongContract,
    store.prolongBoxNumber,
    store.address,
    store.boxSize,
    store.rentalPeriod,
    store.userName,
    store.userPhone,
    store.prolongation,
  ]);

  return (
    <div className={cn.Checkout}>
      <div className={cn.promoContainer}>
        <button className={cn.promocodeBtn}>Ввести промокод</button>
        <button className={cn.couponeBtn}>Указать купон</button>
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
            <span className={cn.summaryBlock__value}>{store.promoSum.toString()}₽</span>
          </div>
        )}
      </div>
      <div className={cn.payContainer}>
        <div className={cn.totalSum}>
          <span className={cn.totalSum__title}>Сумма к оплате</span>
          <span className={cn.totalSum__value}>{toPaySum} ₽</span>
        </div>
        <button className={cn.payButton} disabled={!payButtonActive}>Оплатить</button>
      </div>
      <div className={cn.subscription}>
        <button className={cn.subscriptionButton} disabled={!payButtonActive} >Оформить подписку за 3600 ₽/мес</button>
      </div>
      <div className={cn.agreement}>
        <a className={cn.agreement__text} href='https://tvoysklad.com/privacy' target='blank'>
          Нажимая оплатить или оформить подписку, я даю свое согласие с условиями Оферты, а также с
          условиями договора-оферты и на обработку персональных данных и ознакомлен с политикой
          конфиденциальности.
        </a>
      </div>
    </div>
  );
};
