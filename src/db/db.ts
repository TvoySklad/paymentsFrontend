import { AddressDataSchema } from "./dbTypes";

export const M75: AddressDataSchema = [
  {
    name: 'XS',
    subscriptionCost: '2700',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3000', total: '3000' },
      { period: 3, name: '3 месяца (-5%)', price: '2850', total: '8550' },
      { period: 6, name: '6 месяцев (-10%)', price: '2700', total: '16200' },
      { period: 12, name: '12 месяцев (-15%)', price: '2550', total: '30600' },
    ],
  },
  {
    name: 'S',
    subscriptionCost: '3600',
    additionalSizes: ['5м²', '13м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4000', total: '4000' },
      { period: 3, name: '3 месяца (-5%)', price: '3800', total: '11400' },
      { period: 6, name: '6 месяцев (-10%)', price: '3600', total: '21600' },
      { period: 12, name: '12 месяцев (-15%)', price: '3400', total: '40800' },
    ],
  },
  {
    name: 'M',
    subscriptionCost: '5400',
    additionalSizes: ['10м²', '27м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '7000', total: '7000' },
      { period: 3, name: '3 месяца (-5%)', price: '6650', total: '19950' },
      { period: 6, name: '6 месяцев (-10%)', price: '6300', total: '37800' },
      { period: 12, name: '12 месяцев (-15%)', price: '5950', total: '71400' },
    ],
  },
  {
    name: 'L',
    subscriptionCost: '7200',
    additionalSizes: ['15м²', '38м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9000', total: '9000' },
      { period: 3, name: '3 месяца (-5%)', price: '8550', total: '25650' },
      { period: 6, name: '6 месяцев (-10%)', price: '8100', total: '48600' },
      { period: 12, name: '12 месяцев (-15%)', price: '7650', total: '91800' },
    ],
  },
];

