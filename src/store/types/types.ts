export type Coupon = {
  id: number;
  value: string;
  sum: string;
  used: boolean;
}

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
  prolongContract: string;
  prolongBoxNumber: string;
  promo: string;
  promoActivated: boolean;
  promoSum: number;
  coupon: string;
  couponActivated: boolean;
  couponActivatedValue: string;
  couponSum: number;
  couponId: number;
  totalSum: number;
  toPaySum: number;
  subscriptionCost: number;
  paymentType: string;
  error: string;
  isLoading: boolean;
  fetchedCoupons: Coupon[];
}
