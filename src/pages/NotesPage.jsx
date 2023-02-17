import { Box, Button, ButtonGroup, TextField, ToggleButtonGroup } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Note from "../components/Note";
import ShowNotes from "../components/ShowNotes";
import Trix from "trix";
import { ReactTrixRTEInput, ReactTrixRTEToolbar } from "react-trix-rte";

// Icons for the toolbar.
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import AddLinkIcon from '@mui/icons-material/AddLink';

import TitleIcon from '@mui/icons-material/Title';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CodeIcon from '@mui/icons-material/Code';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';

import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ToggleButton from '@mui/material/ToggleButton';


const NotesPage = ({colorMode, setColorMode}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function handleChange(event, newValue) {
    setValue(newValue); // OR custom on change listener.
  };

  return (
    <>
    <Stack direction={'row'}>
      <SideBar open={open} setOpen={setOpen} colorMode={colorMode} setColorMode={setColorMode}/>
      <Box open={open}
        sx={{
          flexGrow: 1,
          // padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-300px`,
          ...(open && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Box display={'flex'}>
          <ShowNotes>
            <Note></Note>
            <Note></Note>
            <Note></Note>
          </ShowNotes>
          <Box sx={{border: '1px solid red', height: '100vh', width: 'fill-available', padding: 3}}>
            <Box sx={{border: '1px solid green', color: 'red'}}>
              <trix-toolbar id="trix-toolbar">
                <Box display={'flex'} justifyContent={'space-between'}>
                  <ToggleButtonGroup
                    size="small"
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                  >
                    <ToggleButton
                     value="bold"
                     aria-label="left aligned"
                     data-trix-attribute='bold'
                     data-trix-key='b'
                    >
                      <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="italic"
                      aria-label="centered"
                      data-trix-attribute='italic'
                      data-trix-key='i'
                    >
                      <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="strike"
                      aria-label="right aligned"
                      data-trix-attribute='strike'
                    >
                      <StrikethroughSIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="link"
                      aria-label="justified"
                      data-trix-attribute='href'
                      data-trix-action='link'
                      data-trix-key='k'
                    >
                      <AddLinkIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                  <ToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                  >
                    <ToggleButton
                      value="title"
                      aria-label="left aligned"
                      data-trix-attribute='heading1'
                    >
                      <TitleIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="quote"
                      aria-label="centered"
                      data-trix-attribute='quote'
                    >
                      <FormatQuoteIcon />
                    </ToggleButton>
                    <ToggleButton
                    value="code"
                    aria-label="right aligned"
                    data-trix-attribute='code'
                    >
                      <CodeIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="bulletList"
                      aria-label="justified"
                      data-trix-attribute='bullet'
                    >
                      <FormatListBulletedIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="numberList"
                      aria-label="justified"
                      data-trix-attribute='number'
                    >
                      <FormatListNumberedIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="decreaseIdentation"
                      aria-label="justified"
                      data-trix-action='decreaseNestingLevel'
                    >
                      <FormatIndentDecreaseIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="increaseIdentation"
                      aria-label="justified"
                      data-trix-action='increaseNestingLevel'
                    >
                      <FormatIndentIncreaseIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                  <ToggleButtonGroup size="small" >
                    <ToggleButton
                      value="undi"
                      aria-label="justified"
                      data-trix-action='undo'
                    >
                      <UndoIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="justify"
                      aria-label="justified"
                      data-trix-action='redo'
                    >
                      <RedoIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </trix-toolbar>
            </Box>
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
        </Box>

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
