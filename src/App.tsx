import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'clip',
          width: '100%',
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, width: '100%', overflowX: 'clip' }}>
          <Hero />
          <About />
          <Programs />
          <Gallery />
          <Team />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
