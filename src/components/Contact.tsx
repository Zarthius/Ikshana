import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
  Link,
  Divider,
} from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { brandColors } from '../theme';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/saadhak-foundation',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/saadhakfoundation/',
    icon: <InstagramIcon />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/saadhakfoundation',
    icon: <FacebookIcon />,
  },
];

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: brandColors.white }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 }, px: { xs: 0.5, sm: 0 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: { xs: 1.5, sm: 2 } }}
          >
            Get involved
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
            Partner with Ikshana
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              fontSize: { xs: '0.98rem', sm: '1rem' },
            }}
          >
            Whether you want to volunteer, collaborate with a school or nonprofit, or simply learn
            more — we’d love to hear from you.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3, md: 5 },
            borderRadius: { xs: 3, md: 4 },
            background: `linear-gradient(135deg, ${brandColors.white} 0%, ${brandColors.blush} 100%)`,
            border: '1px solid',
            borderColor: 'rgba(232, 36, 100, 0.15)',
            overflow: 'hidden',
          }}
        >
          <Stack spacing={3}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'center', alignItems: 'stretch' }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailRoundedIcon />}
                href="mailto:saadhakfoundation@gmail.com"
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: { sm: 260 },
                  justifyContent: { xs: 'center', sm: 'center' },
                  fontSize: { xs: '0.85rem', sm: '0.9375rem' },
                  px: { xs: 2, sm: 3 },
                  wordBreak: 'break-all',
                }}
              >
                saadhakfoundation@gmail.com
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PhoneRoundedIcon />}
                href="tel:+918448620886"
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: { sm: 220 },
                  borderColor: brandColors.navy,
                  color: brandColors.navy,
                  '&:hover': {
                    borderColor: brandColors.primary,
                    bgcolor: 'rgba(232,36,100,0.06)',
                  },
                }}
              >
                +91 8448620886
              </Button>
            </Stack>

            <Divider sx={{ borderColor: 'rgba(15, 35, 59, 0.1)' }}>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Follow Saadhak Foundation
              </Typography>
            </Divider>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              useFlexGap
              sx={{
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'stretch',
              }}
            >
              {socials.map((s) => (
                <Button
                  key={s.label}
                  variant="outlined"
                  startIcon={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                    minWidth: { sm: 140 },
                    borderColor: brandColors.navy,
                    color: brandColors.navy,
                    '&:hover': { borderColor: brandColors.primary, color: brandColors.primary },
                  }}
                >
                  {s.label}
                </Button>
              ))}
            </Stack>

            <Typography
              variant="body2"
              sx={{ textAlign: 'center', color: 'text.secondary', pt: 1, wordBreak: 'break-word' }}
            >
              Prefer email? Reach us at{' '}
              <Link
                href="mailto:saadhakfoundation@gmail.com"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                saadhakfoundation@gmail.com
              </Link>
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
