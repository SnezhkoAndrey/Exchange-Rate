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
          fontSize: 25,
        },
      }}
      InputProps={{
        sx: {
          fontSize: 25,
          width: 150,
        },
      }}
      variant="outlined"
    />
  );
};

export default TextFieldRate;