export const D211: AddressDataSchema = [
  {
    name: '1м²',
    additionalText: 'Антресоль',
    subscriptionCost: '760',
    additionalSizes: ['1м²', '1м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '800', total: '800' },
      { period: 3, name: '3 месяца (-5%)', price: '760', total: '2280' },
      { period: 6, name: '6 месяцев (-10%)', price: '720', total: '4320' },
      { period: 12, name: '12 месяцев (-15%)', price: '680', total: '8160' },
    ],
  },
  {
    name: '1м²',
    additionalText: 'Антресоль',
    subscriptionCost: '1140',
    additionalSizes: ['1м²', '2м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1200', total: '1200' },
      { period: 3, name: '3 месяца (-5%)', price: '1140', total: '3420' },
      { period: 6, name: '6 месяцев (-10%)', price: '1080', total: '6480' },
      { period: 12, name: '12 месяцев (-15%)', price: '1020', total: '12240' },
    ],
  },
  {
    name: '1,5м²',
    additionalText: 'Антресоль',
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
    name: '1,5м²',
    subscriptionCost: '1568',
    additionalSizes: ['1.5м²', '3м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1650', total: '1650' },
      { period: 3, name: '3 месяца (-5%)', price: '1568', total: '4704' },
      { period: 6, name: '6 месяцев (-10%)', price: '1485', total: '8910' },
      { period: 12, name: '12 месяцев (-15%)', price: '1403', total: '16836' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '2850',
    additionalSizes: ['3м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3000', total: '3000' },
      { period: 3, name: '3 месяца (-5%)', price: '2850', total: '8550' },
      { period: 6, name: '6 месяцев (-10%)', price: '2700', total: '16200' },
      { period: 12, name: '12 месяцев (-15%)', price: '2550', total: '30600' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3300', total: '3300' },
      { period: 3, name: '3 месяца (-5%)', price: '3135', total: '9405' },
      { period: 6, name: '6 месяцев (-10%)', price: '2970', total: '17820' },
      { period: 12, name: '12 месяцев (-15%)', price: '2805', total: '33660' },
    ],
  },
  {
    name: '5м²',
    subscriptionCost: '4275',
    additionalSizes: ['5м²', '15м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4500', total: '4500' },
      { period: 3, name: '3 месяца (-5%)', price: '4275', total: '12825' },
      { period: 6, name: '6 месяцев (-10%)', price: '4050', total: '24300' },
      { period: 12, name: '12 месяцев (-15%)', price: '3825', total: '45900' },
    ],
  },
  {
    name: '10м²',
    subscriptionCost: '7600',
    additionalSizes: ['10м²', '30м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '8000', total: '8000' },
      { period: 3, name: '3 месяца (-5%)', price: '7600', total: '22800' },
      { period: 6, name: '6 месяцев (-10%)', price: '7200', total: '43200' },
      { period: 12, name: '12 месяцев (-15%)', price: '6800', total: '81600' },
    ],
  },
  {
    name: '15м²',
    subscriptionCost: '9975',
    additionalSizes: ['15м²', '45м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '10500', total: '10500' },
      { period: 3, name: '3 месяца (-5%)', price: '9975', total: '29925' },
      { period: 6, name: '6 месяцев (-10%)', price: '9450', total: '56700' },
      { period: 12, name: '12 месяцев (-15%)', price: '8925', total: '107100' },
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
      { period: 3, name: '3 месяца (-5%)', price: '618', total: '1854' },
      { period: 6, name: '6 месяцев (-10%)', price: '585', total: '3510' },
      { period: 12, name: '12 месяцев (-15%)', price: '553', total: '6636' },
    ],
  },
  {
    name: 'XS',
    subscriptionCost: '1755',
    additionalSizes: ['3м²', '8м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2100', total: '2100' },
      { period: 3, name: '3 месяца (-5%)', price: '1995', total: '5985' },
      { period: 6, name: '6 месяцев (-10%)', price: '1890', total: '11340' },
      { period: 12, name: '12 месяцев (-15%)', price: '1785', total: '21420' },
    ],
  },
  {
    name: 'S',
    subscriptionCost: '2925',
    additionalSizes: ['5м²', '13м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3500', total: '3500' },
      { period: 3, name: '3 месяца (-5%)', price: '3325', total: '9975' },
      { period: 6, name: '6 месяцев (-10%)', price: '3150', total: '18900' },
      { period: 12, name: '12 месяцев (-15%)', price: '2975', total: '35700' },
    ],
  },
  {
    name: 'M',
    subscriptionCost: '5400',
    additionalSizes: ['10м²', '27м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '6500', total: '6500' },
      { period: 3, name: '3 месяца (-5%)', price: '6175', total: '18525' },
      { period: 6, name: '6 месяцев (-10%)', price: '5850', total: '35100' },
      { period: 12, name: '12 месяцев (-15%)', price: '5525', total: '66300' },
    ],
  },
];

export const K38: AddressDataSchema = [
  {
    name: '1,5м²',
    additionalText: 'Антресоль',
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
    name: '1,5м²',
    additionalText: 'Бокс',
    subscriptionCost: '1568',
    additionalSizes: ['1.5м²', '3м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1650', total: '1650' },
      { period: 3, name: '3 месяца (-5%)', price: '1568', total: '4704' },
      { period: 6, name: '6 месяцев (-10%)', price: '1485', total: '8910' },
      { period: 12, name: '12 месяцев (-15%)', price: '1403', total: '16836' },
    ],
  },
  {
    name: '2м²',
    subscriptionCost: '1900',
    additionalSizes: ['2м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2000', total: '2000' },
      { period: 3, name: '3 месяца (-5%)', price: '1900', total: '5700' },
      { period: 6, name: '6 месяцев (-10%)', price: '1800', total: '10800' },
      { period: 12, name: '12 месяцев (-15%)', price: '1700', total: '20400' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '2850',
    additionalSizes: ['3м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3000', total: '3000' },
      { period: 3, name: '3 месяца (-5%)', price: '2850', total: '8550' },
      { period: 6, name: '6 месяцев (-10%)', price: '2700', total: '16200' },
      { period: 12, name: '12 месяцев (-15%)', price: '2550', total: '30600' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3300', total: '3300' },
      { period: 3, name: '3 месяца (-5%)', price: '3135', total: '9405' },
      { period: 6, name: '6 месяцев (-10%)', price: '2970', total: '17820' },
      { period: 12, name: '12 месяцев (-15%)', price: '2805', total: '33660' },
    ],
  },
  {
    name: '4м²',
    subscriptionCost: '3420',
    additionalSizes: ['4м²', '12м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3600', total: '3600' },
      { period: 3, name: '3 месяца (-5%)', price: '3420', total: '10260' },
      { period: 6, name: '6 месяцев (-10%)', price: '3240', total: '19440' },
      { period: 12, name: '12 месяцев (-15%)', price: '3060', total: '36720' },
    ],
  },
  {
    name: '5м²',
    subscriptionCost: '4275',
    additionalSizes: ['5м²', '15м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4500', total: '4500' },
      { period: 3, name: '3 месяца (-5%)', price: '4275', total: '12825' },
      { period: 6, name: '6 месяцев (-10%)', price: '4050', total: '24300' },
      { period: 12, name: '12 месяцев (-15%)', price: '3825', total: '45900' },
    ],
  },
  {
    name: '20м²',
    subscriptionCost: '13300',
    additionalSizes: ['20м²', '60м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '14000', total: '14000' },
      { period: 3, name: '3 месяца (-5%)', price: '13300', total: '39900' },
      { period: 6, name: '6 месяцев (-10%)', price: '12600', total: '75600' },
      { period: 12, name: '12 месяцев (-15%)', price: '11900', total: '142800' },
    ],
  },
];

