import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography'
import MenuBookIcon from '@mui/icons-material/MenuBook';

const BookIconWithTitle = ({ title, id, handleSelectBook }) => {
  return (
    <Stack onClick={ () => handleSelectBook(id) } direction={'row'} alignItems={'center'} sx={{textDecoration: 'none', boxShadow: 1, my: 1}} padding={1}>
      <MenuBookIcon color='primary' sx={{mr: 1}}></MenuBookIcon>
      <Typography variant="body1" fontSize={14} color="initial">{title}</Typography>
    </Stack>
  )
};

export default BookIconWithTitle;
