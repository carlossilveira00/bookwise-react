import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography'

const Note = ({title, body, id, handleSelectNote}) => {
  return (
    <Stack onClick={() => handleSelectNote(id)} sx={{ boxShadow: 1, textAlign: 'left', whiteSpace: 'nowrap', padding: 2, mb: 2}} >
      <Typography variant="body1" fontSize={18} color="initial">{title}</Typography>
      <Typography variant="body2" fontSize={12} color="initial" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', ml: 1}}>{body}</Typography>
      <Typography variant="body1" fontSize={11} color="initial" sx={{textAlign: 'right', mt: 1}}>01/01/2022</Typography>
    </Stack>
  )
};

export default Note;
