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
      <InputLabel
        sx={{ fontFamily: "VT323", fontSize: 20, color: "rgba(40,22,17)" }}
      >
        {label}
      </InputLabel>
      <Select
        sx={{
          fontFamily: "VT323",
          borderRadius: 0,
          fontSize: 25,
          background: "rgba(255,255,255,0.8)",
          color: "rgba(40,22,17)",
        }}
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
      >
        {arrayValue.map((av) => (
          <MenuItem
            key={av}
            value={`${av}`}
            sx={{ fontFamily: "VT323", fontSize: 25, color: "rgba(40,22,17)" }}
          >
            {av}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorField;
