import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";
import {
  ButtonStyle,
  infoStyle,
  sectionStyle,
  typographyStyle,
} from "../styles/styles";

const NotFoundPage = () => {
  return (
    <MainLayout title="Sorry :(">
      <Stack
        style={sectionStyle}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <Link href={"/"}>
          <Typography
            variant="h4"
            component="div"
            style={typographyStyle}
            textAlign={"center"}
            bgcolor={"rgba(255,255,255,0.7)"}
            margin={"0 0 80px 0"}
            sx={ButtonStyle}
          >
            <ArrowBackIcon /> Back to home
          </Typography>
        </Link>
        <Typography
          variant="h4"
          component="div"
          style={infoStyle}
          bgcolor={"rgba(255,255,255,0.7)"}
          fontSize={{ xs: 35, sm: 45, md: 50 }}
        >
          404 | Page not found
        </Typography>
        <Stack sx={{ opacity: 0.9, width: 100 }}>
          <img src="https://img1.picmix.com/output/stamp/thumb/0/2/8/4/2104820_adcd1.gif" />
        </Stack>
      </Stack>
    </MainLayout>
  );
};

export default NotFoundPage;
