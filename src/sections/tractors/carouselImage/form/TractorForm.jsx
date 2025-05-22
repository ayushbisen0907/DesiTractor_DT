import React, { useState } from 'react';

import {
  Box,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
  CardHeader,
  CardContent,
} from '@mui/material';

import LocationAutocomplete from './LocationAutocomplete';

// Sample data for select fields
const fieldData = [
  { label: 'Location', name: 'location', type: 'location' },
  { label: 'Type', name: 'type', options: ['Tractor', 'Harvester', 'Sprayer'] },
  { label: 'Status', name: 'status', options: ['Active', 'Inactive', 'Maintenance'] },
];

export default function TractorForm() {
  const [formValues, setFormValues] = useState({
    location: '',
  });

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card sx={{ width: { xs: '100%', sm: 450 } }}>
      <CardHeader title="Sell Your Used Tractor" />
      <CardContent>
        <Grid container spacing={2}>
          {fieldData.map((field) => (
            <Grid item xs={12} key={field.name}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 150 }}>
                  {field.label}
                </Typography>
                {field.type === 'location' ? (
                  <LocationAutocomplete onSelect={(value) => handleChange(field.name, value)} />
                ) : (
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label={field.label}
                    select
                    value={formValues[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    {field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
