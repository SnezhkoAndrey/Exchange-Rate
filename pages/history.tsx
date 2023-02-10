import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import ExchangeRate from "../store/exchangeRate";
import { LineConfig } from "@ant-design/charts";
import dynamic from "next/dynamic";
import { Box } from "@mui/system";
import { SelectChangeEvent } from "@mui/material/Select";
import SelectorField from "../components/SelectorField";
import MainLayout from "../layout/MainLayout";
import AnimatedText from "../components/AnimatedText";
import Loader from "../components/Loader";
import BackgroundStack from "../components/BackgroundStack";

const Line = dynamic(() => import("@ant-design/charts").then((m) => m.Line), {
  ssr: false,
  loading: () => <Loader size={100} height={"100%"} />,
});

const HistoryPage = observer(() => {
  const [valueChart, setValueChart] = useState({
    valueDP: "2023",
    currency: "USD",
  });

  const { valueDP, currency } = valueChart;

  useEffect(() => {
    ExchangeRate.getTimeseriesExchangeRate(valueChart);
  }, [valueChart]);

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setValueChart((prevState) => ({
      ...prevState,
      currency: event.target.value,
    }));
  };
  const handleChangeValueDP = (event: SelectChangeEvent) => {
    setValueChart((prevState) => ({
      ...prevState,
      valueDP: event.target.value,
    }));
  };

  const yearsArr = [2000];
  for (let index = 0; index < 23; index++) {
    let element = yearsArr[index];
    yearsArr.push(element + 1);
  }

  const currencyArr = ["USD", "EUR"];

  const exRate = ExchangeRate.exchangeRates.timeseriesExchangeRates.rate.map(
    (exr, index) => ({
      date: ExchangeRate.exchangeRates.timeseriesExchangeRates.date[index],
      rate: exr.UAH,
    })
  );

  const config: LineConfig = {
    data: exRate,
    autoFit: true,
    height: 250,
    padding: 40,
    xField: "date",
    yField: "rate",
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0,
      end: 1,
    },
    style: {
      fontFamily: "VT323",
    },
  };

  return (
    <MainLayout title="History Page">
      <BackgroundStack spacing={{ xs: 2, md: 2, sm: 2 }}>
        <Link href={"/"}>
          <Typography
            variant="h4"
            component="div"
            textAlign={"center"}
            margin={"0 0 20px 0"}
            bgcolor={"rgba(255,255,255,0.7)"}
          >
            Back
          </Typography>
        </Link>
        <Stack direction={"row"}>
          <SelectorField
            label={"Year"}
            value={valueDP}
            handleChange={handleChangeValueDP}
            arrayValue={yearsArr}
          />
          <SelectorField
            label={"Currency"}
            value={currency}
            handleChange={handleChangeCurrency}
            arrayValue={currencyArr}
          />
        </Stack>
        <Box
          sx={{
            width: "80%",
            background: "rgba(255,255,255, 1)",
            borderRadius: 3,
          }}
        >
          <Line {...config} />
        </Box>
        <AnimatedText textValue="The chart uses NBU cash exchange rate data for the selected year. Last update: today. You are incredible!" />
      </BackgroundStack>
    </MainLayout>
  );
});

export default HistoryPage;
