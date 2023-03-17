export type AddressDataSchema = SizeSchema[];

export interface PeriodsSchema {
  name: string;
  price: string;
  total: string;
}

export interface SizeSchema {
  name: string;
  additionalSizes: string[];
  periods: PeriodsSchema;
  additionalText?: string;
}
