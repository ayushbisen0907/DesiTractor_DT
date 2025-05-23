import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import CarouselImageCard from 'src/sections/tractors/carouselImage/carouselImageCard';

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
      </DashboardContent>
    </>
  );
}
