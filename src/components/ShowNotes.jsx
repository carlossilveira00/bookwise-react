import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const ShowNotes = ({children}) => {
  return (
    <Box sx={{border: '1px solid red', height: '100vh', width: '20%', textAlign:'center'}}>
      <Typography variant="overline" fontSize={11} color="initial">Notes</Typography>
      <Box padding={1}>
        {children}
      </Box>
    </Box>
  )
};

export default ShowNotes;
