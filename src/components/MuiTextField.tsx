import { Stack, TextField, InputAdornment } from "@mui/material";
import {useState} from "react";

export const MuiTextField = () => {
const [value,setValue] =useState('')

  return (
    <Stack spacing={4}>
      MuiTextField
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="standard" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          variant="standard"
          size="small"
          color="secondary"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error ={!value}
          helperText={!value? 'required' : 'do not share your password with anyone'}
        />
        <TextField
          label="Form input"
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          //   disabled - unable to edit
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
