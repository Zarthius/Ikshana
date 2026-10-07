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
import { brandColors } from '../theme';

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
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                flexGrow: 1,
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Avatar
                src="/images/logo.jpg"
                alt="Saadhak Foundation"
                sx={{ width: 44, height: 44 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: brandColors.navy,
                    lineHeight: 1.1,
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    fontWeight: 700,
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
              sx={{ display: { md: 'none' }, color: brandColors.navy }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }} role="presentation">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, pb: 1 }}>
            <Avatar src="/images/logo.jpg" alt="" sx={{ width: 36, height: 36 }} />
            <Typography variant="subtitle1" sx={{ color: brandColors.navy, fontWeight: 700 }}>
              Project Ikshana
            </Typography>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.href} onClick={() => scrollTo(link.href)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
