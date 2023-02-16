import { Box, Button, ButtonGroup, ToggleButtonGroup } from "@mui/material";
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

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';


const NotesPage = ({colorMode, setColorMode}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['italic']);

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
              <ReactTrixRTEToolbar toolbarId='toolbar-editor'></ReactTrixRTEToolbar>
              <trix-toolbar id="trix-toolbar">
                {/* <Box display={'flex'} justifyContent={'space-between'}>
                  <ButtonGroup>
                    <Button variant="contained">
                      <FormatBoldIcon fontSize="small" />
                    </Button>
                    <Button>
                      <FormatItalicIcon fontSize="small" />
                    </Button>
                    <Button>
                      <StrikethroughSIcon fontSize="small" />
                    </Button>
                    <Button>
                      <AddLinkIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button>
                      <TitleIcon fontSize="small" />
                    </Button>
                    <Button>
                      <FormatQuoteIcon fontSize="small" />
                    </Button>
                    <Button>
                      <CodeIcon fontSize="small" />
                    </Button>
                    <Button>
                      <FormatListBulletedIcon fontSize="small" />
                    </Button>
                    <Button>
                      <FormatListNumberedIcon fontSize="small" />
                    </Button>
                    <Button>
                      <FormatIndentDecreaseIcon fontSize="small" />
                    </Button>
                    <Button>
                      <FormatIndentIncreaseIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button>
                      <UndoIcon fontSize="small" />
                    </Button>
                    <Button>
                      <RedoIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Box> */}
                <ToggleButtonGroup
                  size="small"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <FormatBoldIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatItalicIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <StrikethroughSIcon />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified" >
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
                  <ToggleButton value="left" aria-label="left aligned">
                    <TitleIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified" disabled>
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </trix-toolbar>
            </Box>
            <ReactTrixRTEInput
                toolbarId="toolbar-editor"
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
