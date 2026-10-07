import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { brandColors } from '../theme';

const pillars = [
  {
    icon: <VisibilityRoundedIcon sx={{ fontSize: 32 }} />,
    title: 'Awareness',
    text: 'Helping young people understand personal safety, boundaries, and their rights — because awareness is one of the strongest forms of protection.',
  },
  {
    icon: <FavoriteBorderRoundedIcon sx={{ fontSize: 32 }} />,
    title: 'Emotional Care',
    text: 'Creating facilitated spaces where every heart finds the courage to write its story — guided by certified counsellors and professional psychologists.',
  },
  {
    icon: <ShieldRoundedIcon sx={{ fontSize: 32 }} />,
    title: 'Safety & Dignity',
    text: 'Standing beside young people so they feel confident to speak up — and grow up feeling safe, respected, and protected.',
  },
];

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: brandColors.blush }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, maxWidth: 720, mx: 'auto', px: { xs: 0.5, sm: 0 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: { xs: 1.5, sm: 2 } }}
          >
            About the initiative
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.6rem', sm: '1.85rem', md: '2.5rem' },
              color: brandColors.navy,
              mt: 1,
              mb: 2,
              lineHeight: 1.25,
            }}
          >
            What is Project Ikshana?
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '0.98rem', sm: '1.05rem' },
            }}
          >
            Project Ikshana is Saadhak Foundation’s dedicated mental-health and child-safety
            initiative. Based in Delhi (Palam Colony / Dwarka), Saadhak Foundation — founded in
            2021 — works to open doors of opportunity for underserved communities. Ikshana focuses
            that mission on emotional wellbeing and protection for children and young people.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 4, md: 6 },
          }}
        >
          {pillars.map((p) => (
            <Paper
              key={p.title}
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 3, md: 3.5 },
                height: '100%',
                border: '1px solid',
                borderColor: 'rgba(232, 36, 100, 0.12)',
                bgcolor: brandColors.white,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '@media (hover: hover)': {
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(15, 35, 59, 0.1)',
                  },
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(232, 36, 100, 0.1)',
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                {p.icon}
              </Box>
              <Typography variant="h6" sx={{ color: brandColors.navy, mb: 1 }}>
                {p.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {p.text}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3, md: 4 },
            borderRadius: 3,
            bgcolor: brandColors.navy,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              right: -30,
              top: -30,
              width: { xs: 120, md: 160 },
              height: { xs: 120, md: 160 },
              borderRadius: '50%',
              bgcolor: 'rgba(232, 36, 100, 0.3)',
            }}
          />
          <Stack spacing={1.5} sx={{ position: 'relative', maxWidth: 800 }}>
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              “Every girl deserves to grow up feeling safe, confident, and protected.”
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              — From Saadhak Foundation’s public POCSO Awareness Workshop post
            </Typography>
          </Stack>
        </Paper>

        <Box sx={{ mt: { xs: 4, md: 5 }, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
            Beyond Ikshana, Saadhak Foundation also advances education access, KITAABlink reading
            programs, and Margdarshan career guidance — complementary work that strengthens the
            same communities Ikshana serves. Tagline:{' '}
            <Box component="span" sx={{ fontWeight: 600, color: brandColors.navy }}>
              स्वस्मै स्वल्पं समाजाय सर्वस्वं।
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
