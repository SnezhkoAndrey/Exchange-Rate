import { makeAutoObservable, runInAction } from "mobx";
import HTTPClient from "../api/api";
import { ChartValueType, TimeseriesResponseType } from "../types/types";

const { GET } = HTTPClient();

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
    const { valueDP, currency } = valueChart;

    try {
      const response = await GET(
        `timeseries?start_date=${valueDP}-01-01&end_date=${valueDP}-12-31&base=${currency}&symbols=UAH`
      );
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
