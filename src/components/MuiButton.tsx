import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import {useState} from 'react'

export const MuiButton = () => {
const [formats, setFormats] = useState<string|null []> ([])

const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats:string | null[])=>{ setFormats(updatedFormats)}



  return (
    <Stack>
      <Stack className="buttonStack" spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          {" "}
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack className="buttonStack" spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>

        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack
        className="buttonStack"
        display="block"
        spacing={2}
        direction="row"
      >
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack className="buttonStack" spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          {" "}
          <SendIcon />{" "}
        </IconButton>
      </Stack>

      <Stack className="buttonStack" direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button onClick={() => alert("Left")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting" value= {formats} onChange={handleFormatChange} size='small' color ='success' exclusive>
          <ToggleButton value="bold" aria-label="bold">
            
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="itailc" aria-label="italic">
            
            <FormatItalicIcon />
          </ToggleButton>

          <ToggleButton value="underlined" aria-label="underlined">
         
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
