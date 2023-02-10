import { Stack } from "@mui/system";

interface PropsType {
  children: React.ReactNode;
  spacing: {
    xs: number;
    md: number;
    sm: number;
  };
}

const BackgroundStack = ({ children, spacing }: PropsType) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      spacing={spacing}
      sx={{
        padding: "20px 0 0 0",
        height: "100vh",
        backgroundImage:
          "url('https://thumbs.gfycat.com/GrimDescriptiveChihuahua-max-1mb.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </Stack>
  );
};

export default BackgroundStack;
