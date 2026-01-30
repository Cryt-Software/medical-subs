import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(() => ({
  background: '#E8F4F8',
  paddingTop: 80,
  paddingBottom: 80,
}));

const ProfileCard = styled(Card)(() => ({
  border: '1px solid #1A1A1A',
  borderRadius: 16,
  padding: 24,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const ProfileImage = styled('div')<{ bgcolor: string }>(({ bgcolor }) => ({
  width: 120,
  height: 120,
  borderRadius: 12,
  background: bgcolor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 16,
  overflow: 'hidden',
}));

const HealthGoalBadge = styled('span')<{ bordercolor: string; textcolor: string }>(
  ({ bordercolor, textcolor }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 14px',
    borderRadius: 20,
    border: `2px solid ${bordercolor}`,
    color: textcolor,
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: 0.5,
    marginRight: 8,
    marginBottom: 8,
    background: 'transparent',
  })
);

const VitaminCapsule = styled('div')<{ color1: string; color2: string }>(({ color1, color2 }) => ({
  width: 60,
  height: 24,
  borderRadius: 12,
  background: `linear-gradient(90deg, ${color1} 0%, ${color1} 50%, ${color2} 50%, ${color2} 100%)`,
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
}));

const Divider = styled('div')(() => ({
  height: 1,
  background: '#E0E0E0',
  margin: '16px 0',
}));

// ----------------------------------------------------------------------

const profiles = [
  {
    name: 'Jess',
    age: 29,
    city: 'Liverpool',
    imageColor: '#8B4513',
    imageBg: 'linear-gradient(135deg, #D2691E 0%, #8B4513 100%)',
    imageIcon: 'mdi:face-woman',
    healthGoals: [
      { label: 'ENERGY', borderColor: '#9C27B0', textColor: '#7B1FA2' },
      { label: 'BEAUTY', borderColor: '#FFD700', textColor: '#B8860B' },
      { label: 'SLEEP', borderColor: '#CE93D8', textColor: '#8E24AA' },
    ],
    capsuleColor1: '#D4A853',
    capsuleColor2: '#E8C47A',
    ingredients: [
      'Vitamin D3',
      'Vitamin B12',
      'Iron',
      'Biotin',
      'Magnesium',
      'Ashwagandha',
      'Zinc',
      'Vitamin C',
    ],
  },
  {
    name: 'Jack',
    age: 26,
    city: 'Cardiff',
    imageColor: '#5D4037',
    imageBg: 'linear-gradient(135deg, #795548 0%, #5D4037 100%)',
    imageIcon: 'mdi:face-man-shimmer',
    healthGoals: [
      { label: 'FOCUS', borderColor: '#4CAF50', textColor: '#2E7D32' },
      { label: 'MOOD', borderColor: '#00BCD4', textColor: '#0097A7' },
      { label: 'BONES & JOINTS', borderColor: '#FFC107', textColor: '#F57F17' },
    ],
    capsuleColor1: '#6D4C41',
    capsuleColor2: '#8D6E63',
    ingredients: [
      'Omega-3 DHA',
      'Vitamin D3',
      'Vitamin K2',
      'Magnesium',
      'Lion\'s Mane',
      'B-Complex',
      'Calcium',
      'Glucosamine',
    ],
  },
  {
    name: 'Sarah',
    age: 43,
    city: 'London',
    imageColor: '#A1887F',
    imageBg: 'linear-gradient(135deg, #BCAAA4 0%, #A1887F 100%)',
    imageIcon: 'mdi:face-woman-outline',
    healthGoals: [
      { label: 'WEIGHT', borderColor: '#00BCD4', textColor: '#0097A7' },
      { label: 'BEAUTY', borderColor: '#F8BBD9', textColor: '#C2185B' },
      { label: 'IMMUNITY', borderColor: '#2196F3', textColor: '#1565C0' },
    ],
    capsuleColor1: '#D4A853',
    capsuleColor2: '#C9A227',
    ingredients: [
      'Green Tea Extract',
      'Vitamin C',
      'Collagen',
      'Elderberry',
      'Vitamin E',
      'Selenium',
      'Probiotics',
      'Vitamin A',
    ],
  },
];

// ----------------------------------------------------------------------

export default function HomeProfilesDemo() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        {/* Header */}
        <m.div variants={varFade().inUp}>
          <Stack alignItems="center" sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
                textAlign: 'center',
                mb: 2,
              }}
            >
              Vitamins as unique as you
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: 'text.secondary',
                textAlign: 'center',
              }}
            >
              Finally a vitamin made for <em>you</em> and <em>your</em> health goals.
            </Typography>
          </Stack>
        </m.div>

        {/* Profile Cards */}
        <Grid container spacing={3}>
          {profiles.map((profile, index) => (
            <Grid xs={12} md={4} key={profile.name}>
              <m.div variants={varFade().inUp}>
                <ProfileCard>
                  {/* Profile Section */}
                  <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                    <Box>
                      <ProfileImage bgcolor={profile.imageBg}>
                        <Iconify
                          icon={profile.imageIcon}
                          width={64}
                          sx={{ color: 'white', opacity: 0.9 }}
                        />
                      </ProfileImage>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {profile.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {profile.age}, {profile.city}
                      </Typography>
                    </Box>
                    <VitaminCapsule color1={profile.capsuleColor1} color2={profile.capsuleColor2} />
                  </Stack>

                  <Divider />

                  {/* Health Goals Section */}
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        display: 'block',
                        mb: 1.5,
                      }}
                    >
                      HEALTH GOALS:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      {profile.healthGoals.map((goal) => (
                        <HealthGoalBadge
                          key={goal.label}
                          bordercolor={goal.borderColor}
                          textcolor={goal.textColor}
                        >
                          {goal.label}
                        </HealthGoalBadge>
                      ))}
                    </Box>
                  </Box>

                  <Divider />

                  {/* Tailored Formula Section */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        display: 'block',
                        mb: 1.5,
                      }}
                    >
                      TAILORED FORMULA:
                    </Typography>
                    <Grid container spacing={0.5}>
                      {profile.ingredients.map((ingredient) => (
                        <Grid xs={6} key={ingredient}>
                          <Stack direction="row" alignItems="center" spacing={1} sx={{ py: 0.5 }}>
                            <Iconify
                              icon="eva:checkmark-fill"
                              width={18}
                              sx={{ color: '#80D0D0' }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.secondary', fontSize: '0.85rem' }}
                            >
                              {ingredient}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </ProfileCard>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledRoot>
  );
}
