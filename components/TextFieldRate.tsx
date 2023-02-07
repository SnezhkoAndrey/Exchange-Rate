import { TextField } from "@mui/material";

interface PropsType {
  label: string;
  value: number;
  onChange?: (event: React.ChangeEvent<{ value: string }>) => void;
}

const TextFieldRate = ({ label, value, onChange }: PropsType) => {
  return (
    <TextField
      label={label}
      value={value ? Number(value.toFixed(3)) : ""}
      type="number"
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
        sx: {
          fontFamily: "VT323",
          fontSize: 25,
          color: "rgba(40,22,17)",
        },
      }}
      InputProps={{
        sx: {
          fontFamily: "VT323",
          fontSize: 25,
          color: "rgba(40,22,17)",
          width: 150,
        },
      }}
      variant="standard"
    />
  );
};

export default TextFieldRate;
