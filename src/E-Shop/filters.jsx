import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function CheckboxesGroup({
  selectedFilters,
  handleFilterChange,
  filterItems,
}) {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 1,
        mt: 0,
        ml: 5, // Smaller top margin
        border: '1px solid black', // Black border
        backgroundColor: 'grey.200', // Grey background
        p: 4, // Padding for better spacing
        borderRadius: 1,
        height: '99%',
      }}
    >
      <FormControl
        sx={{
          m: 3,
          mt: 0,
        }}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend" sx={{
          '&.Mui-focused': {
            color: 'var(--logo-red)' 
          }
        }}>Продукт</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.maici}
                onChange={handleFilterChange}
                name="maici"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="Маици"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.dukseri}
                onChange={handleFilterChange}
                name="dukseri"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="Дуксери"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.casi}
                onChange={handleFilterChange}
                name="casi"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="Чаши"
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl
        component="fieldset"
        sx={{ m: 3, mt: 0, flexGrow: 1 }}
        variant="standard"
      >
        <FormLabel component="legend" sx={{
          '&.Mui-focused': {
            color: 'var(--logo-red)' 
          }
        }}>Големина</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.XS}
                onChange={handleFilterChange}
                name="XS"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="XS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.S}
                onChange={handleFilterChange}
                name="S"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="S"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.M}
                onChange={handleFilterChange}
                name="M"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="M"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.L}
                onChange={handleFilterChange}
                name="L"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="L"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.XL}
                onChange={handleFilterChange}
                name="XL"
                sx={{
                  color: 'var(--logo-red)',
                  '&.Mui-checked': {
                    color: 'var(--logo-red)',
                  },
                }}
              />
            }
            label="XL"
          />
        </FormGroup>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          mb: 1,
          alignSelf: 'center',
          width: '122%',
          height: '50px',
          background: 'var(--gradient)',
          textTransform: 'none',
          '&:hover': {
            background: 'var(--gradient-hover)',
            scale: '1.05',
          },
        }}
        onClick={filterItems}
      >
        Филтрирај
      </Button>
    </Box>
  );
}
