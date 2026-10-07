import { Box, Button, Container, Stack, Typography, Chip } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import { brandColors } from '../theme';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        minHeight: { md: 520 },
        backgroundColor: brandColors.navy,
        backgroundImage: `linear-gradient(120deg, rgba(15,35,59,0.92) 0%, rgba(15,35,59,0.75) 45%, rgba(232,36,100,0.55) 100%), url(/images/cover.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Chip
              icon={<VolunteerActivismRoundedIcon />}
              label="Mental health & child safety"
              sx={{
                mb: 2.5,
                bgcolor: 'rgba(255, 212, 22, 0.2)',
                color: brandColors.secondary,
                fontWeight: 600,
                border: '1px solid rgba(255,212,22,0.35)',
                '& .MuiChip-icon': { color: brandColors.secondary },
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                color: brandColors.white,
                mb: 2,
                lineHeight: 1.15,
              }}
            >
              Project{' '}
              <Box component="span" sx={{ color: brandColors.secondary }}>
                Ikshana
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: 'rgba(255,255,255,0.88)',
                mb: 2,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.5,
                maxWidth: 520,
              }}
            >
              Seeing every child with care — awareness, safety, and emotional wellbeing for
              Delhi communities.
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.72)', mb: 4, maxWidth: 500, lineHeight: 1.7 }}
            >
              A Saadhak Foundation initiative led by Ms. Sonam Sabharwal (Psychologist, Counsellor
              & Project Lead) — nurturing safer spaces through facilitated support and
              child-protection education.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                sx={{ bgcolor: brandColors.primary, '&:hover': { bgcolor: brandColors.primaryDark } }}
              >
                Get Involved
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() =>
                  document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })
                }
                sx={{
                  borderColor: 'rgba(255,255,255,0.55)',
                  color: brandColors.white,
                  '&:hover': {
                    borderColor: brandColors.secondary,
                    bgcolor: 'rgba(255,212,22,0.1)',
                  },
                }}
              >
                Explore Programs
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src="/images/logo.jpg"
              alt="Saadhak Foundation lotus logo"
              sx={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                objectFit: 'cover',
                border: `4px solid ${brandColors.secondary}`,
                boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
                bgcolor: brandColors.white,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
