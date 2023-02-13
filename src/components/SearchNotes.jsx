import { FormControl, InputBase, InputLabel, Paper, Select, MenuItem, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchNotes = ({handleSearchQuery}) => {
  return (
    <Box textAlign={'center'} mt={3}>
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 10,
          width: '90%',
          mx: 'auto'
        }}
      >
        <InputBase
          placeholder='Search Notes'
          sx={{ ml: 2, flex: 1 }}
          onChange={handleSearchQuery}
        />
        <SearchIcon sx={{mr:1, fontSize: 'medium'}}/>
      </Paper>
      <Box sx={{mx: 'auto', width: '50%', marginTop: 3, marginBottom: 2}}>
        <FormControl fullWidth size="small" >
          <InputLabel>Search By: </InputLabel>
          <Select label='search by'>
            <MenuItem value={10}>Title</MenuItem>
            <MenuItem value={10}>Category</MenuItem>
            <MenuItem value={10}>None</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" color="primary" sx={{padding: 1, width: 225}}>
        <Typography variant="body1" color="inherit">Search</Typography>
        <SearchIcon sx={{ml: 1}} />
      </Button>
    </Box>
  )
};

export default SearchNotes;
