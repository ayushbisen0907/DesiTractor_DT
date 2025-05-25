import { Box, Tab, Tabs, Button, Typography } from '@mui/material';

import { useTabs } from 'src/hooks/use-tabs';

import LatestTractor from './latestTractors/latestTractors';
import PopularTractor from './popularTractors/popularTractor';
import UpcomingTractor from './upcomingTractors/upcomingTractors';

const TABS = [
  { value: 'popular', label: 'Popular' },
  { value: 'latest', label: 'Latest' },
  {
    value: 'upcoming',
    label: 'Upcoming',
  },
];

export default function AllTractorsCategory() {
  const tabs = useTabs('popular');

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Tractors in 2025
          </Typography>
          <Button variant="contained" color="primary">
            {tabs.value === 'popular' && 'Popular Tractors'}
            {tabs.value === 'latest' && 'Latest Tractors'}
            {tabs.value === 'upcoming' && 'Upcoming Tractors'}
          </Button>
        </Box>

        <Box
          justifyContent={{ xs: 'center', md: 'flex-end' }}
          sx={{
            width: 1,
            bottom: 0,
            zIndex: 9,
            px: { md: 0 },
          }}
        >
          <Tabs value={tabs.value} onChange={tabs.onChange}>
            {TABS.map((tab) => (
              <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
            ))}
          </Tabs>
          {tabs.value === 'popular' && <PopularTractor />}

          {tabs.value === 'latest' && <LatestTractor />}

          {tabs.value === 'upcoming' && <UpcomingTractor />}
        </Box>
      </Box>
    </Box>
  );
}
