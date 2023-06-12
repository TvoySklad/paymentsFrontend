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

export const GEL: AddressDataSchema = [
  {
    name: '19/57',
    subscriptionCost: '13300',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '13300', total: '13300' },
      { period: 3, name: '3 месяца (-5%)', price: '12635', total: '37905' },
      { period: 6, name: '6 месяцев (-10%)', price: '11970', total: '71820' },
      { period: 12, name: '12 месяцев (-15%)', price: '11305', total: '135660' },
    ],
  },
  {
    name: '12/36',
    subscriptionCost: '9120',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9600', total: '9600' },
      { period: 3, name: '3 месяца (-5%)', price: '9120', total: '27360' },
      { period: 6, name: '6 месяцев (-10%)', price: '8640', total: '51840' },
      { period: 12, name: '12 месяцев (-15%)', price: '8160', total: '97920' },
    ],
  },
  {
    name: '3/9',
    subscriptionCost: '3135',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3300', total: '3300' },
      { period: 3, name: '3 месяца (-5%)', price: '3135', total: '9405' },
      { period: 6, name: '6 месяцев (-10%)', price: '2970', total: '17820' },
      { period: 12, name: '12 месяцев (-15%)', price: '2805', total: '33660' },
    ],
  },
  {
    name: '2/6',
    subscriptionCost: '2090',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2200', total: '2200' },
      { period: 3, name: '3 месяца (-5%)', price: '2090', total: '6270' },
      { period: 6, name: '6 месяцев (-10%)', price: '1980', total: '11880' },
      { period: 12, name: '12 месяцев (-15%)', price: '1870', total: '22440' },
    ],
  },
  {
    name: '1,5/4,5',
    subscriptionCost: '1568',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1650', total: '1650' },
      { period: 3, name: '3 месяца (-5%)', price: '1568', total: '4704' },
      { period: 6, name: '6 месяцев (-10%)', price: '1485', total: '8910' },
      { period: 12, name: '12 месяцев (-15%)', price: '1403', total: '16836' },
    ],
  },
  {
    name: '1,5/1,5',
    subscriptionCost: '1283',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1350', total: '1350' },
      { period: 3, name: '3 месяца (-5%)', price: '1283', total: '3849' },
      { period: 6, name: '6 месяцев (-10%)', price: '1215', total: '7290' },
      { period: 12, name: '12 месяцев (-15%)', price: '1148', total: '13776' },
    ],
  },
  {
    name: '12/24',
    subscriptionCost: '9120',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9600', total: '9600' },
      { period: 3, name: '3 месяца (-5%)', price: '9120', total: '27360' },
      { period: 6, name: '6 месяцев (-10%)', price: '8640', total: '51840' },
      { period: 12, name: '12 месяцев (-15%)', price: '8160', total: '97920' },
    ],
  },
  {
    name: '10/20',
    subscriptionCost: '7600',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '8000', total: '8000' },
      { period: 3, name: '3 месяца (-5%)', price: '7600', total: '22800' },
      { period: 6, name: '6 месяцев (-10%)', price: '7200', total: '43800' },
      { period: 12, name: '12 месяцев (-15%)', price: '6800', total: '81600' },
    ],
  },
  {
    name: '7/14',
    subscriptionCost: '5985',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '6300', total: '6300' },
      { period: 3, name: '3 месяца (-5%)', price: '5985', total: '17955' },
      { period: 6, name: '6 месяцев (-10%)', price: '5670', total: '34020' },
      { period: 12, name: '12 месяцев (-15%)', price: '5355', total: '64260' },
    ],
  },
  {
    name: '6/12',
    subscriptionCost: '4560',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4800', total: '4800' },
      { period: 3, name: '3 месяца (-5%)', price: '4560', total: '13680' },
      { period: 6, name: '6 месяцев (-10%)', price: '4320', total: '25920' },
      { period: 12, name: '12 месяцев (-15%)', price: '4080', total: '48960' },
    ],
  },
];
