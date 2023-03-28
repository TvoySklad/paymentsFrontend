export type AddressDataSchema = SizeSchema[];

export interface PeriodsSchema {
  period: number;
  name: string;
  price: string;
  total: string;
}

export interface SizeSchema {
  name: string;
  subscriptionCost: string;
  additionalSizes: string[];
  periods: PeriodsSchema[];
  additionalText?: string;
}
