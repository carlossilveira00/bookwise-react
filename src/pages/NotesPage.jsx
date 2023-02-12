import { Box, Button, Typography } from "@mui/material";
import { Stack, textTransform } from "@mui/system";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useTheme } from "@emotion/react";
import Divider from '@mui/material/Divider';
import SideBar from "../components/SideBar";

const NotesPage = () => {
  const theme = useTheme();

  return (
    <>
    <Stack direction={'row'}>
      <SideBar/>
      {/* <Box sx={{border: '1px solid red', height: '100vh', width: '20%'}} textAlign={'center'} paddingTop={1}>
        <Typography variant="overline" color="initial" fontSize={10}>Books</Typography>
        <Button sx={{borderRadius: '10px'}} color='secondary'>
          <Box display={'flex'} alignItems={'center'} sx={{textTransform: 'none', borderRadius: '10px'}} padding={1} >
            <LibraryBooksIcon fontSize="smaller" sx={{marginRight: 1}} color={'primary'}></LibraryBooksIcon>
            <Typography variant="body2" color={theme.palette.text.primary} sx={{fontWeight: 'bold'}}>The Coupound Effect</Typography>
          </Box>
        </Button>
        <Button sx={{borderRadius: '10px'}} color='secondary'>
          <Box display={'flex'} alignItems={'center'} sx={{textTransform: 'none', borderRadius: '10px'}} padding={1}>
            <LibraryBooksIcon fontSize="smaller" sx={{marginRight: 1}} color={'primary'}></LibraryBooksIcon>
            <Typography variant="body2" color="initial" sx={{fontWeight: 'bold'}}>The Coupound Effect</Typography>
          </Box>
        </Button>
        <Button sx={{borderRadius: '10px'}} color='secondary'>
          <Box display={'flex'} alignItems={'center'} sx={{textTransform: 'none', borderRadius: '10px'}} padding={1}>
            <LibraryBooksIcon fontSize="smaller" sx={{marginRight: 1}} color={'primary'}></LibraryBooksIcon>
            <Typography variant="body2" color="initial" sx={{fontWeight: 'bold'}}>The Coupound Effect</Typography>
          </Box>
        </Button>
      </Box> */}
      {/* <Box sx={{border: '1px solid red', height: '100vh', width: '20%'}}>

      </Box>
      <Box sx={{border: '1px solid red', height: '100vh', width: 'fill-available'}}>

      </Box> */}
    </Stack>
    </>
  )
};

export default NotesPage;
