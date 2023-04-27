import { AddressDataSchema } from "./dbTypes";

export const M75: AddressDataSchema = [
  {
    name: 'XS',
    subscriptionCost: '2700',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3000', total: '3000' },
      { period: 3, name: '3 месяца (-10%)', price: '2700', total: '8100' },
      { period: 6, name: '6 месяцев (-15%)', price: '2550', total: '15300' },
      { period: 12, name: '12 месяцев (-20%)', price: '2 00', total: '28800' },
    ],
  },
  {
    name: 'S',
    subscriptionCost: '3600',
    additionalSizes: ['5м²', '13м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4000', total: '4000' },
      { period: 3, name: '3 месяца (-10%)', price: '3600', total: '10800' },
      { period: 6, name: '6 месяцев (-15%)', price: '3400', total: '20400' },
      { period: 12, name: '12 месяцев (-20%)', price: '3200', total: '38400' },
    ],
  },
  {
    name: 'M',
    subscriptionCost: '5400',
    additionalSizes: ['10м²', '27м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '6000', total: '6000' },
      { period: 3, name: '3 месяца (-10%)', price: '5400', total: '16200' },
      { period: 6, name: '6 месяцев (-15%)', price: '5100', total: '30600' },
      { period: 12, name: '12 месяцев (-20%)', price: '4800', total: '57600' },
    ],
  },
  {
    name: 'L',
    subscriptionCost: '7200',
    additionalSizes: ['15м²', '38м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '8000', total: '8000' },
      { period: 3, name: '3 месяца (-10%)', price: '7200', total: '21600' },
      { period: 6, name: '6 месяцев (-15%)', price: '6800', total: '40800' },
      { period: 12, name: '12 месяцев (-20%)', price: '6400', total: '76800' },
    ],
  },
];

export const D211: AddressDataSchema = [
  {
    name: '1,5м²',
    additionalText: 'Антресоль',
    subscriptionCost: '1215',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1350', total: '1350' },
      { period: 3, name: '3 месяца (-10%)', price: '1215', total: '3645' },
      { period: 6, name: '6 месяцев (-15%)', price: '1148', total: '6888' },
      { period: 12, name: '12 месяцев (-20%)', price: '1080', total: '12960' },
    ],
  },
  {
    name: '1,5м²',
    additionalText: 'Бокс',
    subscriptionCost: '1485',
    additionalSizes: ['1.5м²', '3м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1650', total: '1650' },
      { period: 3, name: '3 месяца (-10%)', price: '1485', total: '4455' },
      { period: 6, name: '6 месяцев (-15%)', price: '1402', total: '8412' },
      { period: 12, name: '12 месяцев (-20%)', price: '1320', total: '15840' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '2430',
    additionalSizes: ['3м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2700', total: '2700' },
      { period: 3, name: '3 месяца (-10%)', price: '2430', total: '7290' },
      { period: 6, name: '6 месяцев (-15%)', price: '2295', total: '13770' },
      { period: 12, name: '12 месяцев (-20%)', price: '2160', total: '25920' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '2700',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3000', total: '3000' },
      { period: 3, name: '3 месяца (-10%)', price: '2700', total: '8100' },
      { period: 6, name: '6 месяцев (-15%)', price: '2550', total: '15300' },
      { period: 12, name: '12 месяцев (-20%)', price: '2400', total: '28800' },
    ],
  },
  {
    name: '5м²',
    subscriptionCost: '3600',
    additionalSizes: ['5м²', '10м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4000', total: '4000' },
      { period: 3, name: '3 месяца (-10%)', price: '3600', total: '10800' },
      { period: 6, name: '6 месяцев (-15%)', price: '3400', total: '20400' },
      { period: 12, name: '12 месяцев (-20%)', price: '3200', total: '38400' },
    ],
  },
  {
    name: '10м²',
    subscriptionCost: '5400',
    additionalSizes: ['10м²', '30м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '6000', total: '6000' },
      { period: 3, name: '3 месяца (-10%)', price: '5400', total: '16200' },
      { period: 6, name: '6 месяцев (-15%)', price: '5100', total: '30600' },
      { period: 12, name: '12 месяцев (-20%)', price: '4800', total: '57600' },
    ],
  },
  {
    name: '15м²',
    subscriptionCost: '8100',
    additionalSizes: ['15м²', '45м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9000', total: '9000' },
      { period: 3, name: '3 месяца (-10%)', price: '8100', total: '24300' },
      { period: 6, name: '6 месяцев (-15%)', price: '7650', total: '45900' },
      { period: 12, name: '12 месяцев (-20%)', price: '7200', total: '86400' },
    ],
  },
];

