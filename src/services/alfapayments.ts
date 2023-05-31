import axios from 'axios';

export const createOrder = async (sum: number, email: string, phone: string) => {
  const orderNumber = Date.now();
  try {
    const response = await axios.post(`https://alfa.rbsuat.com/payment/rest/register.do`, {}, {
      params: {
        userName: 'r-tvoysklad-api',
        password: 'r-tvoysklad*?1',
        orderNumber: orderNumber.toString(),
        bindingId: phone.replace(/[^0-9]+/g, ''),
        amount: sum * 100,
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
    if (!!response.data.errorCode) {
      throw new Error('Auth error on alfa api');
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrderReccurent = async (sum: number, email: string, phone: string) => {
  const orderNumber = Date.now();
  try {
    const response = await axios.post(`https://alfa.rbsuat.com/payment/rest/recurrentPayment.do`, {}, {
      params: {
        userName: 'r-tvoysklad-api',
        password: 'r-tvoysklad*?1',
        orderNumber: orderNumber.toString(),
        bindingId: phone.replace(/[^0-9]+/g, ''),
        amount: sum * 100,
        returnUrl: 'http://localhost:3000',
        failUrl: 'http://localhost:3000',
        email,
        phone
      },
    });

    console.log(response.data);
    if (!!response.data.errorCode) {
      throw new Error('Auth error on alfa api');
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderStatus = async (orderId: string) => {
  try {
    const response = await axios.post(`https://alfa.rbsuat.com/payment/rest/getOrderStatus.do`, {}, {
      params: {
        userName: 'r-tvoysklad-api',
        password: 'r-tvoysklad*?1',
        orderId: orderId.toString()
      },
    });

    console.log(response.data);

    const { OrderStatus } = response.data;
    return OrderStatus || null;
  } catch (err) {
    console.log(err);
  }
};
