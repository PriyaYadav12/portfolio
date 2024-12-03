import React from 'react';
import { Box } from '@mui/material';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Template from './components/Templates';
import Welcome from './components/Welcome';
import Grid from '@mui/material/Grid2';

// Reusable Grid section component
const SectionGrid = ({ children, sx, additionalStyles = {} }) => (
  <Grid
    xs={12}
    md={4}
    sx={{
      minWidth: '500px',
      ...sx,
      ...additionalStyles,
    }}
  >
    {children}
  </Grid>
);

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <Grid container columns={12} sx={{ height: '100%' }}>
          
          {/* First column: Skills and Profile/Welcome */}
          <SectionGrid sx={{ minHeight: '300px' }}>
            <Skills />
            <Grid container xs={12} sx={{ minHeight: '300px' }}>
              <Grid xs={6}>
                <Profile />
              </Grid>
              <Grid xs={6}>
                <Welcome />
              </Grid>
            </Grid>
          </SectionGrid>

          {/* Second column: Projects and Resume */}
          <SectionGrid>
            <Projects />
            <Resume />
          </SectionGrid>

          {/* Third column: Template */}
          <SectionGrid sx={{ minHeight: '100%' }}>
            <Template />
          </SectionGrid>

        </Grid>
      </Box>
    </div>
  );
}

export default App;
