import { StoreSchema } from '../store/types/types';

export interface alfaPaymentResultData {
  amount: string;
  cardholderName: string;
  errorCode?: string;
}

export const formatNotificationMessage = (data: StoreSchema) => {
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
       cardholder name: ${data.cardholderName}
      `
    )
  } else {
    return (
      `Платеж отклонен
       amount: ${data.amount.toString()}
       errorCode: ${data.errorCode || ''}
       cardholder name: ${data.cardholderName}
      `
    )
  }
};

export const generateOrderNumber = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yy = String(today.getFullYear()).substr(-2);

// Generate a random three-digit number
  var randomNumber = Math.floor(Math.random() * 900) + 100;

// Combine the date and random number into a string
  var result = dd + mm + yy + randomNumber;
  return result;
}
