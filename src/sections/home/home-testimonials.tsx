import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(() => ({
  background: '#F8F8F8',
  paddingTop: 80,
  paddingBottom: 80,
  overflow: 'hidden',
}));

const VideoThumbnail = styled('div')<{ bgcolor: string }>(({ bgcolor }) => ({
  position: 'relative',
  width: 240,
  height: 420,
  borderRadius: 20,
  background: bgcolor,
  flexShrink: 0,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const PlayButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 56,
  height: 56,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
}));

const VideoCaption = styled('div')(() => ({
  position: 'absolute',
  bottom: 16,
  left: 12,
  right: 12,
  color: 'white',
  fontSize: '0.85rem',
  fontWeight: 500,
  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  lineHeight: 1.4,
}));

const TopCaption = styled('div')(() => ({
  position: 'absolute',
  top: 16,
  left: 12,
  right: 12,
  color: 'white',
  fontSize: '0.85rem',
  fontWeight: 500,
  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  lineHeight: 1.4,
}));

const PersonIcon = styled('div')<{ top?: string; iconcolor?: string }>(
  ({ top = '35%', iconcolor = 'rgba(255,255,255,0.3)' }) => ({
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translateX(-50%)',
    color: iconcolor,
  })
);

const ProductDisplay = styled('div')(() => ({
  position: 'absolute',
  bottom: 80,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
}));

// ----------------------------------------------------------------------

const testimonials = [
  {
    id: 1,
    name: 'Emma',
    bgGradient: 'linear-gradient(180deg, #D4B896 0%, #A67C52 50%, #8B6914 100%)',
    icon: 'mdi:face-woman',
    iconColor: 'rgba(255,255,255,0.25)',
    caption: null,
    topCaption: null,
    hasProduct: false,
  },
  {
    id: 2,
    name: 'Sophie',
    bgGradient: 'linear-gradient(180deg, #6B7B8C 0%, #4A5568 50%, #2D3748 100%)',
    icon: 'mdi:face-woman-profile',
    iconColor: 'rgba(255,255,255,0.25)',
    caption: 'I was always tired before...',
    topCaption: null,
    hasProduct: false,
  },
  {
    id: 3,
    name: 'Charlotte',
    bgGradient: 'linear-gradient(180deg, #E8DCC8 0%, #C9B896 50%, #A89070 100%)',
    icon: 'mdi:face-woman-shimmer',
    iconColor: 'rgba(255,255,255,0.3)',
    caption: null,
    topCaption: 'Everyone needs to give this a go!',
    hasProduct: true,
  },
  {
    id: 4,
    name: 'Olivia',
    bgGradient: 'linear-gradient(180deg, #3D3D3D 0%, #2A2A2A 50%, #1A1A1A 100%)',
    icon: 'mdi:face-woman-outline',
    iconColor: 'rgba(255,255,255,0.2)',
    caption: 'Best investment in my health',
    topCaption: null,
    hasProduct: true,
  },
  {
    id: 5,
    name: 'James',
    bgGradient: 'linear-gradient(180deg, #5B7A9D 0%, #3D5A80 50%, #2C4A6E 100%)',
    icon: 'mdi:face-man',
    iconColor: 'rgba(255,255,255,0.25)',
    caption: 'My daily essential now',
    topCaption: null,
    hasProduct: false,
  },
];

// ----------------------------------------------------------------------

export default function HomeTestimonials() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        {/* Header */}
        <m.div variants={varFade().inUp}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            sx={{ mb: 6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
                mb: { xs: 1, md: 0 },
              }}
            >
              Trusted & loved by 30,000+
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: 'text.secondary',
              }}
            >
              Everyday people. Every day nutrition.
            </Typography>
          </Stack>
        </m.div>
      </Container>

      {/* Video Gallery - Full width horizontal scroll */}
      <m.div variants={varFade().inUp}>
        <Box
          sx={{
            display: 'flex',
            gap: 2.5,
            px: { xs: 2, md: 8 },
            pb: 2,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              background: '#E0E0E0',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#BDBDBD',
              borderRadius: 4,
              '&:hover': {
                background: '#9E9E9E',
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              variants={varFade().inRight}
              style={{ scrollSnapAlign: 'start' }}
            >
              <VideoThumbnail bgcolor={testimonial.bgGradient}>
                {/* Person silhouette icon */}
                <PersonIcon iconcolor={testimonial.iconColor}>
                  <Iconify icon={testimonial.icon} width={100} />
                </PersonIcon>

                {/* Product display for some videos */}
                {testimonial.hasProduct && (
                  <ProductDisplay>
                    {/* ALYVE Box */}
                    <Box
                      sx={{
                        width: 70,
                        height: 50,
                        bgcolor: '#C4A77D',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.6rem',
                          letterSpacing: 1,
                        }}
                      >
                        ALYVE
                      </Typography>
                    </Box>
                    {/* Vitamin Bottle */}
                    <Box
                      sx={{
                        width: 35,
                        height: 55,
                        background: 'linear-gradient(135deg, #4DB8B8 0%, #3A9999 100%)',
                        borderRadius: '8px 8px 4px 4px',
                        boxShadow: '0 4px 12px rgba(77, 184, 184, 0.4)',
                      }}
                    />
                  </ProductDisplay>
                )}

                {/* Play button */}
                <PlayButton>
                  <Iconify icon="solar:play-bold" width={24} />
                </PlayButton>

                {/* Top caption */}
                {testimonial.topCaption && <TopCaption>{testimonial.topCaption}</TopCaption>}

                {/* Bottom caption */}
                {testimonial.caption && <VideoCaption>{testimonial.caption}</VideoCaption>}
              </VideoThumbnail>
            </m.div>
          ))}
        </Box>
      </m.div>
    </StyledRoot>
  );
}
