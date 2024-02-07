import { AddressDataSchema } from "./dbTypes";

export const M75: AddressDataSchema = [
  {
    name: 'XS',
    subscriptionCost: '2700',
    additionalSizes: ['3м²', '8м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3200', total: '3200' },
      { period: 3, name: '3 месяца (-5%)', price: '3040', total: '9120' },
      { period: 6, name: '6 месяцев (-10%)', price: '2880', total: '17280' },
      { period: 12, name: '12 месяцев (-15%)', price: '2720', total: '32640' },
    ],
  },
  {
    name: 'S',
    subscriptionCost: '3600',
    additionalSizes: ['5м²', '13м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4160', total: '4160' },
      { period: 3, name: '3 месяца (-5%)', price: '3952', total: '11856' },
      { period: 6, name: '6 месяцев (-10%)', price: '3744', total: '22464' },
      { period: 12, name: '12 месяцев (-15%)', price: '3536', total: '42432' },
    ],
  },
  {
    name: 'M',
    subscriptionCost: '5400',
    additionalSizes: ['10м²', '27м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '7560', total: '7560' },
      { period: 3, name: '3 месяца (-5%)', price: '7182', total: '21546' },
      { period: 6, name: '6 месяцев (-10%)', price: '6804', total: '40824' },
      { period: 12, name: '12 месяцев (-15%)', price: '6426', total: '77112' },
    ],
  },
  {
    name: 'L',
    subscriptionCost: '7200',
    additionalSizes: ['15м²', '40м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9600', total: '9600' },
      { period: 3, name: '3 месяца (-5%)', price: '9120', total: '27360' },
      { period: 6, name: '6 месяцев (-10%)', price: '8640', total: '51840' },
      { period: 12, name: '12 месяцев (-15%)', price: '8160', total: '97920' },
    ],
  },
];

export const D211: AddressDataSchema = [
  {
    name: '1м³',
    additionalText: 'Антресоль',
    subscriptionCost: '760',
    additionalSizes: ['1м²', '1м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '750', total: '750' },
      { period: 3, name: '3 месяца (-5%)', price: '713', total: '2138' },
      { period: 6, name: '6 месяцев (-10%)', price: '675', total: '4050' },
      { period: 12, name: '12 месяцев (-15%)', price: '638', total: '7650' },
    ],
  },
  {
    name: '2м³',
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
    name: '1.5м³',
    additionalText: 'Антресоль',
    subscriptionCost: '1283',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '900', total: '900' },
      { period: 3, name: '3 месяца (-5%)', price: '855', total: '2565' },
      { period: 6, name: '6 месяцев (-10%)', price: '810', total: '4860' },
      { period: 12, name: '12 месяцев (-15%)', price: '765', total: '9180' },
    ],
  },
  {
    name: '3м³',
    subscriptionCost: '1568',
    additionalSizes: ['1.5м²', '3м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1800', total: '1800' },
      { period: 3, name: '3 месяца (-5%)', price: '1710', total: '5130' },
      { period: 6, name: '6 месяцев (-10%)', price: '1620', total: '9720' },
      { period: 12, name: '12 месяцев (-15%)', price: '1530', total: '18360' },
    ],
  },
  {
    name: '6м³',
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
    name: '9м³',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4050', total: '4050' },
      { period: 3, name: '3 месяца (-5%)', price: '3848', total: '11543' },
      { period: 6, name: '6 месяцев (-10%)', price: '3645', total: '21870' },
      { period: 12, name: '12 месяцев (-15%)', price: '3443', total: '41310' },
    ],
  },
  {
    name: '15м³',
    subscriptionCost: '4275',
    additionalSizes: ['5м²', '15м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '5250', total: '5250' },
      { period: 3, name: '3 месяца (-5%)', price: '4988', total: '14963' },
      { period: 6, name: '6 месяцев (-10%)', price: '4725', total: '28350' },
      { period: 12, name: '12 месяцев (-15%)', price: '4463', total: '53550' },
    ],
  },
  {
    name: '30м³',
    subscriptionCost: '7600',
    additionalSizes: ['10м²', '30м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '9000', total: '9000' },
      { period: 3, name: '3 месяца (-5%)', price: '8550', total: '25650' },
      { period: 6, name: '6 месяцев (-10%)', price: '8100', total: '48600' },
      { period: 12, name: '12 месяцев (-15%)', price: '7650', total: '91800' },
    ],
  },
  {
    name: '45м³',
    subscriptionCost: '9975',
    additionalSizes: ['15м²', '45м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '13500', total: '13500' },
      { period: 3, name: '3 месяца (-5%)', price: '12825', total: '38475' },
      { period: 6, name: '6 месяцев (-10%)', price: '12150', total: '72900' },
      { period: 12, name: '12 месяцев (-15%)', price: '11475', total: '137700' },
    ],
  },
];