export const GEL: AddressDataSchema = [
  {
    name: '1,5м²',
    additionalText: 'Антресоль',
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
    name: '1,5м²',
    subscriptionCost: '1568',
    additionalSizes: ['1.5м²', '4.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1650', total: '1650' },
      { period: 3, name: '3 месяца (-5%)', price: '1568', total: '4704' },
      { period: 6, name: '6 месяцев (-10%)', price: '1485', total: '8910' },
      { period: 12, name: '12 месяцев (-15%)', price: '1403', total: '16836' },
    ],
  },
  {
    name: '2м²',
    subscriptionCost: '2090',
    additionalSizes: ['2м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2200', total: '2200' },
      { period: 3, name: '3 месяца (-5%)', price: '2090', total: '6270' },
      { period: 6, name: '6 месяцев (-10%)', price: '1980', total: '11880' },
      { period: 12, name: '12 месяцев (-15%)', price: '1870', total: '22440' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3300', total: '3300' },
      { period: 3, name: '3 месяца (-5%)', price: '3135', total: '9405' },
      { period: 6, name: '6 месяцев (-10%)', price: '2970', total: '17820' },
      { period: 12, name: '12 месяцев (-15%)', price: '2805', total: '33660' },
    ],
  },
  {
    name: '6м²',
    subscriptionCost: '4560',
    additionalSizes: ['6м²', '12м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4800', total: '4800' },
      { period: 3, name: '3 месяца (-5%)', price: '4560', total: '13680' },
      { period: 6, name: '6 месяцев (-10%)', price: '4320', total: '25920' },
      { period: 12, name: '12 месяцев (-15%)', price: '4080', total: '48960' },
    ],
  },
  {
    name: '7м²',
    subscriptionCost: '5985',
    additionalSizes: ['7м²', '14м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '6300', total: '6300' },
      { period: 3, name: '3 месяца (-5%)', price: '5985', total: '17955' },
      { period: 6, name: '6 месяцев (-10%)', price: '5670', total: '34020' },
      { period: 12, name: '12 месяцев (-15%)', price: '5355', total: '64260' },
    ],
  },
  {
    name: '10м²',
    subscriptionCost: '7600',
    additionalSizes: ['10м²', '20м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '8000', total: '8000' },
      { period: 3, name: '3 месяца (-5%)', price: '7600', total: '22800' },
      { period: 6, name: '6 месяцев (-10%)', price: '7200', total: '43800' },
      { period: 12, name: '12 месяцев (-15%)', price: '6800', total: '81600' },
    ],
  },
  {
    name: '12м²',
    subscriptionCost: '9120',
    additionalSizes: ['12м²', '24м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9600', total: '9600' },
      { period: 3, name: '3 месяца (-5%)', price: '9120', total: '27360' },
      { period: 6, name: '6 месяцев (-10%)', price: '8640', total: '51840' },
      { period: 12, name: '12 месяцев (-15%)', price: '8160', total: '97920' },
    ],
  },
  {
    name: '12м²',
    subscriptionCost: '9120',
    additionalSizes: ['12м²', '36м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9600', total: '9600' },
      { period: 3, name: '3 месяца (-5%)', price: '9120', total: '27360' },
      { period: 6, name: '6 месяцев (-10%)', price: '8640', total: '51840' },
      { period: 12, name: '12 месяцев (-15%)', price: '8160', total: '97920' },
    ],
  },
  {
    name: '19м²',
    subscriptionCost: '13300',
    additionalSizes: ['19м²', '57м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '13300', total: '13300' },
      { period: 3, name: '3 месяца (-5%)', price: '12635', total: '37905' },
      { period: 6, name: '6 месяцев (-10%)', price: '11970', total: '71820' },
      { period: 12, name: '12 месяцев (-15%)', price: '11305', total: '135660' },
    ],
  },
];

