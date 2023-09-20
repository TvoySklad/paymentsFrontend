import axios from 'axios';
import {generateOrderNumber, getCredsForAlfa} from '../utils/foramatters';

export const createOrder = async (sum: number, email: string, phone: string, addressId: string) => {
  const orderNumber = generateOrderNumber(phone);
  const { username, password, link } = getCredsForAlfa(addressId);
  try {
    const response = await axios.post(`https://apitvoyskladcom.us.to/proxy/register`, {}, {
      params: {
        userName: username,
        password: password,
        orderNumber: orderNumber.toString(),
        bindingId: phone.replace(/[^0-9]+/g, ''),
        amount: sum * 100,
        returnUrl: `https://pay.tvoysklad.com/?addressId=${addressId}`,
        failUrl: `https://pay.tvoysklad.com?addressId=${addressId}`,
        email,
        phone,
        clientId: orderNumber,
        requestLink: link
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
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
  const orderNumber = generateOrderNumber(phone);
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

export const getOrderStatus = async (orderId: string, addressId: string) => {
  const { username, password, link } = getCredsForAlfa(addressId);

  try {
    const response = await axios.post(`https://apitvoyskladcom.us.to/proxy/check`, {}, {
      params: {
        userName: username,
        password: password,
        orderId: orderId.toString(),
        link: link
      },
    });

    console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
