import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout title="Sorry :(">
      <Stack
        sx={{
          padding: "20px 0 0 0",
          height: "100vh",
          backgroundImage:
            "url('https://thumbs.gfycat.com/GrimDescriptiveChihuahua-max-1mb.gif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <Link href={"/"}>
          <Typography
            variant="h4"
            component="div"
            textAlign={"center"}
            bgcolor={"rgba(255,255,255,0.7)"}
            margin={"0 0 80px 0"}
          >
            <ArrowBackIcon /> Back to home
          </Typography>
        </Link>
        <Typography
          variant="h5"
          component="div"
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
