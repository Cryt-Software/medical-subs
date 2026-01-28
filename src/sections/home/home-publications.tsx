import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(() => ({
  background: 'linear-gradient(180deg, #FDF5E8 0%, #FFFFFF 100%)',
  paddingTop: 60,
  paddingBottom: 60,
}));

// Simulated publication logos using text
const publications = [
  { name: 'The Standard', fontWeight: 700, fontStyle: 'normal' },
  { name: 'Olive', fontWeight: 400, fontStyle: 'italic' },
  { name: 'VOGUE', fontWeight: 700, fontStyle: 'normal', letterSpacing: 4 },
  { name: "Men's Health", fontWeight: 700, fontStyle: 'normal' },
  { name: 'The Independent', fontWeight: 400, fontStyle: 'normal' },
  { name: 'ELLE', fontWeight: 700, fontStyle: 'normal', letterSpacing: 6 },
  { name: 'GQ', fontWeight: 700, fontStyle: 'normal', letterSpacing: 2 },
  { name: 'Evening Standard', fontWeight: 400, fontStyle: 'normal' },
];

// ----------------------------------------------------------------------

export default function HomePublications() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <m.div variants={varFade().in}>
          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              display: 'block',
              mb: 4,
              letterSpacing: 2,
            }}
          >
            AS SEEN IN
          </Typography>
        </m.div>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 3, md: 5 }}
          sx={{ opacity: 0.6 }}
        >
          {publications.map((pub, index) => (
            <m.div key={pub.name} variants={varFade().in}>
              <Box
                sx={{
                  px: { xs: 1, md: 2 },
                  py: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: pub.fontWeight,
                    fontStyle: pub.fontStyle,
                    letterSpacing: pub.letterSpacing || 0,
                    color: 'text.primary',
                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {pub.name}
                </Typography>
              </Box>
            </m.div>
          ))}
        </Stack>
      </Container>
    </StyledRoot>
  );
}
