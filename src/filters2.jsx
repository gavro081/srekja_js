import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { listings } from './listings';

export default function CheckboxesGroup({ onFiltersChange }) {
  const [state, setState] = React.useState({
    tags: {},
    employmentTypes: {},
    experienceLevels: {},
  });

  const handleChange = (category) => (event) => {
    const newState = {
      ...state,
      [category]: {
        ...state[category],
        [event.target.name]: event.target.checked,
      },
    };
    setState(newState);
  };

  const handleSearch = () => {
    if (onFiltersChange) {
      onFiltersChange(state);
    }
  };

  const tags = [...new Set(listings.flatMap((item) => item.tag))];
  const employmentTypes = [
    ...new Set(listings.flatMap((item) => item.employmentType)),
  ];
  const experienceLevels = [
    ...new Set(listings.flatMap((item) => item.experienceLevel)),
  ];
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      ml: 3,
      backgroundColor: 'var(--body-white)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      marginBlock: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'start',
      paddingBottom: '4rem',
    }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{
          '&.Mui-focused': {
            color: 'var(--logo-red)' 
          }
        }}>Поле</FormLabel>
        <FormGroup>
          {tags.map((tag, index) => (
            <FormControlLabel
              key={`tag-${index}-${tag}`}
              control={
                <Checkbox
                  checked={!!state.tags[tag]}
                  onChange={handleChange('tags')}
                  name={tag}
                  sx={{
                    color: 'var(--logo-red)',
                    '&.Mui-checked': {
                      color: 'var(--logo-red)',
                    },
                  }}
                />
              }
              label={tag}
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{
          '&.Mui-focused': {
            color: 'var(--logo-red)' 
          }
        }}>Работно време</FormLabel>
        <FormGroup>
          {employmentTypes.map((tag, index) => (
            <FormControlLabel
              key={`type-${index}-${tag}`}
              control={
                <Checkbox
                  checked={!!state.employmentTypes[tag]}
                  onChange={handleChange('employmentTypes')}
                  name={tag}
                  sx={{
                    color: 'var(--logo-red)',
                    '&.Mui-checked': {
                      color: 'var(--logo-red)',
                    },
                  }}
                />
              }
              label={tag}
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{
          '&.Mui-focused': {
            color: 'var(--logo-red)' 
          }
        }}>Ниво на искуство</FormLabel>
        <FormGroup>
          {experienceLevels.map((level, index) => (
            <FormControlLabel
              key={`level-${index}-${level}`}
              control={
                <Checkbox
                  checked={!!state.experienceLevels[level]}
                  onChange={handleChange('experienceLevels')}
                  name={level}
                  sx={{
                    color: 'var(--logo-red)',
                    '&.Mui-checked': {
                      color: 'var(--logo-red)',
                    },
                  }}
                />
              }
              label={level}
            />
          ))}
        </FormGroup>
      </FormControl>
      <button
        onClick={handleSearch}
        style={{
          background: 'linear-gradient(45deg, var(--logo-orange), var(--logo-red))',
          border: 'none',
          color: 'white',
          padding: '8px 16px',
          marginTop: '16px',
          marginLeft: '16px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          width: '50%',
          alignSelf: 'start',
          textAlign: 'center',
        }}
      >
        Пребарај
      </button>
    </Box>
  );
}
