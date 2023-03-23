import axios from 'axios';
import emailjs from '@emailjs/browser';

export const sendTelegramMessage = async (message: string) => {
  const res = await axios.post(
    'https://api.telegram.org/bot5978113348:AAG0gX439oBRJYZbHlpXNU08uGak-cn32TA/sendMessage',
    { chat_id: '-1001964887940', text: message }
  );
  console.log(res.data);
  return res.data;
};

export const sendEmailNotification = async (message: string) => {
  console.log(message);

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
