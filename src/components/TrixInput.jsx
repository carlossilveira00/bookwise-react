import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react';
import { ReactTrixRTEInput} from "react-trix-rte";
import Trix from "trix";


const TrixInput = ({handleChange, note}) => {

  return (
    <Box>
      <Box display={'flex'} marginY={3}  >
        <TextField id="title" defaultValue={'No Title Provided'} name='title' label="Title" placeholder='Give a title to your note' variant="outlined" sx={{width: '50%', marginRight: 10}} />
        <TextField id="category" name='category' label="Category" placeholder='category' variant="outlined" />
      </Box>
      <ReactTrixRTEInput
        name='x'
        toolbarId="trix-toolbar"
        defaultValue={`Hello World`}
        onChange={() => console.log('Trix Fired')}
        className={'text-editor'}
      />
    </Box>
  )
};

export default TrixInput;
