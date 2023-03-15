import { FC } from 'react';
import cn from './Checkout.module.scss';
import { totalmem } from 'os';

interface CheckoutProps {
  className?: string;
}

export const Checkout: FC<CheckoutProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn.Checkout}>
      <div className={cn.promoContainer}>
        <button className={cn.promocodeBtn}>Ввести промокод</button>
        <button className={cn.couponeBtn}>Указать купон</button>
      </div>
      <div className={cn.summaryContainer}>
        <div className={cn.summaryBlock}>
          <span className={cn.summaryBlock__title}>Итого</span>
          <span className={cn.summaryBlock__value}>24 000₽</span>
        </div>
        <div className={cn.summaryBlock}>
          <span className={cn.summaryBlock__title}>Экономия</span>
          <span className={cn.summaryBlock__value}>4 000₽</span>
        </div>
        <div className={cn.summaryBlock}>
          <span className={cn.summaryBlock__title}>Промокод</span>
          <span className={cn.summaryBlock__value}>2 000₽</span>
        </div>
      </div>
      <div className={cn.payContainer}>
        <div className={cn.totalSum}>
          <span className={cn.totalSum__title}>Сумма к оплате</span>
          <span className={cn.totalSum__value}>18 000 ₽</span>
        </div>
        <button className={cn.payButton}>Оплатить</button>
      </div>
      <div className={cn.subscription}>
        <button className={cn.subscriptionButton}>Оформить подписку за 3600 ₽/мес</button>
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
