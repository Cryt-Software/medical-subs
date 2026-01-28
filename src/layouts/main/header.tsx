import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          {/* Logo - Left aligned */}
          <Box
            component={RouterLink}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
                letterSpacing: 2,
                fontFamily: theme.typography.fontSecondaryFamily,
              }}
            >
              ALYVE
            </Typography>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Center Navigation */}
          {mdUp && <NavDesktop data={navConfig} />}

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right Section - Icons and CTA */}
          <Stack alignItems="center" direction="row" spacing={{ xs: 1, md: 2 }}>
            {mdUp && (
              <>
                {/* Shopping Bag Icon */}
                <IconButton
                  component={RouterLink}
                  href={paths.shop}
                  sx={{ color: 'text.primary' }}
                >
                  <Iconify icon="solar:bag-3-bold" width={24} />
                </IconButton>

                {/* User Account Icon */}
                <IconButton
                  component={RouterLink}
                  href={paths.authDemo.classic.login}
                  sx={{ color: 'text.primary' }}
                >
                  <Iconify icon="solar:user-circle-bold" width={24} />
                </IconButton>
              </>
            )}

            {/* Start Quiz Button */}
            <Button
              component={RouterLink}
              href={paths.quiz}
              variant="contained"
              sx={{
                bgcolor: '#F4C430',
                color: 'common.black',
                fontWeight: 600,
                borderRadius: 3,
                px: { xs: 2, md: 3 },
                py: 1,
                '&:hover': {
                  bgcolor: '#E0B02B',
                },
              }}
            >
              Start Quiz
            </Button>

            {!mdUp && <NavMobile data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
