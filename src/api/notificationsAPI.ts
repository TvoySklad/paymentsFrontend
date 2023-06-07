import axios from 'axios';
import emailjs from '@emailjs/browser';
import { alfaPaymentResultData, formatAlfaPaymentResultNotification, formatNotificationMessage } from '../utils/foramatters';
import { StoreSchema } from '../store/types/types';

export  const handleSendManagerNotifications = (store: StoreSchema, isAlpha: boolean = false) => {
  sendTelegramMessage(formatNotificationMessage(store, isAlpha));
  sendEmailNotification(formatNotificationMessage(store, isAlpha));
};

export  const handleSendAlfaPaymentResultNotifications = (data: alfaPaymentResultData, isSuccess: boolean) => {
  sendTelegramMessage(formatAlfaPaymentResultNotification(data, isSuccess));
  sendEmailNotification(formatAlfaPaymentResultNotification(data, isSuccess));
};

export const sendTelegramMessage = async (message: string) => {
  const res = await axios.post(
    'https://api.telegram.org/bot5978113348:AAG0gX439oBRJYZbHlpXNU08uGak-cn32TA/sendMessage',
    { chat_id: '-1001964887940', text: message }
  );
  return res.data;
};

export const sendEmailNotification = async (message: string) => {


  emailjs
    .send('service_w87oks8', 'template_r5ildms', { message: message }, 'krTxdMKPrxEKPZQAx')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
