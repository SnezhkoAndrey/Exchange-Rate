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

export type DataResponseType = {
  base: string;
  end_date: string;
  rates: {};
  start_date: string;
  success: boolean;
  timeseries: boolean;
};
