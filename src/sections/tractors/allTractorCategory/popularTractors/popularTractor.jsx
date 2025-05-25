import { useTheme } from '@mui/material/styles';
import { Box, Card, Button } from '@mui/material';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { Label, labelClasses } from 'src/components/label';

import TractorImage from '../../../../../public/assets/tractorImages/1.jpeg';

export default function PopularTractor({ item, ...other }) {
  const theme = useTheme();

  const renderImage = (
    <Box sx={{ px: 1, pt: 1 }}>
      <Image alt="Popular Tractor" src={TractorImage} ratio="5/4" sx={{ borderRadius: 1.5 }} />
    </Box>
  );

  const renderLabels = (
    <Box
      sx={{
        gap: 1,
        mb: 1.5,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        [`& .${labelClasses.root}`]: {
          typography: 'caption',
          color: 'text.secondary',
        },
      }}
    >
      <Label variant="soft">
        <Iconify icon="mage:electricity-fill" width={16} height={16} sx={{ mr: 0.5 }} /> 47 HP
      </Label>

      <Label variant="soft">
        <Iconify icon="tabler:engine-filled" width={16} height={16} sx={{ mr: 0.5 }} />
        2979 CC
      </Label>
    </Box>
  );

  const renderTarctorName = (
    <Box sx={{ mb: 1.5 }}>
      <Box component="span" sx={{ typography: 'subtitle2', color: 'text.primary' }}>
        Mahindra 575 DI XP Plus
      </Box>
    </Box>
  );

  const renderFooter = (
    <Box
      sx={{
        mt: 2.5,
        gap: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button variant="contained" color="primary" size="small">
        Check Price
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'flex-start' },
        gap: { xs: 2, sm: 3 },
        my: 3,
      }}
    >
      {[...Array(10)].map((_, index) => (
        <Card
          key={index}
          sx={{
            width: {
              xs: '100%',
              sm: 'calc(50% - 12px)',
              md: 213,
            },
          }}
        >
          {renderImage}

          <Box sx={{ px: 2, py: 2.5 }}>
            {renderLabels}
            {renderTarctorName}
            {renderFooter}
          </Box>
        </Card>
      ))}
    </Box>
  );
}
