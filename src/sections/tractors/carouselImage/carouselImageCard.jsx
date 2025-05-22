import React from 'react';

import { Box, Card, Grid, CardMedia } from '@mui/material';

import TractorForm from './form/TractorForm';
import backgroundImage from '../../../../public/background/tractorImage.png';

export default function CarouselImageCard() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ position: 'relative', height: 400 }}>
        <CardMedia component="img" image={backgroundImage} alt="Tractor image" />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            pl: 6,
          }}
        >
          <TractorForm />
        </Box>
      </Card>
    </Grid>
  );
}
