import { StoreSchema } from '../store/types/types';

export interface alfaPaymentResultData {
  amount: string;
  errorCode?: string;
}

export const formatNotificationMessage = (data: StoreSchema, isAlpha: boolean = false) => {
  const result = `Name: ${data.userName}, 
    Tel: ${data.userPhone} 
    Email: ${data.userEmail || 'no_email'} 
    PaymentType: ${data.paymentType} 
    TotalSum: ${data.paymentType === 'Reccurent' ? data.subscriptionCost : data.toPaySum} ${data.paymentType === 'Reccurent' ? 'в месяц' : ''} 
    City: ${data.city} 
    Address: ${data.address} 
    BoxSize: ${data.boxSize} 
    Period: ${data.paymentType === 'Reccurent' ? 'Reccurent' : data.rentalPeriod} 
    Contract: ${data.prolongContract || 'no-prolong'} 
    PrevBox: ${data.prolongBoxNumber || 'no-prolong'} 
    Promocode: ${data.promoActivated ? data.promoSum + data.promo : 'no-promo'}
    CouponActivated: ${data.couponActivated ? data.couponSum + data.coupon : 'no-coupon'}
    
    ${isAlpha ? 'Оплата по Альфе - пока не прошла' : 'Оплата прошла'}
  `;
  return result;
};

export const formatPaymentMessage = (data: StoreSchema) => {
  const result = `Оплата бокса №${data.prolongBoxNumber} ${data.address}`;
  return result;
};


export const formatAlfaPaymentResultNotification = (data: alfaPaymentResultData, isSuccess: boolean) => {
  if (isSuccess) {
    return (
      `Платеж прошел
       amount: ${data.amount.toString()}
      `
    )
  } else {
    return (
      `Платеж отклонен
       amount: ${data.amount.toString()}
       errorCode: ${data.errorCode || ''}
      `
    )
  }
};

export const generateOrderNumber = (phone: string) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yy = String(today.getFullYear()).slice(-2);

  var randomNumber = Math.floor(Math.random() * 900) + 100;
  var lastFourNumDigits = phone.slice(-4);

  var result = dd + mm + yy + randomNumber + lastFourNumDigits;
  return result;
}

export const getCredsForAlfa = (value: string) => {
  switch (value) {
    case 'GEL':
      return {username: 'tvoysklad_agr_dikanaa-api', password: 'Dikan1408@23!', link: 'https://pay.alfabank.ru/payment/rest'}
    case 'K38':
      return {username: 'r-tvoysklad-api', password: 'Dubai203050', link: 'https://payment.alfabank.ru/payment/rest'}
    default:
      return {username: 'tvoysklad-api', password: '45%!156Tvoy%', link: 'https://pay.alfabank.ru/payment/rest'}
  }
}
