import React from 'react';
import { Box } from '@mui/material';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Template from './components/Templates';
import Welcome from './components/Welcome';
import Grid from '@mui/material/Grid2';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <Grid container columns={12} sx={{ height: '100%' }}>
          {/* First column */}
          <Grid xs={12} md={4}>
            <Grid xs={12} sx={{ minHeight: '300px', pt: 6 }}>
              <Skills />
            </Grid>
            <Grid container xs={12} sx={{ minHeight: '300px' }}>
              <Grid xs={6} sx={{ minWidth: '250px' }}>
                <Profile />
              </Grid>
              <Grid xs={6} sx={{ minWidth: '250px' }}>
                <Welcome />
              </Grid>
            </Grid>
          </Grid>

          {/* Second column */}
          <Grid xs={12} md={4} sx={{minWidth: '500px'}}>
            <Grid xs={12} sx={{ minHeight: '300px', pt: 6 }}>
              <Projects />
            </Grid>
            <Grid xs={12} sx={{ minHeight: '300px' }}>
              <Resume />
            </Grid>
          </Grid>

          {/* Third column */}
          <Grid xs={12} md={4} sx={{minWidth: '500px'}}>
            <Grid xs={12} sx={{ minHeight: '100%', pt: 5 }}>
              <Template />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default App;
