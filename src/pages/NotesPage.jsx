import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";
import SideBar from "../components/SideBar";
import { useState } from "react";

const NotesPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
    <Stack direction={'row'}>
      <SideBar open={open} setOpen={setOpen}/>
      <Box open={open}
        sx={{
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-240px`,
          ...(open && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
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
