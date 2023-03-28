import { FC, useCallback, useMemo, useState } from 'react';
import cn from './Checkout.module.scss';
import { getStore } from '../../../../store/mainSlice/getStore';
import { useDispatch, useSelector } from 'react-redux';
import { A13, D211, M75 } from '../../../../db/db';
import { PromoModal } from '../PromoModal/PromoModal';
import { CouponModal } from '../CouponModal/CouponModal';
import { sendTelegramMessage, sendEmailNotification } from '../../../../api/notificationsAPI';
import { formatNotificationMessage } from '../../../../utils/foramatters';
import { actions } from '../../../../store/mainSlice/slice';

export const Checkout: FC = () => {
  const store = useSelector(getStore);
  const dispatch = useDispatch();

  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

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

  const subscriptionCost = useMemo(() => {
    if (store.address && store.boxSize) {
      return +mainStorage[+store.boxSizeIndex].subscriptionCost;
    }

    return null;
  }, [store.address, store.boxSize, store.boxSizeIndex, mainStorage]);

  const toPaySum = useMemo(() => {
    if (store.address && store.boxSize && store.rentalPeriod) {
      if (store.promoSum < totalSum && store.couponSum < totalSum) {
        return totalSum - store.promoSum - store.couponSum;
      }
      return totalSum < 0 ? 0 : totalSum;
    }
    return 0;
  }, [totalSum, store.address, store.boxSize, store.rentalPeriod, store.promoSum, store.couponSum]);

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
    store.prolongContract,
    store.prolongBoxNumber,
    store.address,
    store.boxSize,
    store.rentalPeriod,
    store.userName,
    store.userPhone,
  ]);

  const subscriptionButtonActive = useMemo(() => {
    return (
      store.prolongContract.length > 0 &&
      store.prolongBoxNumber.length > 0 &&
      store.address.length > 0 &&
      store.boxSize.length > 0 &&
      store.userName.length > 0 &&
      store.userPhone.length > 0
    );
  }, [
    store.address.length,
    store.boxSize.length,
    store.prolongBoxNumber.length,
    store.prolongContract.length,
    store.userName.length,
    store.userPhone.length,
  ]);

  const handlePromoModalOpen = useCallback(() => {
    window.scrollTo(0, 0);
    setIsPromoModalOpen(true);
  }, []);

  const handleCouponModalOpen = useCallback(() => {
    window.scrollTo(0, 0);
    setIsCouponModalOpen(true);
  }, []);

  const handleSendManagerNotifications = () => {
    sendTelegramMessage(formatNotificationMessage(store));
    sendEmailNotification(formatNotificationMessage(store));
  };

  function pay() {
    dispatch(actions.setPaymentType('Full'));
    //@ts-ignore
    var widget = new cp.CloudPayments({
      language: 'ru-RU',
    });
    var data = {
      data: formatNotificationMessage(store),
    };
    widget.pay(
      'auth', // или 'charge'
      {
        //options
        publicId: 'test_api_00000000000000000000002', //id из личного кабинета
        description: 'Оплата склада', //назначение
        amount: toPaySum, //сумма
        currency: 'RUB', //валюта
        accountId: '', //идентификатор плательщика (необязательно)
        invoiceId: '', //номер заказа  (необязательно)
        skin: 'modern', //дизайн виджета (необязательно)
        autoClose: 3,
        data: data,
      },
      {
        onSuccess: function (options: any) {
          handleSendManagerNotifications();
        },
        onFail: function (reason: any, options: any) {
          console.log('payment fail');
        },
        onComplete: function (paymentResult: any, options: any) {
          //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
          //например вызов вашей аналитики Facebook Pixel
        },
      }
    );
  }

  function payReccurent() {
    dispatch(actions.setPaymentType('Reccurent'));
    //@ts-ignore
    var widget = new cp.CloudPayments();
    var receipt = {
      Items: [
        //товарные позиции
        {
          label: 'Подписка на аренду склада', //наименование товара
          price: subscriptionCost, //цена
          quantity: 1.0, //количество
          amount: subscriptionCost, //сумма
          vat: 20, //ставка НДС
          method: 0, // тег-1214 признак способа расчета - признак способа расчета
          object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
        },
      ],
      taxationSystem: 0, //система налогообложения; необязательный, если у вас одна система налогообложения
      email: 'user@example.com', //e-mail покупателя, если нужно отправить письмо с чеком
      phone: '', //телефон покупателя в любом формате, если нужно отправить сообщение со ссылкой на чек
      isBso: false, //чек является бланком строгой отчетности
      amounts: {
        electronic: subscriptionCost, // Сумма оплаты электронными деньгами
        advancePayment: 0.0, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
        credit: 0.0, // Сумма постоплатой(в кредит) (2 знака после запятой)
        provision: 0.0, // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
      },
    };

    var data = {
      data: formatNotificationMessage(store),
    };
    //@ts-ignore
    data.CloudPayments = {
      CustomerReceipt: receipt, //чек для первого платежа
      recurrent: {
        interval: 'Month',
        period: 1,
        customerReceipt: receipt, //чек для регулярных платежей
      },
    }; //создание ежемесячной подписки

    widget.charge(
      {
        // options
        publicId: 'test_api_00000000000000000000001', //id из личного кабинета
        description: 'Подписка на аренду склада', //назначение
        amount: subscriptionCost, //сумма
        currency: 'RUB', //валюта
        invoiceId: '', //номер заказа  (необязательно)
        accountId: `${store.userPhone} ${Date.now()}`, //идентификатор плательщика (обязательно для создания подписки)
        data: data,
      },
      function (options: any) {
        // success
        handleSendManagerNotifications();
      },
      function (reason: any, options: any) {
        // fail
        //действие при неуспешной оплате
      }
    );
  }

  return (
    <div className={cn.Checkout}>
      <div className={cn.promoContainer}>
        <button className={cn.promocodeBtn} onClick={handlePromoModalOpen}>
          Ввести промокод
        </button>
        <button className={cn.couponeBtn} onClick={handleCouponModalOpen}>
          Указать купон
        </button>
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
        <button className={cn.payButton} disabled={!payButtonActive} onClick={pay}>
          Оплатить
        </button>
      </div>
      {subscriptionCost && (
        <div className={cn.subscription}>
          <button
            className={cn.subscriptionButton}
            onClick={payReccurent}
            disabled={!subscriptionButtonActive}
          >
            Оформить подписку за {subscriptionCost} ₽/мес
          </button>
        </div>
      )}
      <div className={cn.agreement}>
        <a className={cn.agreement__text} href='https://tvoysklad.com/privacy' target='blank'>
          Нажимая оплатить или оформить подписку, я даю свое согласие с условиями Оферты, а также с
          условиями договора-оферты и на обработку персональных данных и ознакомлен с политикой
          конфиденциальности.
        </a>
      </div>
      <PromoModal isOpen={isPromoModalOpen} setIsOpen={setIsPromoModalOpen} />
      <CouponModal isOpen={isCouponModalOpen} setIsOpen={setIsCouponModalOpen} />
    </div>
  );
};
