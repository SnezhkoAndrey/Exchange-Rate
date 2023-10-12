import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={handleChange} autoWidth label={label}>
        {arrayValue.map((arrVal) => (
          <MenuItem key={arrVal} value={`${arrVal}`}>
            {arrVal}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorField;
