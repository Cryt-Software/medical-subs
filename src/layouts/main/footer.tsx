import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledNewsletterSection = styled('div')(() => ({
  backgroundColor: '#3D3D3D',
  padding: '48px 0',
}));

const StyledMainFooter = styled('div')(() => ({
  backgroundColor: '#2D2D2D',
  padding: '60px 0 40px',
}));

const StyledBottomBar = styled('div')(() => ({
  backgroundColor: '#2D2D2D',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  padding: '24px 0',
}));

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: 30,
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 20px',
  },
}));

// ----------------------------------------------------------------------

const SHOP_LINKS = [
  { name: 'Bundle Builder', href: '/shop/bundle-builder' },
  { name: 'Personalised Vitamins', href: '/shop/personalised-vitamins' },
  { name: 'Blood Tests', href: '/shop/blood-tests' },
  { name: 'Magnesium+', href: '/shop/magnesium' },
  { name: 'Daily Biotic', href: '/shop/daily-biotic' },
  { name: 'Omega 3', href: '/shop/omega-3' },
  { name: 'Nutritionist Consultation', href: '/shop/consultation' },
  { name: 'Tailored Meal Plan', href: '/shop/meal-plan' },
  { name: 'Eco Water Bottle', href: '/shop/water-bottle' },
  { name: 'E-Gift Card', href: '/shop/gift-card' },
];

const LEARN_LINKS = [
  { name: 'Our Story', href: '/our-story' },
  { name: 'Ingredients', href: '/learn/ingredients' },
  { name: 'Blog', href: '/blog' },
  { name: 'Experts', href: '/learn/experts' },
  { name: 'Quality', href: '/learn/quality' },
  { name: 'Sustainability', href: '/learn/sustainability' },
  { name: 'Transparency', href: '/learn/transparency' },
];

const RESOURCES_LINKS = [
  { name: 'Refer-a-Friend', href: '/refer-a-friend' },
  { name: 'Rewards', href: '/rewards' },
  { name: 'Student Discount', href: '/student-discount' },
  { name: 'Become an Affiliate', href: '/affiliate' },
  { name: 'Corporate Wellness', href: '/corporate' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQs', href: '/faqs' },
];

const SOCIAL_LINKS = [
  { name: 'Facebook', icon: 'mdi:facebook', href: '#' },
  { name: 'Instagram', icon: 'mdi:instagram', href: '#' },
  { name: 'TikTok', icon: 'ic:baseline-tiktok', href: '#' },
];

const POLICY_LINKS = [
  { name: 'Refund policy', href: '/refund-policy' },
  { name: 'Privacy policy', href: '/privacy-policy' },
  { name: 'Terms of service', href: '/terms' },
  { name: 'Shipping policy', href: '/shipping-policy' },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const renderNewsletter = (
    <StyledNewsletterSection>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid xs={12} md={5}>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Sign up to get wellness tips, exclusive
              <br />
              discounts, and 25% off your first month.
            </Typography>
          </Grid>
          <Grid xs={12} md={7}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="flex-end">
              <StyledTextField
                placeholder="Enter your email"
                sx={{ minWidth: { sm: 300 } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box sx={{ width: 8 }} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#F4C430',
                  color: 'black',
                  fontWeight: 600,
                  borderRadius: 30,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#E0B02B',
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledNewsletterSection>
  );

  const renderMainFooter = (
    <StyledMainFooter>
      <Container>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid xs={12} md={3}>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 800,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              ALYVE
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'grey.400', mb: 2 }}
            >
              Alyve Wellness LTD
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500', mb: 0.5 }}>
              6 Morie Street
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500', mb: 3 }}>
              London, SW18 1SL
            </Typography>
            <Link
              href="mailto:info@alyvewellness.com"
              sx={{
                color: '#F4C430',
                textDecoration: 'underline',
                display: 'block',
                mb: 3,
              }}
            >
              info@alyvewellness.com
            </Link>
            <Stack direction="row" spacing={1}>
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.href}
                  sx={{
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.3)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <Iconify icon={social.icon} width={20} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Shop Links */}
          <Grid xs={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 2,
              }}
            >
              SHOP
            </Typography>
            <Stack spacing={1.5}>
              {SHOP_LINKS.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  href={link.href}
                  sx={{
                    color: 'grey.400',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Learn Links */}
          <Grid xs={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 2,
              }}
            >
              LEARN
            </Typography>
            <Stack spacing={1.5}>
              {LEARN_LINKS.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  href={link.href}
                  sx={{
                    color: 'grey.400',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Resources Links */}
          <Grid xs={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 2,
              }}
            >
              RESOURCES
            </Typography>
            <Stack spacing={1.5}>
              {RESOURCES_LINKS.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  href={link.href}
                  sx={{
                    color: 'grey.400',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledMainFooter>
  );

  const renderBottomBar = (
    <StyledBottomBar>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            © 2026, ALYVE
          </Typography>
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center">
            {POLICY_LINKS.map((link) => (
              <Link
                key={link.name}
                component={RouterLink}
                href={link.href}
                sx={{
                  color: 'grey.500',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </StyledBottomBar>
  );

  return (
    <Box component="footer">
      <Divider />
      {renderNewsletter}
      {renderMainFooter}
      {renderBottomBar}
    </Box>
  );
}
