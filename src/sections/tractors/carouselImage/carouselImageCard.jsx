import React from 'react';

import { Box, Card, Grid, useTheme, CardMedia, useMediaQuery } from '@mui/material';

import TractorForm from './form/TractorForm';
import backgroundImage from '../../../../public/background/tractorImage.png'; // ensure this path is correct

export default function CarouselImageCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card
        sx={{
          position: 'relative',
          height: { xs: 500, sm: 500, md: 362 },
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={backgroundImage}
          alt="Tractor image"
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.65)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: 'center',
            px: { xs: 2, sm: 4 },
            py: { xs: 2, sm: 4 },
          }}
        >
          <TractorForm />
        </Box>
      </Card>
    </Grid>
  );
}
