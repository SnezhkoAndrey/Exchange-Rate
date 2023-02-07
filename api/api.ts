import { DataResponseType, TimeseriesResponseType } from "../types/types";

const HTTPClient = () => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", process.env.NEXT_PUBLIC_API as string);
  const baseURL = process.env.NEXT_PUBLIC_URL as string;

  async function fetchJSON(endpoint: string, options = {}) {
    const response = await fetch(baseURL + endpoint, {
      ...options,
      headers: myHeaders,
    });

    const data = (await response.json()) as DataResponseType;

    return {
      date: Object.keys(data.rates) as string[],
      rate: Object.values(data.rates) as TimeseriesResponseType[],
    };
  }

  const GET = async (endpoint: string) => {
    return await fetchJSON(endpoint, {
      method: "GET",
    });
  };

  return { GET };
};

export default HTTPClient;