export const A13: AddressDataSchema = [
  {
    name: 'XXS',
    subscriptionCost: '585',
    additionalSizes: ['1м²', '1м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '600', total: '600' },
      { period: 3, name: '3 месяца (-5%)', price: '570', total: '1710' },
      { period: 6, name: '6 месяцев (-10%)', price: '540', total: '3240' },
      { period: 12, name: '12 месяцев (-15%)', price: '510', total: '6120' },
    ],
  },
  {
    name: 'XS',
    subscriptionCost: '1755',
    additionalSizes: ['3м²', '7м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2450', total: '2450' },
      { period: 3, name: '3 месяца (-5%)', price: '2328', total: '6983' },
      { period: 6, name: '6 месяцев (-10%)', price: '2205', total: '13230' },
      { period: 12, name: '12 месяцев (-15%)', price: '2083', total: '24990' },
    ],
  },
  {
    name: 'S',
    subscriptionCost: '2925',
    additionalSizes: ['5м²', '11м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3680', total: '3680' },
      { period: 3, name: '3 месяца (-5%)', price: '3496', total: '10488' },
      { period: 6, name: '6 месяцев (-10%)', price: '3312', total: '19872' },
      { period: 12, name: '12 месяцев (-15%)', price: '3128', total: '37536' },
    ],
  },
  {
    name: 'M',
    subscriptionCost: '5400',
    additionalSizes: ['10м²', '23м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '6900', total: '6900' },
      { period: 3, name: '3 месяца (-5%)', price: '6555', total: '19665' },
      { period: 6, name: '6 месяцев (-10%)', price: '6210', total: '37260' },
      { period: 12, name: '12 месяцев (-15%)', price: '5865', total: '70380' },
    ],
  },
];

export const K38: AddressDataSchema = [
  {
    name: '1.5м³',
    additionalText: 'Антресоль',
    subscriptionCost: '1283',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1050', total: '1050' },
      { period: 3, name: '3 месяца (-5%)', price: '998', total: '2993' },
      { period: 6, name: '6 месяцев (-10%)', price: '945', total: '5670' },
      { period: 12, name: '12 месяцев (-15%)', price: '893', total: '10710' },
    ],
  },
  {
    name: '3м³',
    additionalText: 'Бокс',
    subscriptionCost: '1568',
    additionalSizes: ['1.5м²', '3м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1800', total: '1800' },
      { period: 3, name: '3 месяца (-5%)', price: '1710', total: '5130' },
      { period: 6, name: '6 месяцев (-10%)', price: '1620', total: '9720' },
      { period: 12, name: '12 месяцев (-15%)', price: '1530', total: '18360' },
    ],
  },
  {
    name: '6м³',
    subscriptionCost: '1900',
    additionalSizes: ['2м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2400', total: '2400' },
      { period: 3, name: '3 месяца (-5%)', price: '2280', total: '6840' },
      { period: 6, name: '6 месяцев (-10%)', price: '2160', total: '12960' },
      { period: 12, name: '12 месяцев (-15%)', price: '2040', total: '24480' },
    ],
  },
  {
    name: '6м³',
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
    name: '9м³',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3600', total: '3600' },
      { period: 3, name: '3 месяца (-5%)', price: '3420', total: '10260' },
      { period: 6, name: '6 месяцев (-10%)', price: '3240', total: '19440' },
      { period: 12, name: '12 месяцев (-15%)', price: '3060', total: '36720' },
    ],
  },
  {
    name: '12м³',
    subscriptionCost: '3420',
    additionalSizes: ['4м²', '12м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3840', total: '3840' },
      { period: 3, name: '3 месяца (-5%)', price: '3648', total: '10944' },
      { period: 6, name: '6 месяцев (-10%)', price: '3456', total: '20736' },
      { period: 12, name: '12 месяцев (-15%)', price: '3264', total: '39168' },
    ],
  },
  {
    name: '15м³',
    subscriptionCost: '4275',
    additionalSizes: ['5м²', '15м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4800', total: '4800' },
      { period: 3, name: '3 месяца (-5%)', price: '4560', total: '13680' },
      { period: 6, name: '6 месяцев (-10%)', price: '4320', total: '25920' },
      { period: 12, name: '12 месяцев (-15%)', price: '4080', total: '48960' },
    ],
  },
  {
    name: '60м³',
    subscriptionCost: '13300',
    additionalSizes: ['20м²', '60м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '14250', total: '14250' },
      { period: 3, name: '3 месяца (-5%)', price: '13538', total: '40613' },
      { period: 6, name: '6 месяцев (-10%)', price: '12825', total: '76950' },
      { period: 12, name: '12 месяцев (-15%)', price: '12113', total: '145350' },
    ],
  },
];

