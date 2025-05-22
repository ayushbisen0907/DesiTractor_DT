// components/LocationAutocomplete.jsx

import React from 'react';
import AsyncSelect from 'react-select/async';

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

export default function LocationAutocomplete({ onSelect }) {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={fetchOptions}
      onChange={(selected) => onSelect(selected?.value)}
      placeholder="Enter location"
      styles={{
        container: (base) => ({ ...base, width: '100%' }),
      }}
    />
  );
}
