import { useState, useEffect } from "react";
import { Box } from "@mui/system";

interface PropsType {
  textValue: string;
}

const AnimatedText = ({ textValue }: PropsType) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textValue.length) {
      setTimeout(() => {
        setText(text + textValue[index]);
        setIndex(index + 1);
      }, 20);
    }
  }, [index]);

  return (
    <Box
      textAlign={"center"}
      bgcolor={"rgba(255,255,255,0.7)"}
      sx={{
        fontFamily: "VT323",
        fontSize: 20,
        padding: "5px 10px",
        border: "4px double",
        borderColor: "rgba(40,22,17)",
        color: "rgba(40,22,17)",
        width: "content",
        maxWidth: "300px",
      }}
    >
      {text}
    </Box>
  );
};

export default AnimatedText;
