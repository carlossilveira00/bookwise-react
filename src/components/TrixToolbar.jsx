import { Box, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

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


const TrixToolbar = () => {
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => []);
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{border: '1px solid #9E9E9E', color: 'red', borderRadius: '4px'}}>
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
  )
};

export default TrixToolbar;
