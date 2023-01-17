import { ChartValueType, TimeseriesResponseType } from "../../types/types";

export default async function getTimeseriesExchangeRateApi(
  valueChart: ChartValueType
) {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "Bl7NBmnmxFb0qC0RvLk4315ZRq9LPW2d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const { valueDP, currency } = valueChart;

  const response = await fetch(
    `https://api.apilayer.com/exchangerates_data/timeseries?start_date=${valueDP}-01-01&end_date=${valueDP}-12-31&base=${currency}&symbols=UAH`,
    requestOptions
  );
  const data = await response.json();
  return {
    date: Object.keys(data.rates) as string[],
    rate: Object.values(data.rates) as TimeseriesResponseType[],
  };
}
