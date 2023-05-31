import axios from 'axios';
import emailjs from '@emailjs/browser';
import { formatNotificationMessage } from '../utils/foramatters';
import { StoreSchema } from '../store/types/types';

export  const handleSendManagerNotifications = (store: StoreSchema) => {
  sendTelegramMessage(formatNotificationMessage(store));
  sendEmailNotification(formatNotificationMessage(store));
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
