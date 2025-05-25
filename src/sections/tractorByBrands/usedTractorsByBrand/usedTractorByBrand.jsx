import { Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Image } from 'src/components/image';

import Solic from '../../../../public/assets/tractorBrandImages/solis-1744803220 (1).png';
import Eicher from '../../../../public/assets/tractorBrandImages/eicher-1608095225 (1).webp';
import Kubota from '../../../../public/assets/tractorBrandImages/kubota-1579512571 (1).webp';
import Swaraj from '../../../../public/assets/tractorBrandImages/swaraj-1608095532 (1).webp';
import Shakti from '../../../../public/assets/tractorBrandImages/vst-shakti-1623048840.webp';
import Mahindra from '../../../../public/assets/tractorBrandImages/mahindra-1673872647 (1).webp';
import Farmtrac from '../../../../public/assets/tractorBrandImages/farmtrac-1579511831 (1).webp';
import Sonalika from '../../../../public/assets/tractorBrandImages/sonalika-1725262747 (1).webp';
import JohnDeere from '../../../../public/assets/tractorBrandImages/john-deere-1579511882 (1).webp';
import Powertrac from '../../../../public/assets/tractorBrandImages/powertrac-1579511958-2 (1).webp';
import NewHolland from '../../../../public/assets/tractorBrandImages/new-holland-1700115365 (1).webp';
import MessayFerguson from '../../../../public/assets/tractorBrandImages/massey-ferguson-1579512590 (1).webp';

const tractorBrands = [
  { name: 'Mahindra', image: Mahindra },
  { name: 'Eicher', image: Eicher },
  { name: 'John Deere', image: JohnDeere },
  { name: 'Kubota', image: Kubota },
  { name: 'Farmtrac', image: Farmtrac },
  { name: 'Massey Ferguson', image: MessayFerguson },
  { name: 'New Holland', image: NewHolland },
  { name: 'Powertrac', image: Powertrac },
  { name: 'Solis', image: Solic },
  { name: 'Swaraj', image: Swaraj },
  { name: 'Sonalika', image: Sonalika },
  { name: 'VST Shakti', image: Shakti },
];

export default function UsedTractorByBrand({ item, ...other }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 2, sm: 3 },
        my: 3,
      }}
    >
      {tractorBrands.map((brand, index) => (
        <Card
          key={index}
          sx={{
            width: {
              xs: 'calc(50% - 8px)',
              sm: 'calc(50% - 12px)',
              md: 174,
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 2,
            cursor: 'pointer',
            ':hover': {
              boxShadow: theme.customShadows.z20,
              bgcolor: 'background.neutral',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 62,
              height: 62,
              mb: 1.5,
            }}
          >
            <Image
              alt={brand.name}
              src={brand.image}
              sx={{
                width: 62,
                height: 62,
                borderRadius: 1.5,
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box sx={{ textAlign: 'center', px: 1 }}>
            <Box component="span" sx={{ typography: 'subtitle2', color: 'text.primary' }}>
              {brand.name}
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
