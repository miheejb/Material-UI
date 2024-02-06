import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export const MuiAutocomplete = () => {
  const skills = ["html", "css", "javascript", "typescript", "react"];
  const [value, setValue] = useState<string | null>(null);
  console.log({ value });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange = {(event:any, newValue: string|null ) => setValue(newValue)}
        // freeSolo
      />
    </Stack>

    //Autocomplete Complete is Robust,,, so much to learn further later.
  );
};