export const SAR_IS27: AddressDataSchema = [
  {
    name: '1м²',
    subscriptionCost: '855',
    additionalSizes: ['1м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '900', total: '900' },
      { period: 3, name: '3 месяца (-5%)', price: '855', total: '2565' },
      { period: 6, name: '6 месяцев (-10%)', price: '810', total: '4860' },
      { period: 12, name: '12 месяцев (-15%)', price: '765', total: '9180' },
    ],
  },
  {
    name: '3м²',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3300', total: '3300' },
      { period: 3, name: '3 месяца (-5%)', price: '3135', total: '9405' },
      { period: 6, name: '6 месяцев (-10%)', price: '2970', total: '17820' },
      { period: 12, name: '12 месяцев (-15%)', price: '2805', total: '33660' },
    ],
  },
  {
    name: '5м²',
    subscriptionCost: '4513',
    additionalSizes: ['5м²', '15м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4750', total: '4750' },
      { period: 3, name: '3 месяца (-5%)', price: '4513', total: '13538' },
      { period: 6, name: '6 месяцев (-10%)', price: '4275', total: '25650' },
      { period: 12, name: '12 месяцев (-15%)', price: '4038', total: '48450' },
    ],
  },
  {
    name: '10м²',
    subscriptionCost: '8550',
    additionalSizes: ['10м²', '30м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9000', total: '9000' },
      { period: 3, name: '3 месяца (-5%)', price: '8550', total: '25650' },
      { period: 6, name: '6 месяцев (-10%)', price: '8100', total: '48600' },
      { period: 12, name: '12 месяцев (-15%)', price: '7650', total: '91800' },
    ],
  },
  {
    name: '14м²',
    subscriptionCost: '10640',
    additionalSizes: ['14м²', '42м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '11200', total: '11200' },
      { period: 3, name: '3 месяца (-5%)', price: '10640', total: '31920' },
      { period: 6, name: '6 месяцев (-10%)', price: '10080', total: '60480' },
      { period: 12, name: '12 месяцев (-15%)', price: '9520', total: '114240' },
    ],
  },
  {
    name: '15м²',
    subscriptionCost: '11400',
    additionalSizes: ['15м²', '45м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '12000', total: '12000' },
      { period: 3, name: '3 месяца (-5%)', price: '11400', total: '34200' },
      { period: 6, name: '6 месяцев (-10%)', price: '10800', total: '64800' },
      { period: 12, name: '12 месяцев (-15%)', price: '10200', total: '122400' },
    ],
  },
  {
    name: '17м²',
    subscriptionCost: '12920',
    additionalSizes: ['17м²', '51м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '13600', total: '13600' },
      { period: 3, name: '3 месяца (-5%)', price: '12920', total: '38760' },
      { period: 6, name: '6 месяцев (-10%)', price: '12240', total: '73440' },
      { period: 12, name: '12 месяцев (-15%)', price: '11560', total: '138720' },
    ],
  },
];
