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
          "url('https://i.pinimg.com/originals/54/f8/13/54f81331a9da88c623b96363fb0a4da1.gif')",
        height: { height },
      }}
    >
      <SpiralSpinner size={size} frontColor="#f0aab6" backColor="#474b70" />
    </Stack>
  );
};

export default Loader;
