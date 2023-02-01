import { Stack } from "@mui/material";
import { SpiralSpinner } from "react-spinners-kit";

interface PropsType {
  size: number;
  height: string;
}

const Loader = ({ size, height }: PropsType) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      padding={5}
      sx={{
        backgroundImage:
          "url('https://thumbs.gfycat.com/GrimDescriptiveChihuahua-max-1mb.gif')",
        height: { height },
      }}
    >
      <SpiralSpinner size={size} frontColor="#f0aab6" backColor="#474b70" />
    </Stack>
  );
};

export default Loader;
