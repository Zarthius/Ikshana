import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Container,
  useScrollTrigger,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { brandColors } from '../theme';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Moments', href: '#moments' },
  { label: 'Team', href: '#team' },
  { label: 'Get Involved', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 24 });

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          bgcolor: elevated ? 'rgba(255, 255, 255, 0.94)' : brandColors.white,
          backdropFilter: elevated ? 'blur(12px)' : 'none',
          transition: 'background-color 0.2s ease',
          pt: 'env(safe-area-inset-top, 0px)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.25 },
                flexGrow: 1,
                minWidth: 0,
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Avatar
                src={asset('images/logo.jpg')}
                alt="Saadhak Foundation"
                sx={{ width: { xs: 40, sm: 44 }, height: { xs: 40, sm: 44 }, flexShrink: 0 }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: brandColors.navy,
                    lineHeight: 1.1,
                    fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.15rem' },
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Project Ikshana
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}
                >
                  Saadhak Foundation
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  color="inherit"
                  onClick={() => scrollTo(link.href)}
                  sx={{
                    color: brandColors.text,
                    fontWeight: link.href === '#contact' ? 700 : 500,
                    minHeight: 44,
                    px: 1.75,
                    ...(link.href === '#contact'
                      ? {
                          bgcolor: 'primary.main',
                          color: 'white',
                          ml: 1,
                          '&:hover': { bgcolor: 'primary.dark' },
                        }
                      : {}),
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            <IconButton
              edge="end"
              sx={{
                display: { md: 'none' },
                color: brandColors.navy,
                width: 44,
                height: 44,
              }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: 'min(300px, 86vw)', sm: 280 },
              pt: 'env(safe-area-inset-top, 0px)',
              pb: 'env(safe-area-inset-bottom, 0px)',
            },
          },
        }}
      >
        <Box sx={{ width: '100%', pt: 1 }} role="presentation">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 1.5,
              px: 2,
              pb: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
              <Avatar src={asset('images/logo.jpg')} alt="" sx={{ width: 36, height: 36 }} />
              <Typography variant="subtitle1" sx={{ color: brandColors.navy, fontWeight: 700 }}>
                Project Ikshana
              </Typography>
            </Box>
            <IconButton
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              sx={{ width: 44, height: 44 }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <List sx={{ px: 1 }}>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.href}
                onClick={() => scrollTo(link.href)}
                sx={{
                  borderRadius: 2,
                  minHeight: 48,
                  mb: 0.5,
                  ...(link.href === '#contact'
                    ? {
                        bgcolor: 'primary.main',
                        color: 'white',
                        mt: 1,
                        '&:hover': { bgcolor: 'primary.dark' },
                        '& .MuiListItemText-primary': { fontWeight: 700, color: 'inherit' },
                      }
                    : {}),
                }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
