import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from '@mui/material';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { brandColors } from '../theme';

const programs = [
  {
    id: 'human-diary',
    title: 'Human Diary',
    subtitle: 'A safe support group under Project Ikshana',
    image: '/images/human-diary.jpg',
    fallbackAspect: true,
    icon: <GroupsRoundedIcon />,
    tags: ['Mental health', 'World Mental Health Day', 'Operation Smile'],
    body: [
      'Launched on World Mental Health Day in collaboration with Operation Smile Foundation, Human Diary is a safe and compassionate support group — a space where every heart finds the courage to write its story, to be heard, and to heal.',
      'Sessions are facilitated by certified counsellors, psychology students, and guided by professional psychologists, so every voice is met with understanding, empathy, and care. You’re not alone — seeking help is strength.',
    ],
  },
  {
    id: 'pocso',
    title: 'POCSO Awareness Workshops',
    subtitle: 'Personal safety & child protection education',
    image: '/images/pocso-2.jpg',
    icon: <SchoolRoundedIcon />,
    tags: ['Child safety', 'Schools', 'Rights & boundaries'],
    body: [
      'At Vidya Bhawan Girls Senior Secondary School, Rajinder Nagar, Ms. Sonam Sabharwal led an interactive, compassionate POCSO Awareness Workshop. Students learned about personal safety, healthy boundaries, recognizing inappropriate behaviour, their rights under the POCSO Act, and that their voice matters — they should never hesitate to seek help.',
      'As Saadhak Foundation shares: awareness is one of the strongest forms of protection. If even one child walks away feeling more confident to speak up, the effort has made a difference.',
    ],
  },
];

export default function Programs() {
  return (
    <Box component="section" id="programs" sx={{ py: { xs: 8, md: 12 }, bgcolor: brandColors.white }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
          >
            Programs & impact
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '1.85rem', md: '2.5rem' }, color: brandColors.navy, mt: 1, mb: 2 }}
          >
            How Ikshana shows up
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
            Two flagship efforts — support groups that hold space for mental health, and workshops
            that put child-safety knowledge in young hands.
          </Typography>
        </Box>

        <Stack spacing={4}>
          {programs.map((program, index) => (
            <Card
              key={program.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' },
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                image={program.image}
                alt={program.title}
                sx={{
                  height: { xs: 240, md: '100%' },
                  minHeight: { md: 340 },
                  objectFit: program.fallbackAspect ? 'contain' : 'cover',
                  bgcolor: program.fallbackAspect ? brandColors.blush : undefined,
                  order: { xs: 0, md: index % 2 === 1 ? 2 : 0 },
                }}
              />
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  order: 1,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, color: 'primary.main' }}>
                  {program.icon}
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {program.subtitle}
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{ color: brandColors.navy, mb: 2, fontSize: { xs: '1.5rem', md: '1.75rem' } }}
                >
                  {program.title}
                </Typography>
                <Stack
                  direction="row"
                  spacing={0}
                  useFlexGap
                  sx={{ flexWrap: 'wrap', gap: 1, mb: 2.5 }}
                >
                  {program.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(232, 36, 100, 0.08)',
                        color: brandColors.navy,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
                {program.body.map((para) => (
                  <Typography
                    key={para.slice(0, 48)}
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 1.5 }}
                  >
                    {para}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
