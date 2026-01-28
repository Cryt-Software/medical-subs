import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { HEADER } from 'src/layouts/config-layout';

import Iconify from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  position: 'relative',
  background: 'linear-gradient(180deg, #A8D8E8 0%, #E8F4FC 30%, #FFF8F0 70%, #FDF5E8 100%)',
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.H_DESKTOP,
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: HEADER.H_MOBILE,
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
}));

// Product Platform with 3D effect
const ProductPlatform = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 500,
  height: 400,
  margin: '0 auto',
  perspective: '1000px',
  [theme.breakpoints.down('md')]: {
    height: 300,
    maxWidth: 350,
  },
}));

const PlatformBase = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%) rotateX(60deg)',
  width: '80%',
  height: 120,
  background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F0E8 100%)',
  borderRadius: 20,
  boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.05)',
  [theme.breakpoints.down('md')]: {
    height: 80,
  },
}));

const VitaminBottle = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  bottom: 80,
  transform: 'translateX(-50%)',
  width: 140,
  height: 220,
  background: 'linear-gradient(135deg, #4DB8B8 0%, #3A9999 50%, #2A7070 100%)',
  borderRadius: '20px 20px 10px 10px',
  boxShadow: '0 15px 40px rgba(77, 184, 184, 0.4), 0 5px 15px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: 100,
    height: 160,
    bottom: 60,
  },
}));

const BottleLabel = styled('div')(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: 8,
  padding: theme.spacing(1.5),
  width: '85%',
  textAlign: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}));

const Capsule = styled('div')<{ left: string; bottom: string; rotate: string }>(
  ({ left, bottom, rotate }) => ({
    position: 'absolute',
    left,
    bottom,
    width: 40,
    height: 16,
    background: 'linear-gradient(90deg, #D4A853 0%, #E8C47A 50%, #D4A853 100%)',
    borderRadius: 8,
    transform: `rotate(${rotate})`,
    boxShadow: '0 4px 12px rgba(212, 168, 83, 0.3)',
  })
);

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();

  const renderTrustpilot = (
    <m.div variants={varFade().in}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          mb: 3,
          py: 1,
          px: 2,
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.8)',
          display: 'inline-flex',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
          Excellent
        </Typography>
        <Stack direction="row" spacing={0.25}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Box
              key={star}
              sx={{
                width: 20,
                height: 20,
                bgcolor: '#00B67A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Iconify icon="eva:star-fill" width={14} sx={{ color: 'white' }} />
            </Box>
          ))}
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          1,215 reviews on
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
          Trustpilot
        </Typography>
      </Stack>
    </m.div>
  );

  const renderHeadline = (
    <m.div variants={varFade().in}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          color: 'text.primary',
          fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
          lineHeight: 1.2,
          mb: 3,
          fontFamily: theme.typography.fontSecondaryFamily,
        }}
      >
        The all-in-one
        <br />
        personalised vitamins
      </Typography>
    </m.div>
  );

  const renderSubheadline = (
    <m.div variants={varFade().in}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: 'text.secondary',
          mb: 4,
          maxWidth: 480,
          lineHeight: 1.6,
        }}
      >
        UK&apos;s highest rated personalised vitamins. No more guesswork. No more handfuls of pills.
        No more wasted money.
      </Typography>
    </m.div>
  );

  const renderCTA = (
    <m.div variants={varFade().in}>
      <Button
        component={RouterLink}
        href={paths.quiz}
        variant="contained"
        size="large"
        sx={{
          bgcolor: '#F4C430',
          color: 'common.black',
          fontWeight: 700,
          fontSize: '1.1rem',
          borderRadius: 3,
          px: 5,
          py: 1.75,
          boxShadow: '0 8px 24px rgba(244, 196, 48, 0.4)',
          '&:hover': {
            bgcolor: '#E0B02B',
            boxShadow: '0 12px 32px rgba(244, 196, 48, 0.5)',
          },
        }}
      >
        Start Quiz
      </Button>
    </m.div>
  );

  const renderProductDisplay = (
    <m.div variants={varFade().inRight}>
      <ProductPlatform>
        <PlatformBase />

        <VitaminBottle>
          <BottleLabel>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: '#4DB8B8',
                fontSize: '0.65rem',
                letterSpacing: 0.5,
              }}
            >
              POPPY&apos;S DAILY
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#4DB8B8',
                fontSize: '1rem',
                lineHeight: 1,
              }}
            >
              8
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontSize: '0.5rem',
                display: 'block',
                mt: 0.5,
              }}
            >
              PERSONALISED VITAMINS
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.disabled',
                fontSize: '0.45rem',
              }}
            >
              8 DAILY | 30 SERVES
            </Typography>
          </BottleLabel>
        </VitaminBottle>

        {/* Scattered Capsules */}
        <Capsule left="15%" bottom="100px" rotate="-25deg" />
        <Capsule left="75%" bottom="120px" rotate="15deg" />
        <Capsule left="25%" bottom="60px" rotate="45deg" />
        <Capsule left="70%" bottom="70px" rotate="-10deg" />
        <Capsule left="55%" bottom="40px" rotate="30deg" />
      </ProductPlatform>
    </m.div>
  );

  const renderDescription = (
    <Stack
      alignItems={{ xs: 'center', md: 'flex-start' }}
      justifyContent="center"
      sx={{
        height: 1,
        textAlign: { xs: 'center', md: 'left' },
        py: { xs: 4, md: 0 },
      }}
    >
      {renderTrustpilot}
      {renderHeadline}
      {renderSubheadline}
      {renderCTA}
    </Stack>
  );

  return (
    <StyledRoot>
      <StyledWrapper>
        <Container component={MotionContainer} sx={{ height: 1 }}>
          <Grid container spacing={{ xs: 4, md: 8 }} sx={{ height: 1 }} alignItems="center">
            <Grid xs={12} md={6}>
              {renderDescription}
            </Grid>

            <Grid xs={12} md={6}>
              {renderProductDisplay}
            </Grid>
          </Grid>
        </Container>
      </StyledWrapper>
    </StyledRoot>
  );
}
