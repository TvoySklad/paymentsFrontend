import axios from 'axios';
import { generateOrderNumber } from '../utils/foramatters';

export const createOrder = async (sum: number, email: string, phone: string) => {
  const orderNumber = generateOrderNumber();
  try {
    const response = await axios.post(`https://payment.alfabank.ru/payment/rest/register.do`, {}, {
      params: {
        userName: 'r-tvoysklad-api',
        password: 'Dubai203050',
        orderNumber: orderNumber.toString(),
        bindingId: phone.replace(/[^0-9]+/g, ''),
        amount: sum * 100,
        returnUrl: 'https://pay.tvoysklad.com',
        failUrl: 'https://pay.tvoysklad.com',
        email,
        phone,
        clientId: orderNumber
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      withCredentials: true
    });

    console.log(response.data);
    if (!!response.data.errorCode) {
      throw new Error('Some error on alfa api');
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrderReccurent = async (sum: number, email: string, phone: string) => {
  const orderNumber = generateOrderNumber();
  try {
    // this is a test api address and test login/pwd
    const response = await axios.post(`https://alfa.rbsuat.com/payment/rest/paymentOrderBinding.do`, {}, {
      params: {
        userName: 'r-tvoysklad-api',
        password: 'r-tvoysklad*?1',
        mdOrder: orderNumber.toString(),
        bindingId: phone.replace(/[^0-9]+/g, ''),
        amount: 1000 * 100,
        returnUrl: 'http://localhost:3000',
        failUrl: 'http://localhost:3000',
        email,
        phone
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      withCredentials: true
    });

    console.log(response.data);
    if (!response.data.success) {
      throw new Error(`Some error on alfa api. Error code: ${response.data.error.code}. Msg: ${response.data.error.description}`);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderStatus = async (orderId: string) => {
  try {
    const response = await axios.post(`https://payment.alfabank.ru/payment/rest/getOrderStatus.do`, {}, {
      params: {
        userName: 'r-tvoysklad-api',
        password: 'Dubai203050',
        orderId: orderId.toString()
      },
    });

    console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
