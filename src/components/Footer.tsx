import { Box, Container, Typography, Link, Stack, Avatar } from '@mui/material';
import { brandColors } from '../theme';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 3.5, md: 4 },
        pb: { xs: 'calc(28px + env(safe-area-inset-bottom, 0px))', md: 4 },
        bgcolor: brandColors.navy,
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
            <Avatar
              src={asset('images/logo.jpg')}
              alt="Saadhak Foundation"
              sx={{
                width: 40,
                height: 40,
                flexShrink: 0,
                border: `2px solid ${brandColors.secondary}`,
              }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ fontWeight: 700, color: 'white' }}>Project Ikshana</Typography>
              <Typography variant="caption" sx={{ opacity: 0.75 }}>
                An initiative of Saadhak Foundation
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{ opacity: 0.7, maxWidth: { xs: '100%', sm: 360 }, lineHeight: 1.6 }}
          >
            Saadhak Foundation · Palam Colony / Dwarka, New Delhi · Founded 2021
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 3,
            opacity: 0.55,
            textAlign: { xs: 'left', sm: 'center' },
            lineHeight: 1.6,
          }}
        >
          © {new Date().getFullYear()} Saadhak Foundation. Content reflects the foundation’s public
          communications. Not affiliated with unrelated organisations sharing a similar name.{' '}
          <Link
            href="https://www.linkedin.com/company/saadhak-foundation"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: brandColors.secondary,
              py: 1,
              display: 'inline',
            }}
          >
            Connect on LinkedIn
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
