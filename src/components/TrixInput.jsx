import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { ReactTrixRTEInput} from "react-trix-rte";


const TrixInput = ({handleChange, note}) => {


  return (
    <Box key={note == null ? null : note.id}>
      <Box display={'flex'} marginY={3}  >
        <TextField id="title" defaultValue={'No Title Provided'} name='title' label="Title" placeholder='Give a title to your note' variant="outlined" sx={{width: '50%', marginRight: 10}} />
        <TextField id="category" name='category' label="Category" placeholder='category' variant="outlined" />
      </Box>
      <ReactTrixRTEInput
        id='editor'
        toolbarId="trix-toolbar"
        defaultValue={note.body}
        onChange={(e) => console.log('Trix Editor Fired')}
        className={'text-editor'}
      />
    </Box>
  )
};

export default TrixInput;
