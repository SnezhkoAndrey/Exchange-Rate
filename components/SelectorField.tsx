import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { SelectorStyle } from "../styles/styles";

interface PropsType {
  label: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  arrayValue: string[] | number[];
}

const SelectorField = ({
  label,
  value,
  handleChange,
  arrayValue,
}: PropsType) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel
        sx={{
          fontFamily: "VT323",
          fontSize: 20,
          color: "rgba(40,22,17)",
        }}
      >
        {label}
      </InputLabel>
      <Select
        style={SelectorStyle}
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
      >
        {arrayValue.map((arrVal) => (
          <MenuItem
            key={arrVal}
            value={`${arrVal}`}
            sx={{
              fontFamily: "VT323",
              fontSize: 25,
              color: "rgba(40,22,17)",
            }}
          >
            {arrVal}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorField;
