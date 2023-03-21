import { StoreSchema } from '../store/types/types';

export const formatTelegramMessage = (data: StoreSchema) => {
  const result = (
    `Name: ${data.userName}, 
    Tel: ${data.userPhone} 
    Email: ${
    data.userEmail || 'no_email'
  } 
    City: ${data.city} 
    Address: ${data.address} 
    BoxSize: ${data.boxSize} 
    Period: ${
    data.rentalPeriod
  } 
    Prolongation: ${data.prolongation || 'false'} 
    Contract: ${
    data.prolongContract || 'no-prolong'
  } 
    PrevBox: ${data.prolongBoxNumber || 'no-prolong'} 
    Promocode: ${
    data.promoActivated ? data.promoSum + data.promo : 'no-promo'
  }`);
  return result;
};
