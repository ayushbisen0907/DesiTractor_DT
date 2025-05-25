import { Box, Tab, Tabs, Button, Typography } from '@mui/material';

import { useTabs } from 'src/hooks/use-tabs';

import NewTractorByBrand from './newTractorsByBrand/newTractorByBrand';
import UsedTractorByBrand from './usedTractorsByBrand/usedTractorByBrand';

const TABS = [
  { value: 'newTractor', label: 'New ' },
  { value: 'usedTractor', label: 'Used Tractor' },
];

export default function TractorsByBrand() {
  const tabs = useTabs('newTractor');

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Tractors By Brand
          </Typography>
          <Button variant="contained" color="primary">
            {tabs.value === 'newTractor' && 'New Tractors'}
            {tabs.value === 'usedTractor' && 'Used Tractors'}
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
          {tabs.value === 'newTractor' && <NewTractorByBrand />}

          {tabs.value === 'usedTractor' && <UsedTractorByBrand />}
        </Box>
      </Box>
    </Box>
  );
}
