import { StoreSchema } from '../store/types/types';

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
