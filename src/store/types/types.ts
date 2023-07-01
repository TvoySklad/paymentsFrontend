export type Coupon = {
  _id: number;
  value: string;
  discount: string;
  isUsed: boolean;
  periods: number[];
  city: string[] | string;
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
  promoWithValue: number;
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
  fetchedCoupon: Coupon;
}
