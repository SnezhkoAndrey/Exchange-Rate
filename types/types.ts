export type TimeseriesResponseType = {
  UAH: number;
};

export type ChartValueType = {
  valueDP: string;
  currency: string;
};

export interface Coursid {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

export interface CourcidResponceType {
  courcid: Coursid[];
}
