'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import LinearProgress from '@mui/material/LinearProgress';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useRouter } from 'src/routes/hooks';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(() => ({
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #B8E8F5 0%, #D4F1F9 50%, #E8F7FB 100%)',
  paddingTop: 40,
  paddingBottom: 40,
}));

const StyledCard = styled('div')(() => ({
  background: 'white',
  borderRadius: 24,
  padding: '48px 40px',
  maxWidth: 800,
  margin: '0 auto',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
}));

const StyledProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: '#E0E0E0',
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    backgroundColor: '#4DB8B8',
  },
}));

const GoalCard = styled(ToggleButton)(() => ({
  width: 140,
  height: 120,
  borderRadius: 16,
  border: '2px solid #E8E8E8',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  textTransform: 'none',
  '&.Mui-selected': {
    border: '2px solid #4DB8B8',
    backgroundColor: 'rgba(77, 184, 184, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(77, 184, 184, 0.12)',
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
}));

const GenderButton = styled(ToggleButton)(() => ({
  width: 180,
  height: 160,
  borderRadius: 16,
  border: '2px solid #E8E8E8',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  textTransform: 'none',
  '&.Mui-selected': {
    border: '2px solid #4DB8B8',
    backgroundColor: 'rgba(77, 184, 184, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(77, 184, 184, 0.12)',
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
}));

const ContinueButton = styled(Button)(() => ({
  borderRadius: 30,
  padding: '14px 60px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  backgroundColor: '#4DB8B8',
  '&:hover': {
    backgroundColor: '#3A9999',
  },
  '&.Mui-disabled': {
    backgroundColor: '#E8E8E8',
    color: '#BDBDBD',
  },
}));

// ----------------------------------------------------------------------

const WELLNESS_GOALS = [
  { id: 'bones', label: 'Bones & Joints', icon: 'healthicons:bones' },
  { id: 'beauty', label: 'Beauty', icon: 'mdi:hand-extended' },
  { id: 'energy', label: 'Energy', icon: 'mdi:lightning-bolt' },
  { id: 'focus', label: 'Focus', icon: 'mdi:brain' },
  { id: 'immunity', label: 'Immunity', icon: 'mdi:shield-account' },
  { id: 'mood', label: 'Mood', icon: 'mdi:emoticon-happy-outline' },
  { id: 'sleep', label: 'Sleep', icon: 'mdi:bed' },
  { id: 'weight', label: 'Weight Control', icon: 'mdi:scale-bathroom' },
];

const TOTAL_STEPS = 3;

// ----------------------------------------------------------------------

export default function QuizView() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  const handleGenderChange = (_: React.MouseEvent<HTMLElement>, newGender: string | null) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  const handleGoalsChange = (_: React.MouseEvent<HTMLElement>, newGoals: string[]) => {
    if (newGoals.length <= 3) {
      setSelectedGoals(newGoals);
    }
  };

  const handleContinue = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz complete - redirect to results or dashboard
      router.push('/');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canContinue = () => {
    switch (currentStep) {
      case 0:
        return name.trim().length > 0;
      case 1:
        return gender !== null;
      case 2:
        return selectedGoals.length >= 1 && selectedGoals.length <= 3;
      default:
        return false;
    }
  };

  // Step 0: Name
  const renderNameStep = (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
        Let&apos;s get started! What&apos;s your name?
      </Typography>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        variant="outlined"
        sx={{
          width: '100%',
          maxWidth: 400,
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            fontSize: '1.1rem',
            '& input': {
              textAlign: 'center',
              padding: '16px 20px',
            },
          },
        }}
      />
    </Stack>
  );

  // Step 1: Gender
  const renderGenderStep = (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
        Nice to meet you, {name}! What&apos;s your gender?
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        This helps us personalize your vitamins
      </Typography>
      <ToggleButtonGroup
        value={gender}
        exclusive
        onChange={handleGenderChange}
        sx={{ gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <GenderButton value="male">
          <Iconify icon="mdi:face-man" width={48} sx={{ color: '#4DB8B8' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Male
          </Typography>
        </GenderButton>
        <GenderButton value="female">
          <Iconify icon="mdi:face-woman" width={48} sx={{ color: '#4DB8B8' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Female
          </Typography>
        </GenderButton>
        <GenderButton value="other">
          <Iconify icon="mdi:account" width={48} sx={{ color: '#4DB8B8' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Other
          </Typography>
        </GenderButton>
      </ToggleButtonGroup>
    </Stack>
  );

  // Step 2: Wellness Goals
  const renderGoalsStep = (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
        {name}, what are your main wellness goals?
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Pick your top 3
      </Typography>
      <ToggleButtonGroup
        value={selectedGoals}
        onChange={handleGoalsChange}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
          gap: 2,
          width: '100%',
          maxWidth: 650,
        }}
      >
        {WELLNESS_GOALS.map((goal) => (
          <GoalCard key={goal.id} value={goal.id}>
            <Iconify
              icon={goal.icon}
              width={36}
              sx={{
                color: selectedGoals.includes(goal.id) ? '#4DB8B8' : '#666',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: selectedGoals.includes(goal.id) ? '#4DB8B8' : 'text.primary',
              }}
            >
              {goal.label}
            </Typography>
          </GoalCard>
        ))}
      </ToggleButtonGroup>
      {selectedGoals.length > 0 && (
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {selectedGoals.length}/3 selected
        </Typography>
      )}
    </Stack>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return renderNameStep;
      case 1:
        return renderGenderStep;
      case 2:
        return renderGoalsStep;
      default:
        return null;
    }
  };

  return (
    <StyledRoot>
      <Container maxWidth="md">
        {/* Header */}
        <Stack alignItems="center" spacing={3} sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: 2,
              color: 'text.primary',
            }}
          >
            ALYVE
          </Typography>

          {/* Progress Bar */}
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box sx={{ flexGrow: 1 }}>
                <StyledProgressBar variant="determinate" value={progress} />
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: 40 }}>
                {Math.round(progress)}%
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Quiz Card */}
        <StyledCard>
          {renderStep()}

          {/* Navigation Buttons */}
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 6 }}>
            {currentStep > 0 && (
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{
                  borderRadius: 30,
                  px: 4,
                  py: 1.5,
                  borderColor: '#E0E0E0',
                  color: 'text.secondary',
                  '&:hover': {
                    borderColor: '#BDBDBD',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Back
              </Button>
            )}
            <ContinueButton
              variant="contained"
              disabled={!canContinue()}
              onClick={handleContinue}
            >
              {currentStep === TOTAL_STEPS - 1 ? 'Complete' : 'Continue'}
            </ContinueButton>
          </Stack>
        </StyledCard>
      </Container>
    </StyledRoot>
  );
}
