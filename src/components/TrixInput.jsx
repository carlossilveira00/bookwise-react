import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { ReactTrixRTEInput} from "react-trix-rte";

const TrixInput = ({handleChange}) => {
  return (
    <Box>
      <Box display={'flex'} marginY={3}  >
        <TextField id="title" defaultValue={'No Title Provided'} name='title' label="Title" placeholder='Give a title to your note' variant="outlined" sx={{width: '50%', marginRight: 10}} />
        <TextField id="category" name='category' label="Category" placeholder='category' variant="outlined" />
      </Box>
      <ReactTrixRTEInput
        toolbarId="trix-toolbar"
        defaultValue="<div>React Trix Rich Text Editor</div>"
        onChange={handleChange}
        className={'text-editor'}
      />
    </Box>
  )
};

export default TrixInput;
