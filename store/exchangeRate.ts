import { makeAutoObservable, runInAction } from "mobx";
import getTimeseriesExchangeRateApi from "../api/api";
import {
  ChartValueType,
  Coursid,
  TimeseriesResponseType,
} from "../types/types";

class ExchangeRate {
  exchangeRates = {
    timeseriesExchangeRates: {
      date: [] as string[],
      rate: [] as TimeseriesResponseType[],
    },
    currency: "USD",
    error: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getTimeseriesExchangeRate(valueChart: ChartValueType) {
    try {
      const response = await getTimeseriesExchangeRateApi(valueChart);
      runInAction(() => {
        this.exchangeRates = {
          ...this.exchangeRates,
          timeseriesExchangeRates: response,
        };
      });
    } catch (error: any) {
      this.setError(error.message);
    }
  }

  changeCurrency(currency: string) {
    try {
      this.exchangeRates = { ...this.exchangeRates, currency: currency };
    } catch (error: any) {
      this.setError(error.message);
    }
  }

  setError(error: string) {
    this.exchangeRates = { ...this.exchangeRates, error: error };
  }
}

export default new ExchangeRate();
