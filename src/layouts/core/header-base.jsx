import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

import { Logo } from 'src/components/logo';

import { HeaderSection } from './header-section';
import { Searchbar } from '../components/searchbar';
import { SignInButton } from '../components/sign-in-button';
import { AccountDrawer } from '../components/account-drawer';

// ----------------------------------------------------------------------

export function HeaderBase({
  sx,
  data,
  slots,
  slotProps,
  onOpenNav,
  layoutQuery,

  slotsDisplay: { signIn = true, account = true, searchbar = true, localization = true } = {},

  ...other
}) {
  const theme = useTheme();

  return (
    <HeaderSection
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px dashed',
        borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.3),
        ...sx,
      }}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

            {/* -- Logo -- */}

            <Logo
              width={30}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            />
          </>
        ),
        rightArea: (
          <>
            {slots?.rightAreaStart}

            <Box
              data-area="right"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
              }}
            >
              {/* -- Searchbar -- */}
              {searchbar && <Searchbar data-slot="searchbar" data={data?.nav} />}

              {/* -- Language popover -- */}
              {localization && (
                <TextField
                  size="small"
                  label="Language"
                  select
                  variant="outlined"
                  sx={{ width: 235 }}
                />
              )}

              {/* -- Account drawer -- */}
              {account && <AccountDrawer data-slot="account" data={data?.account} />}

              {/* -- Sign in button -- */}
              {signIn && <SignInButton />}
            </Box>

            {/* {slots?.rightAreaEnd} */}
          </>
        ),
      }}
      slotProps={slotProps}
      {...other}
    />
  );
}
