// components/LocationAutocomplete.jsx

import React from 'react';
import AsyncSelect from 'react-select/async';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const fetchOptions = async (inputValue) => {
  if (!inputValue) return [];
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputValue)}`
  );
  const data = await response.json();
  return data.map((place) => ({
    label: place.display_name,
    value: place.display_name,
  }));
};

export default function LocationAutocomplete({ onSelect, value }) {
  const theme = useTheme();

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: 40,
      borderRadius: 4,
      borderColor: state.isFocused ? theme.palette.primary.main : theme.palette.grey[400],
      boxShadow: state.isFocused ? `0 0 0 2px ${theme.palette.primary.light}` : 'none',
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
      fontSize: 14,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
      fontSize: 14,
    }),
    input: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 8px',
    }),
    placeholder: (base) => ({
      ...base,
      color: theme.palette.text.secondary,
    }),
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AsyncSelect
        cacheOptions
        loadOptions={fetchOptions}
        onChange={(selected) => onSelect(selected?.value)}
        placeholder="Enter location"
        defaultOptions
        value={value ? { label: value, value } : null}
        styles={customStyles}
        isClearable
      />
    </Box>
  );
}