export const GEL: AddressDataSchema = [
  {
    name: '1.5м³',
    additionalText: 'Антресоль',
    subscriptionCost: '1283',
    additionalSizes: ['1.5м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1350', total: '1350' },
      { period: 3, name: '3 месяца (-5%)', price: '1283', total: '3848' },
      { period: 6, name: '6 месяцев (-10%)', price: '1215', total: '7290' },
      { period: 12, name: '12 месяцев (-15%)', price: '1148', total: '13770' },
    ],
  },
  {
    name: '4.5м³',
    subscriptionCost: '1568',
    additionalSizes: ['1.5м²', '4.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1890', total: '1890' },
      { period: 3, name: '3 месяца (-5%)', price: '1796', total: '5387' },
      { period: 6, name: '6 месяцев (-10%)', price: '1701', total: '10206' },
      { period: 12, name: '12 месяцев (-15%)', price: '1607', total: '19278' },
    ],
  },
  {
    name: '6м³',
    subscriptionCost: '2090',
    additionalSizes: ['2м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2520', total: '2520' },
      { period: 3, name: '3 месяца (-5%)', price: '2394', total: '7182' },
      { period: 6, name: '6 месяцев (-10%)', price: '2268', total: '13608' },
      { period: 12, name: '12 месяцев (-15%)', price: '2142', total: '25704' },
    ],
  },
  {
    name: '9м³',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3600', total: '3600' },
      { period: 3, name: '3 месяца (-5%)', price: '3420', total: '10260' },
      { period: 6, name: '6 месяцев (-10%)', price: '3240', total: '19440' },
      { period: 12, name: '12 месяцев (-15%)', price: '3060', total: '36720' },
    ],
  },
  {
    name: '12м³',
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
    name: '14м³',
    subscriptionCost: '5985',
    additionalSizes: ['7м²', '14м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '5600', total: '5600' },
      { period: 3, name: '3 месяца (-5%)', price: '5320', total: '15960' },
      { period: 6, name: '6 месяцев (-10%)', price: '5040', total: '30240' },
      { period: 12, name: '12 месяцев (-15%)', price: '4760', total: '57120' },
    ],
  },
  {
    name: '20м³',
    subscriptionCost: '7600',
    additionalSizes: ['10м²', '20м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '8000', total: '8000' },
      { period: 3, name: '3 месяца (-5%)', price: '7600', total: '22800' },
      { period: 6, name: '6 месяцев (-10%)', price: '7200', total: '43200' },
      { period: 12, name: '12 месяцев (-15%)', price: '6800', total: '81600' },
    ],
  },
  {
    name: '24м³',
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
    name: '36м³',
    subscriptionCost: '9120',
    additionalSizes: ['12м²', '36м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '10800', total: '10800' },
      { period: 3, name: '3 месяца (-5%)', price: '10260', total: '30780' },
      { period: 6, name: '6 месяцев (-10%)', price: '9720', total: '58320' },
      { period: 12, name: '12 месяцев (-15%)', price: '9180', total: '110160' },
    ],
  },
  {
    name: '57м³',
    subscriptionCost: '13300',
    additionalSizes: ['19м²', '57м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '14000', total: '14000' },
      { period: 3, name: '3 месяца (-5%)', price: '13300', total: '39900' },
      { period: 6, name: '6 месяцев (-10%)', price: '12600', total: '75600' },
      { period: 12, name: '12 месяцев (-15%)', price: '11900', total: '142800' },
    ],
  },
];

