import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { useState } from "react";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillChange= (event:React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if(index === -1){
        setSkills([...skills, event.target.value])
    } else {
        setSkills(skills.filter((skill)=> skill !== event.target.value))
    }
  }

//   This code defines a function called handleSkillChange which is intended to handle changes in an input field, presumably related to skills. Here's a breakdown of what it does:
// It takes an event object (presumably from a React input field) as its argument.
// It finds the index of the value of the input field within the skills array.
// If the value is not found (i.e., index is -1), it means the skill is not currently in the skills array. In this case, it adds the skill to the skills array using the spread operator [...skills, event.target.value].
// If the value is found (i.e., index is not -1), it means the skill is already in the skills array. In this case, it removes the skill from the skills array using filter.
// Finally, it updates the state variable skills using setSkills.
// This function is suitable for managing a list of skills, toggling them on or off based on whether they are already present in the list.

  return (
    <Box>
      {" "}
      <Box>
        {" "}
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="Javescript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
          <FormHelperText>invalid input</FormHelperText>
        </FormControl>

      </Box>
    </Box>
  );
};
