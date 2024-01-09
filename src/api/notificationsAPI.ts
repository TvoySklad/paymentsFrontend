import axios from 'axios';
import emailjs from '@emailjs/browser';
import { alfaPaymentResultData, formatAlfaPaymentResultNotification, formatNotificationMessage } from '../utils/foramatters';
import { StoreSchema } from '../store/types/types';

export const handleSendManagerNotifications = async (store: StoreSchema, isAlpha: boolean = false) => {
  await sendTelegramMessage(formatNotificationMessage(store, isAlpha));
  await sendEmailNotification(formatNotificationMessage(store, isAlpha));
};

export  const handleSendAlfaPaymentResultNotifications = async (data: alfaPaymentResultData, isSuccess: boolean) => {
  await sendTelegramMessage(formatAlfaPaymentResultNotification(data, isSuccess));
  await sendEmailNotification(formatAlfaPaymentResultNotification(data, isSuccess));
};

export const sendTelegramMessage = async (message: string) => {
  const res = await axios.post(
    'https://api.telegram.org/bot5978113348:AAG0gX439oBRJYZbHlpXNU08uGak-cn32TA/sendMessage',
    { chat_id: '-1001964887940', text: message }
  );
  return res.data;
};

export const sendEmailNotification = async (message: string) => {

  return message;
  // emailjs
  //   .send('service_w87oks8', 'template_r5ildms', { message: message }, 'krTxdMKPrxEKPZQAx')
  //   .then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
};