export const SAR_IS27: AddressDataSchema = [
  {
    name: '1.5м³',
    subscriptionCost: '855',
    additionalSizes: ['1м²', '1.5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '750', total: '750' },
      { period: 3, name: '3 месяца (-5%)', price: '713', total: '2138' },
      { period: 6, name: '6 месяцев (-10%)', price: '675', total: '4050' },
      { period: 12, name: '12 месяцев (-15%)', price: '638', total: '7650' },
    ],
  },
  {
    name: '9м³',
    subscriptionCost: '3135',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '3240', total: '3240' },
      { period: 3, name: '3 месяца (-5%)', price: '3078', total: '9234' },
      { period: 6, name: '6 месяцев (-10%)', price: '2916', total: '17496' },
      { period: 12, name: '12 месяцев (-15%)', price: '2754', total: '33048' },
    ],
  },
  {
    name: '15м³',
    subscriptionCost: '4513',
    additionalSizes: ['5м²', '15м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4800', total: '4800' },
      { period: 3, name: '3 месяца (-5%)', price: '4560', total: '13680' },
      { period: 6, name: '6 месяцев (-10%)', price: '4320', total: '25920' },
      { period: 12, name: '12 месяцев (-15%)', price: '4080', total: '48960' },
    ],
  },
  {
    name: '30м³',
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
    name: '42м³',
    subscriptionCost: '10640',
    additionalSizes: ['14м²', '42м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '10500', total: '10500' },
      { period: 3, name: '3 месяца (-5%)', price: '9975', total: '29925' },
      { period: 6, name: '6 месяцев (-10%)', price: '9450', total: '56700' },
      { period: 12, name: '12 месяцев (-15%)', price: '8925', total: '107100' },
    ],
  },
  {
    name: '45м³',
    subscriptionCost: '11400',
    additionalSizes: ['15м²', '45м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '11250', total: '11250' },
      { period: 3, name: '3 месяца (-5%)', price: '10688', total: '32063' },
      { period: 6, name: '6 месяцев (-10%)', price: '10125', total: '60750' },
      { period: 12, name: '12 месяцев (-15%)', price: '9563', total: '114750' },
    ],
  },
  {
    name: '51м³',
    subscriptionCost: '12920',
    additionalSizes: ['17м²', '51м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '12750', total: '12750' },
      { period: 3, name: '3 месяца (-5%)', price: '12113', total: '36338' },
      { period: 6, name: '6 месяцев (-10%)', price: '11475', total: '68850' },
      { period: 12, name: '12 месяцев (-15%)', price: '10838', total: '130050' },
    ],
  },
];

export const ROS148: AddressDataSchema = [
  {
    name: '1,5м³',
    subscriptionCost: '2700',
    additionalSizes: ['1,5м²', '1,5м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '900', total: '900' },
      { period: 3, name: '3 месяца (-5%)', price: '855', total: '2565' },
      { period: 6, name: '6 месяцев (-10%)', price: '810', total: '4860' },
      { period: 12, name: '12 месяцев (-15%)', price: '765', total: '9180' },
    ],
  },
  {
    name: '2,2м³',
    subscriptionCost: '3600',
    additionalSizes: ['1,5м²', '2,2м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '1350', total: '1350' },
      { period: 3, name: '3 месяца (-5%)', price: '1283', total: '3848' },
      { period: 6, name: '6 месяцев (-10%)', price: '1215', total: '7290' },
      { period: 12, name: '12 месяцев (-15%)', price: '1148', total: '13770' },
    ],
  },
  {
    name: '6м³',
    subscriptionCost: '5400',
    additionalSizes: ['2м²', '6м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '2700', total: '2700' },
      { period: 3, name: '3 месяца (-5%)', price: '2565', total: '7695' },
      { period: 6, name: '6 месяцев (-10%)', price: '2430', total: '14580' },
      { period: 12, name: '12 месяцев (-15%)', price: '2295', total: '27540' },
    ],
  },
  {
    name: '9м³',
    subscriptionCost: '7200',
    additionalSizes: ['3м²', '9м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4050', total: '4050' },
      { period: 3, name: '3 месяца (-5%)', price: '3848', total: '11543' },
      { period: 6, name: '6 месяцев (-10%)', price: '3645', total: '21870' },
      { period: 12, name: '12 месяцев (-15%)', price: '3443', total: '41310' },
    ],
  },
  {
    name: '12м³',
    subscriptionCost: '7200',
    additionalSizes: ['4м²', '12м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '4800', total: '4800' },
      { period: 3, name: '3 месяца (-5%)', price: '4560', total: '13680' },
      { period: 6, name: '6 месяцев (-10%)', price: '4320', total: '25920' },
      { period: 12, name: '12 месяцев (-15%)', price: '4080', total: '48960' },
    ],
  },
  {
    name: '15м³',
    subscriptionCost: '7200',
    additionalSizes: ['5м²', '15м³'],
    periods: [
      { period: 1, name: '1 месяц', price: '5250', total: '5250' },
      { period: 3, name: '3 месяца (-5%)', price: '4988', total: '14963' },
      { period: 6, name: '6 месяцев (-10%)', price: '4725', total: '28350' },
      { period: 12, name: '12 месяцев (-15%)', price: '4463', total: '53550' },
    ],
  },
];

