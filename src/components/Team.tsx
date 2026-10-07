import { Box, Container, Typography, Card, CardContent, Avatar, Stack } from '@mui/material';
import { brandColors } from '../theme';

const people = [
  {
    name: 'Ms. Sonam Sabharwal',
    role: 'Project Lead – IKSHANA',
    detail: 'Psychologist & Counsellor',
    initials: 'SS',
    bio: 'Leads Project Ikshana with professional counselling expertise — facilitating POCSO awareness workshops and mental-health initiatives that put young people’s safety and voice first.',
  },
  {
    name: 'Apoorv Tyagi',
    role: 'Founder, Saadhak Foundation',
    detail: 'Saadhak Foundation',
    initials: 'AT',
    bio: 'Founded Saadhak Foundation in 2021. On World Mental Health Day he announced Human Diary’s launch under Project Ikshana with Operation Smile Foundation — a movement where every heart finds the courage to share and heal.',
  },
];

export default function Team() {
  return (
    <Box
      component="section"
      id="team"
      sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: brandColors.blush }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 0.5, sm: 0 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: { xs: 1.5, sm: 2 } }}
          >
            Team spotlight
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
            People behind Ikshana
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              maxWidth: 520,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '0.98rem', sm: '1rem' },
            }}
          >
            Guided by professional care and a nonprofit rooted in community service.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 2, sm: 3 },
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {people.map((person) => (
            <Card key={person.name} sx={{ height: '100%', overflow: 'hidden' }}>
              <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 }, '&:last-child': { pb: { xs: 2.5, sm: 3, md: 4 } } }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 2, sm: 2.5 }}
                  sx={{ alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}
                >
                  <Avatar
                    alt={person.name}
                    sx={{
                      width: { xs: 80, sm: 88 },
                      height: { xs: 80, sm: 88 },
                      flexShrink: 0,
                      border: `3px solid ${brandColors.secondary}`,
                      bgcolor: brandColors.primary,
                      color: brandColors.white,
                      fontWeight: 700,
                      fontSize: '1.5rem',
                    }}
                  >
                    {person.initials}
                  </Avatar>
                  <Box sx={{ minWidth: 0, width: '100%' }}>
                    <Typography
                      variant="h6"
                      sx={{ color: brandColors.navy, lineHeight: 1.3, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'primary.main', fontWeight: 600, mt: 0.25 }}
                    >
                      {person.role}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {person.detail}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mt: 1.5, lineHeight: 1.7 }}
                    >
                      {person.bio}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mt: { xs: 3, md: 4 },
            maxWidth: 560,
            mx: 'auto',
            px: { xs: 0.5, sm: 0 },
          }}
        >
          Project Ikshana is an initiative of{' '}
          <Box component="span" sx={{ fontWeight: 600, color: brandColors.navy }}>
            Saadhak Foundation
          </Box>
          , a Delhi-based nonprofit serving communities around Palam Colony and Dwarka since 2021.
        </Typography>
      </Container>
    </Box>
  );
}