export const A13: AddressDataSchema = [
  {
    name: 'XXS',
    subscriptionCost: '585',
    additionalSizes: ['1м²', '1м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '650', total: '650' },
      { period: 3, name: '3 месяца (-10%)', price: '585', total: '1755' },
      { period: 6, name: '6 месяцев (-15%)', price: '552', total: '3315' },
      { period: 12, name: '12 месяцев (-20%)', price: '520', total: '6240' },
    ],
  },
  {
    name: 'XS',
    subscriptionCost: '1755',
    additionalSizes: ['3м²', '8м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1950', total: '1950' },
      { period: 3, name: '3 месяца (-10%)', price: '1755', total: '5265' },
      { period: 6, name: '6 месяцев (-15%)', price: '1657', total: '9942' },
      { period: 12, name: '12 месяцев (-20%)', price: '1560', total: '18720' },
    ],
  },
  {
    name: 'S',
    subscriptionCost: '2925',
    additionalSizes: ['5м²', '13м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3250', total: '3250' },
      { period: 3, name: '3 месяца (-10%)', price: '2925', total: '8775' },
      { period: 6, name: '6 месяцев (-15%)', price: '2762', total: '16572' },
      { period: 12, name: '12 месяцев (-20%)', price: '2600', total: '31200' },
    ],
  },
  {
    name: 'M',
    subscriptionCost: '5400',
    additionalSizes: ['10м²', '27м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '5950', total: '5950' },
      { period: 3, name: '3 месяца (-10%)', price: '5400', total: '16200' },
      { period: 6, name: '6 месяцев (-15%)', price: '5100', total: '30600' },
      { period: 12, name: '12 месяцев (-20%)', price: '4800', total: '57600' },
    ],
  },
];

export const K38: AddressDataSchema = [
  {
    name: '1,5м²',
    additionalText: 'Антресоль',
    subscriptionCost: '1215',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1350', total: '1350' },
      { period: 3, name: '3 месяца (-10%)', price: '1215', total: '3645' },
      { period: 6, name: '6 месяцев (-15%)', price: '1147', total: '6882' },
      { period: 12, name: '12 месяцев (-20%)', price: '1080', total: '12960' },
    ],
  },
  {
    name: '1,5м²',
    additionalText: 'Бокс',
    subscriptionCost: '1485',
    additionalSizes: ['1.5м²', '3м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1650', total: '1650' },
      { period: 3, name: '3 месяца (-10%)', price: '1485', total: '4455' },
      { period: 6, name: '6 месяцев (-15%)', price: '1403', total: '8418' },
      { period: 12, name: '12 месяцев (-20%)', price: '1320', total: '15840' },
    ],
  },
  {
    name: '1,5м²',
    subscriptionCost: '1665',
    additionalSizes: ['1.5м²', '4.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1850', total: '1850' },
      { period: 3, name: '3 месяца (-10%)', price: '1665', total: '4995' },
      { period: 6, name: '6 месяцев (-15%)', price: '1573', total: '9438' },
      { period: 12, name: '12 месяцев (-20%)', price: '1480', total: '17760' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '2430',
    additionalSizes: ['3м²', '3/9'],
    periods: [
      { period: 1, name: '1 месяц', price: '2700', total: '2700' },
      { period: 3, name: '3 месяца (-10%)', price: '2430', total: '7290' },
      { period: 6, name: '6 месяцев (-15%)', price: '2295', total: '13770' },
      { period: 12, name: '12 месяцев (-20%)', price: '2160', total: '25920' },
    ],
  },
  {
    name: '4м²',
    subscriptionCost: '3240',
    additionalSizes: ['4м²', '3/6'],
    periods: [
      { period: 1, name: '1 месяц', price: '3600', total: '3600' },
      { period: 3, name: '3 месяца (-10%)', price: '3240', total: '9720' },
      { period: 6, name: '6 месяцев (-15%)', price: '3060', total: '18360' },
      { period: 12, name: '12 месяцев (-20%)', price: '2880', total: '34560' },
    ],
  },
  {
    name: '5м²',
    subscriptionCost: '3600',
    additionalSizes: ['5м²'],
    periods: [
      { period: 1, name: '1 месяц', price: '4000', total: '4000' },
      { period: 3, name: '3 месяца (-10%)', price: '3600', total: '10800' },
      { period: 6, name: '6 месяцев (-15%)', price: '3400', total: '20400' },
      { period: 12, name: '12 месяцев (-20%)', price: '3200', total: '38400' },
    ],
  },
  {
    name: '20м²',
    subscriptionCost: '12600',
    additionalSizes: ['20м²'],
    periods: [
      { period: 1, name: '1 месяц', price: '14000', total: '14000' },
      { period: 3, name: '3 месяца (-10%)', price: '12600', total: '37800' },
      { period: 6, name: '6 месяцев (-15%)', price: '11900', total: '71400' },
      { period: 12, name: '12 месяцев (-20%)', price: '11200', total: '134400' },
    ],
  },
];
