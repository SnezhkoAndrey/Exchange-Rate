import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import exchangeRate from "../store/exchangeRate";
import TextFieldRate from "../components/TextField";
import SelectorField from "../components/SelectorField";
import { SelectChangeEvent } from "@mui/material";
import { sectionStyle, typographyStyle } from "../styles/styles";
import MainLayout from "../layout/MainLayout";
import AnimatedText from "../components/AnimatedText";
import { CourcidResponceType } from "../types/types";

const CalculationsPage = observer(({ courcid }: CourcidResponceType) => {
  const { currency } = exchangeRate.exchangeRates;

  const [calcValue, setCalcValue] = useState({
    UAH: 1,
    USD: Number(courcid[1].sale),
    EUR: Number(courcid[0].sale),
  });

  const currencyValue: { [key: string]: string } = {
    USD: courcid[1].sale,
    EUR: courcid[0].sale,
  };

  const { UAH, USD, EUR } = calcValue;

  const isUSD = currency === "USD";

  const arrayCurrency = ["USD", "EUR"];

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    exchangeRate.changeCurrency(event.target.value);
  };

  useEffect(() => {
    setCalcValue((prevState) => ({
      ...prevState,
      USD: UAH * Number(courcid[1].sale),
      EUR: UAH * Number(courcid[0].sale),
    }));
  }, [currency]);

  const onChangeForeignCurrency = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    setCalcValue({
      UAH: Number(event.target.value),
      USD: Number(event.target.value) * Number(courcid[1].sale),
      EUR: Number(event.target.value) * Number(courcid[0].sale),
    });
  };

  const onChangeDomesticCurrency = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    setCalcValue({
      USD: Number(event.target.value),
      EUR: Number(event.target.value),
      UAH: Number(event.target.value) / Number(currencyValue[currency]),
    });
  };

  return (
    <MainLayout title="Calculation Page">
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={12}
        style={sectionStyle}
      >
        <Link href={"/"}>
          <Typography
            variant="h4"
            component="div"
            style={typographyStyle}
            textAlign={"center"}
            bgcolor={"rgba(255,255,255,0.7)"}
            sx={{
              "&:active": {
                boxShadow: "none !important",
                transform: "translate(3px)",
              },
            }}
          >
            Back
          </Typography>
        </Link>
        <Stack
          direction={"row"}
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={{ xs: "center" }}
          spacing={6}
        >
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={4}>
            <TextFieldRate
              label={currency === "USD" ? "USD" : "EUR"}
              value={UAH}
              onChange={onChangeForeignCurrency}
            />

            <TextFieldRate
              label="UAH"
              value={isUSD ? USD : EUR}
              onChange={onChangeDomesticCurrency}
            />
          </Stack>

          <SelectorField
            label={"Currency"}
            value={currency}
            handleChange={handleChangeCurrency}
            arrayValue={arrayCurrency}
          />
        </Stack>
        <AnimatedText textValue="Calculations are made at the cash rate (sale) of Privat Bank (in branches). Last update: today. Thank you for using the application!" />
      </Stack>
    </MainLayout>
  );
});

export default CalculationsPage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5"
  );
  const courcid = await res.json();
  return { props: { courcid } };
};
