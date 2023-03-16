export interface StoreSchema {
  userName: string;
  userPhone: string;
  userEmail: string;
  city: string;
  address: string;
  addressId: string;
  boxSize: string;
  boxSizeIndex: number;
  rentalPeriod: string;
  rentalPeriodIndex: number;
  prolongation: boolean;
  prolongContract: string;
  prolongBoxNumber: string;
  promo: string;
  promoActivated: boolean;
  promoSum: number;
  totalSum: number;
  toPaySum: number;
}