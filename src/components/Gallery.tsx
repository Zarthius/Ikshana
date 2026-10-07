import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { brandColors } from '../theme';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const moments = [
  {
    image: asset('images/pocso-2.jpg'),
    title: 'POCSO workshop in session',
    caption:
      'Ms. Sonam Sabharwal addressing students at Vidya Bhawan Girls Senior Secondary School, Rajinder Nagar — interactive learning on safety and rights.',
  },
  {
    image: asset('images/pocso-1.jpg'),
    title: 'Learning together',
    caption:
      'From Saadhak’s public post: an opportunity to stand beside young girls, empower them with knowledge, and remind them they deserve dignity and respect.',
  },
  {
    image: asset('images/pocso-3.jpg'),
    title: 'Classroom engagement',
    caption:
      'Compassionate discussion on personal safety, healthy boundaries, and recognizing inappropriate behaviour — awareness as protection.',
  },
  {
    image: asset('images/pocso-4.jpg'),
    title: 'Voices that matter',
    caption:
      'Students reminded that their voice matters and they should never hesitate to seek help.',
  },
  {
    image: asset('images/certificate.jpg'),
    title: 'Recognition & partnership',
    caption:
      'Community recognition shared on Saadhak Foundation’s Facebook — celebrating collaborative impact.',
  },
  {
    image: asset('images/human-diary.jpg'),
    title: 'Human Diary launch',
    caption:
      '“A space where every heart writes its story” — Human Diary, a safe support group under Project Ikshana.',
  },
];

export default function Gallery() {
  return (
    <Box
      component="section"
      id="moments"
      sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: brandColors.cream }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 0.5, sm: 0 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: { xs: 1.5, sm: 2 } }}
          >
            Moments
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
            Glimpses from the journey
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: { xs: '0.98rem', sm: '1rem' },
            }}
          >
            Photos and moments from Saadhak Foundation’s public posts — workshops, recognition,
            and celebration of four years of service.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 2, sm: 2.5 },
          }}
        >
          {moments.map((m) => (
            <Card
              key={m.title}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
                '@media (hover: hover)': {
                  '&:hover': { transform: 'translateY(-4px)' },
                },
              }}
            >
              <CardMedia
                component="img"
                image={m.image}
                alt={m.title}
                sx={{
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  width: '100%',
                  maxWidth: '100%',
                  bgcolor: brandColors.blush,
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 2.5 } }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: brandColors.navy, fontWeight: 600, mb: 0.75, lineHeight: 1.35 }}
                >
                  {m.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                  {m.caption}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
