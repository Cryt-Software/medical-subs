import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(() => ({
  background: '#FFFFFF',
  paddingTop: 80,
  paddingBottom: 80,
}));

const StyledCard = styled('div')(() => ({
  background: 'linear-gradient(180deg, #C5E4ED 0%, #D4EBF2 50%, #E0F0F5 100%)',
  borderRadius: 32,
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  minHeight: 600,
}));

const FeatureItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 20,
  padding: '24px 0',
  borderBottom: '2px dashed rgba(0,0,0,0.15)',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const IconWrapper = styled('div')(() => ({
  width: 48,
  height: 48,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#1A1A1A',
}));

// Product bottle with hand
const ProductDisplay = styled('div')(() => ({
  position: 'absolute',
  right: '5%',
  bottom: 0,
  width: 350,
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
}));

const HandWithBottle = styled('div')(() => ({
  position: 'relative',
  width: 200,
  height: 450,
}));

const VitaminBottle = styled('div')(() => ({
  position: 'absolute',
  top: 20,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 120,
  height: 200,
  background: 'linear-gradient(135deg, #4DB8B8 0%, #3A9999 50%, #2A8080 100%)',
  borderRadius: '12px 12px 16px 16px',
  boxShadow: '0 20px 60px rgba(77, 184, 184, 0.4), 0 8px 20px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));

const BottleCap = styled('div')(() => ({
  width: '100%',
  height: 32,
  background: 'linear-gradient(180deg, #F5F5F5 0%, #E0E0E0 100%)',
  borderRadius: '10px 10px 0 0',
}));

const BottleBody = styled('div')(() => ({
  flex: 1,
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const Hand = styled('div')(() => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 160,
  height: 200,
  background: 'linear-gradient(180deg, #E8D4C4 0%, #D4B8A4 100%)',
  borderRadius: '40% 40% 0 0',
  opacity: 0.9,
}));

const Finger = styled('div')<{ left: string; height: number; delay: number }>(
  ({ left, height }) => ({
    position: 'absolute',
    bottom: 180,
    left,
    width: 28,
    height,
    background: 'linear-gradient(180deg, #E8D4C4 0%, #D4B8A4 100%)',
    borderRadius: '50% 50% 0 0',
  })
);

// ----------------------------------------------------------------------

const features = [
  {
    icon: 'solar:fingerprint-scan-bold-duotone',
    title: 'Personalised to you',
    description: 'Uniquely formulated to you, your health goals and needs.',
  },
  {
    icon: 'solar:diamond-bold-duotone',
    title: 'Premium ingredients',
    description: 'Vitamins, minerals, botanicals, amino acids and so much more.',
  },
  {
    icon: 'solar:tag-price-bold-duotone',
    title: 'Affordable',
    description: "From $1 a day, we're 70% less than any matching expert routines.",
  },
  {
    icon: 'solar:test-tube-bold-duotone',
    title: 'Formulated by experts',
    description: 'Developed, researched, and tested by leading nutritionists and doctors.',
  },
];

// ----------------------------------------------------------------------

export default function HomeWhyAlyve() {
  return (
    <StyledRoot>
      <Container component={MotionViewport} maxWidth="lg">
        <m.div variants={varFade().inUp}>
          <StyledCard>
            <Grid container sx={{ height: '100%', px: { xs: 4, md: 8 } }}>
              {/* Left side - Features */}
              <Grid xs={12} md={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 4,
                    fontStyle: 'italic',
                  }}
                >
                  Why ALYVE
                </Typography>

                <Stack>
                  {features.map((feature, index) => (
                    <m.div key={feature.title} variants={varFade().inLeft}>
                      <FeatureItem>
                        <IconWrapper>
                          <Iconify icon={feature.icon} width={40} />
                        </IconWrapper>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: 'text.primary',
                              mb: 0.5,
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.6,
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Box>
                      </FeatureItem>
                    </m.div>
                  ))}
                </Stack>
              </Grid>

              {/* Right side - Product with hand */}
              <Grid
                xs={12}
                md={6}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  position: 'relative',
                }}
              >
                <ProductDisplay>
                  <HandWithBottle>
                    {/* Vitamin Bottle */}
                    <VitaminBottle>
                      <BottleCap />
                      <BottleBody>
                        <Box>
                          <Typography
                            sx={{
                              color: 'white',
                              fontWeight: 800,
                              fontSize: '0.9rem',
                              letterSpacing: 2,
                              mb: 2,
                            }}
                          >
                            ALYVE
                          </Typography>
                          <Typography
                            sx={{
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              lineHeight: 1.2,
                            }}
                          >
                            JESS&apos;S
                          </Typography>
                          <Typography
                            sx={{
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              lineHeight: 1.2,
                            }}
                          >
                            DAILYS
                          </Typography>
                          <Typography
                            sx={{
                              color: 'rgba(255,255,255,0.8)',
                              fontSize: '0.5rem',
                              mt: 1,
                              letterSpacing: 0.5,
                            }}
                          >
                            PERSONALISED VITAMINS
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.2)',
                            borderRadius: 2,
                            py: 0.5,
                            px: 1,
                            textAlign: 'center',
                          }}
                        >
                          <Typography
                            sx={{
                              color: 'white',
                              fontSize: '0.55rem',
                              fontWeight: 600,
                              letterSpacing: 0.5,
                            }}
                          >
                            8 DAILY | 30 SERVS
                          </Typography>
                        </Box>
                      </BottleBody>
                    </VitaminBottle>

                    {/* Hand */}
                    <Hand />
                    <Finger left="30px" height={100} delay={0} />
                    <Finger left="55px" height={120} delay={0.1} />
                    <Finger left="80px" height={115} delay={0.2} />
                    <Finger left="105px" height={100} delay={0.3} />
                  </HandWithBottle>
                </ProductDisplay>
              </Grid>
            </Grid>
          </StyledCard>
        </m.div>
      </Container>
    </StyledRoot>
  );
}
