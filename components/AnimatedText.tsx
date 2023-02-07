import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { AnimatedTextStyle } from "../styles/styles";

interface PropsType {
  textValue: string;
}

const AnimatedText = ({ textValue }: PropsType) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(textValue);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 20);
    }
  }, [index]);

  return (
    <Box
      textAlign={"center"}
      bgcolor={"rgba(255,255,255,0.7)"}
      style={AnimatedTextStyle}
    >
      {" "}
      {text}{" "}
    </Box>
  );
};

export default AnimatedText;
