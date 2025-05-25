import React, { useState } from 'react';

import { Card, Grid, TextField, Typography, CardHeader, CardContent } from '@mui/material';

import LocationAutocomplete from './LocationAutocomplete'; // Make sure this is a responsive component too

// Sample data for select fields
const fieldData = [
  { label: 'Location', name: 'location', type: 'location' },
  { label: 'Name', name: 'name', placeholder: 'Enter your name' },
  {
    label: 'Mobile Number',
    name: 'mobileNumber',
    type: 'number',
    placeholder: 'Enter your mobile number',
  },
];

export default function TractorForm() {
  const [formValues, setFormValues] = useState({
    location: '',
    type: '',
    status: '',
  });

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card
      sx={{
        maxWidth: 440,
        px: { xs: 2 },
        py: { xs: 2 },
      }}
    >
      <CardHeader title="Sell Your Used Tractor" sx={{ pb: 0 }} />
      <CardContent>
        <Grid container spacing={3}>
          {fieldData.map((field) => (
            <Grid item xs={12} key={field.name}>
              <Grid container spacing={1} alignItems="flex-start">
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 500, mt: 1 }}
                  >
                    {field.label}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  {field.type === 'location' ? (
                    <LocationAutocomplete
                      onSelect={(value) => handleChange(field.name, value)}
                      value={formValues[field.name]}
                    />
                  ) : (
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      label={field.label}
                      placeholder={field.placeholder || ''}
                      type={field.type === 'number' ? 'number' : 'text'}
                      value={formValues[field.name]}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
