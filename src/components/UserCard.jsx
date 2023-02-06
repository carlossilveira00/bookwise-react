import { Avatar, Divider, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

export const UserCard = () => {
  return (
    <Paper elevation={5} sx={{width: '25%', padding: 2, minHeight: '300px'}}>
      <Avatar
        alt='User Avatar'
        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        sx={{mx: 'auto', width: 80, height: 80}}
      />
      <Typography variant="body1" color="inherit" sx={{textAlign: 'center', marginTop: 2, marginBottom: 1}}>example@example.com</Typography>
      <Divider variant='middle' />
      <Stack direction='row' justifyContent='space-between' paddingX={1} paddingTop={2}>
        <Box sx={{textAlign: 'center'}} >
          <Typography variant="caption" color="initial">6</Typography>
          <Typography variant="body2" color="initial">Wishlist</Typography>
        </Box>
        <Box sx={{textAlign: 'center'}}>
          <Typography variant="caption" color="initial">7</Typography>
          <Typography variant="body2" color="initial">In Progress</Typography>
        </Box>
        <Box sx={{textAlign: 'center'}}>
          <Typography variant="caption" color="initial">10</Typography>
          <Typography variant="body2" color="initial">Completed</Typography>
        </Box>
      </Stack>
    </Paper>
  )
};
