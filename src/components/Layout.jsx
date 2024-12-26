import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


export default function Layout({ gridItems }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {gridItems.map((item, index) => (
          <Grid key={index} size={item.size}>
            {item.component}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}