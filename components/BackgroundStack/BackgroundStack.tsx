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
          "url('https://i.pinimg.com/originals/54/f8/13/54f81331a9da88c623b96363fb0a4da1.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </Stack>
  );
};

export default BackgroundStack;
