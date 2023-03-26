import { StoreSchema } from '../store/types/types';

export const formatNotificationMessage = (data: StoreSchema) => {
  const result = `Name: ${data.userName}, 
    Tel: ${data.userPhone} 
    Email: ${data.userEmail || 'no_email'} 
    PaymentType: ${data.paymentType} 
    City: ${data.city} 
    Address: ${data.address} 
    BoxSize: ${data.boxSize} 
    Period: ${data.paymentType === 'Reccurent' ? 'Reccurent' : data.rentalPeriod} 
    Prolongation: ${data.prolongation || 'false'} 
    Contract: ${data.prolongContract || 'no-prolong'} 
    PrevBox: ${data.prolongBoxNumber || 'no-prolong'} 
    Promocode: ${data.promoActivated ? data.promoSum + data.promo : 'no-promo'}
  `;
  return result;
};
