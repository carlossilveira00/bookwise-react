import SearchIcon from '@mui/icons-material/Search';
import { Input, Box } from '@mui/material';

export const SearchBar = ({handleQueryChange, placeholder}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '20px', marginLeft: 'auto', flexGrow: 0.3}}>
      <SearchIcon sx={{ marginRight: '10px', marginLeft: '5px', color: '#565656' }} />
      <Input
          placeholder={placeholder}
          onChange={handleQueryChange}
          sx={{width:'full', color: '#565656'}}
          disableUnderline
      />
  </Box>
  )
}
