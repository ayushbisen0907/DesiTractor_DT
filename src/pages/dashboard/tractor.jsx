import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import TractorsByBrand from 'src/sections/tractorByBrands/tractorsByBrand';
import CarouselImageCard from 'src/sections/tractors/carouselImage/carouselImageCard';
import AllTractorsCategory from 'src/sections/tractors/allTractorCategory/allTractorsCategory';

// ----------------------------------------------------------------------

const metadata = { title: `Tractors - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <DashboardContent maxWidth="xl">
        <CarouselImageCard />
        <Box sx={{ mt: 4 }}>
          <AllTractorsCategory />
        </Box>
        <Box sx={{ mt: 4 }}>
          <TractorsByBrand />
        </Box>
      </DashboardContent>
    </>
  );
}
