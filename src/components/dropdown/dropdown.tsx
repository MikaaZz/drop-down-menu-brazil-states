import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import styles from './dropdown.module.css';

/* eslint-disable-next-line */
export interface DropdownProps {
  id: string;
  name: string;
  data: any;
  onChange: any;
  startValue: string;
  helperInfos: string;
}

export function Dropdown(props: DropdownProps) {
  return (
    <>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id={props.id || props.name}>{props.startValue}</InputLabel>
        <Select
          id={props.id || props.name}
          name={props.name || props.id}
          onChange={props.onChange}
          label={props.startValue}
          required
        >
          {props.data.map((item: any) => {
            const { label, value } = item;
            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{props.helperInfos}</FormHelperText>
      </FormControl>
    </>
  );
}

export default Dropdown;
