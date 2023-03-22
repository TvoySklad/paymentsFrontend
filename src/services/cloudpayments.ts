// import cp from 'https://widget.cloudpayments.ru/bundles/cloudpayments.js';

// export function pay() {

//   //@ts-ignore
//   var widget = new cp.CloudPayments({
//     language: 'ru-RU',
//   });
//   widget.pay(
//     'auth', // или 'charge'
//     {
//       //options
//       publicId: 'test_api_00000000000000000000002', //id из личного кабинета
//       description: 'Оплата товаров в example.com', //назначение
//       amount: 1000, //сумма
//       currency: 'RUB', //валюта
//       accountId: 'user@example.com', //идентификатор плательщика (необязательно)
//       invoiceId: '1234567', //номер заказа  (необязательно)
//       skin: 'mini', //дизайн виджета (необязательно)
//       autoClose: 3,
//     },
//     {
//       onSuccess: function (options: any) {
//         // success
//         //действие при успешной оплате
//       },
//       onFail: function (reason: any, options: any) {
//         // fail
//         //действие при неуспешной оплате
//       },
//       onComplete: function (paymentResult: any, options: any) {
//         //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
//         //например вызов вашей аналитики Facebook Pixel
//       },
//     }
//   );
// }