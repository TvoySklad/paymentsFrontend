import {FC, useCallback, useState} from 'react';
import cn from './PromoInput.module.scss';
import {Input} from 'components/MainForm/components/Input/Input';
import {actions} from 'store/mainSlice/slice';
import {useDispatch, useSelector} from 'react-redux';
import {getStore} from 'store/mainSlice/getStore';
import {promoForSumList, promoList} from 'db/promoList';
import {fetchCoupon} from "../../../../services/couponsService";

export const PromoInput: FC = (props) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const store = useSelector(getStore);

  const setPromoValue = (value: string) => {
    dispatch(actions.setPromo(value));
    dispatch(actions.setCoupon(value));
  };

  const checkPromocode = useCallback(() => {
    let match = promoList.find((item) => item.name === store.promo);
    let matchOnValuePromo = promoForSumList.find((item) => item.name === store.promo);
    if (match?.name === 'НОВОРОССИЙСК' && store.city !== 'Новороссийск') {
      match = undefined;
    }
    if (match?.name === '2022' && store.city !== 'Курск') {
      match = undefined;
    }
    if (match) {
      dispatch(actions.setPromoActivated(true));
      dispatch(actions.setPromoSum(match.value));
      setError('');
      setPromoValue('');
      return;
    }
    if (matchOnValuePromo?.name === 'Куникова1500' && store.addressId !== 'K38') {
      matchOnValuePromo = undefined;
    }
    if (matchOnValuePromo) {
      dispatch(actions.setPromoActivated(true));
      dispatch(actions.setPromoWithValueSum(matchOnValuePromo.value));
      setError('');
      setPromoValue('');
      return;
    }
    dispatch(actions.setPromoActivated(false));
    dispatch(actions.setPromoSum(0));
    setError('Такого промокода не существует');
  }, [store.promo, dispatch, store.city, store.addressId]);

  const checkCoupon = useCallback(async () => {
    try {
      //@ts-ignore
      const coupon = await dispatch(fetchCoupon(store.coupon));
      console.log(coupon);
      if (!coupon.error) {
        dispatch(actions.setCouponActivated(true));
        dispatch(actions.setCouponActivatedValue(coupon.payload.value));
        dispatch(actions.setCouponActivatedId(coupon.payload._id));
        dispatch(actions.setCouponSum(+coupon.payload.discount));
        setError('');
        return 'success coupon';
      }
      dispatch(actions.setCouponActivated(false));
      dispatch(actions.setCouponActivatedValue(''));
      dispatch(actions.setCouponSum(null));
      if (coupon.payload === 'Промокод уже был использован') {
        setError('Этот купон уже был использован');
        return;
      }
      setError('Такого купона не существует');
    } catch {
      setError('Произошла ошибка - перезагрузите страницу и попробуйте еще раз');
      return;
    }
  }, [store.fetchedCoupon, dispatch, store.coupon, store.couponActivatedValue, store.couponActivated]);

  const checkPromo = async () => {
    const coupon = await checkCoupon();

    if (coupon === 'success coupon') return;

    checkPromocode();
  }

  return (
    <div
      className={cn.root}
    >
      <div className={cn.inputRoot}>
        <Input id={'promo'} value={store.promo} setValue={setPromoValue}
               placeholder='Введите промокод / купон' className={cn.input}/>
        <button
          className={cn.submitPromoButton}
          onClick={checkPromo}
          disabled={store.promo.length < 2}
        >
          Применить
        </button>
      </div>
      <span className={cn.error}>{error}</span>
    </div>
  );
};
