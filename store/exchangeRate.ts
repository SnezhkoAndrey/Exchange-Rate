import { makeAutoObservable, runInAction } from "mobx";
import getTimeseriesExchangeRateApi from "../pages/api/api";
import {
  ChartValueType,
  Coursid,
  TimeseriesResponseType,
} from "../types/types";

class ExchangeRate {
  exchangeRates = {
    courcid: {} as Coursid[],
    timeseriesExchangeRates: {
      date: [] as string[],
      rate: [] as TimeseriesResponseType[],
    },
    currency: "USD",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getTimeseriesExchangeRate(valueChart: ChartValueType) {
    const response = await getTimeseriesExchangeRateApi(valueChart);
    runInAction(() => {
      this.exchangeRates = {
        ...this.exchangeRates,
        timeseriesExchangeRates: response,
      };
    });
  }

  getExchangeRate(response: Coursid[]) {
    this.exchangeRates = { ...this.exchangeRates, courcid: response };
  }

  changeCurrency(currency: string) {
    this.exchangeRates = { ...this.exchangeRates, currency: currency };
  }
}

export default new ExchangeRate();
