import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { CourcidResponceType } from "../types/types";
import { infoStyle, sectionStyle, typographyStyle } from "../styles/styles";
import MainLayout from "../layout/MainLayout";
import AnimatedText from "../components/AnimatedText";

const ExchangeRateHomePage = observer(({ courcid }: CourcidResponceType) => {
  return (
    <MainLayout title="Hello, my friend!">
      <Stack
        style={sectionStyle}
        spacing={{ xs: 6, sm: 10, md: 10 }}
        alignItems={"center"}
      >
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          justifyContent={"space-evenly"}
          alignItems={{ xs: "center" }}
          spacing={{ xs: 3, sm: 12, md: 12 }}
        >
          <Link href={"/calculations"}>
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
              <ArrowBackIcon /> Calculations
            </Typography>
          </Link>
          <Link href={"/history"}>
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
              History <ArrowForwardIcon />
            </Typography>
          </Link>
        </Stack>
        <Stack direction={"row"} spacing={{ xs: 2, sm: 18, md: 18 }}>
          {courcid.map((c) => (
            <Stack
              direction={"column"}
              spacing={2}
              key={c.ccy}
              textAlign={"center"}
              padding={"0 10px"}
            >
              <Typography
                variant="h3"
                component="div"
                style={infoStyle}
                bgcolor={"rgba(255,255,255,0.7)"}
              >
                {c.ccy}
              </Typography>
              <Typography
                variant="h4"
                component="div"
                style={infoStyle}
                bgcolor={"rgba(255,255,255,0.7)"}
                color={"rgba(38,38,38,1)"}
              >
                BUY: {Number(c.buy).toFixed(3)}
              </Typography>
              <Typography
                variant="h4"
                component="div"
                style={infoStyle}
                bgcolor={"rgba(255,255,255,0.7)"}
              >
                SALE: {Number(c.sale).toFixed(3)}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <AnimatedText textValue="Privat Bank cash exchange rate (in branches). Last update: today. Have a nice day!" />
      </Stack>
    </MainLayout>
  );
});

export default ExchangeRateHomePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5"
  );
  const courcid = await res.json();
  return { props: { courcid } };
};
