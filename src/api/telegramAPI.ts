import axios from 'axios';

export const sendTelegramMessage = async (message: string) => {
  const res = await axios.post(
    'https://api.telegram.org/bot5978113348:AAG0gX439oBRJYZbHlpXNU08uGak-cn32TA/sendMessage',
    { chat_id: '-1001964887940', text: message }
  );
  console.log(res.data);
  return res.data;
};
