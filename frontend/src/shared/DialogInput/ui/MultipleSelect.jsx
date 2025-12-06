import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Фронтенд',
  'Бекенд',
  'Дизайнер',
  'Продакт',
  'Тестировщик',
  'Аналитик',
  'ML-инженер',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelectChip({ 
  value: controlledValue, 
  onChange: onValueChange,
  label = "Выберите ваш стек"
}) {
  const theme = useTheme();
  
  // Используем контролируемое значение, если оно передано, иначе локальное состояние
  const [localValue, setLocalValue] = React.useState([]);
  const personName = controlledValue !== undefined ? controlledValue : localValue;
  const isControlled = controlledValue !== undefined;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    
    const newValue = typeof value === 'string' ? value.split(',') : value;
    
    if (isControlled) {
      // Если компонент контролируемый, вызываем callback
      if (onValueChange) {
        onValueChange(newValue);
      }
    } else {
      // Если компонент неконтролируемый, используем локальное состояние
      setLocalValue(newValue);
    }
  };

  return (
    <div>
      <FormControl sx={{ marginTop: 2, minWidth: 250 }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}