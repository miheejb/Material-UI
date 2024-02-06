import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTextField } from "./components/MuiTextField";
import { MuiTypography } from "./components/MuiTypography";
import {MuiSwitch} from "./components/MuiSwitch";
import {MuiRating} from "./components/MuiRating";
import { MuiAutocomplete } from "./components/MuiAutocomplete";



function App() {
  return (
    <div className="App">

      {/* Input components */}
      <MuiTypography />
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioButton />
      <MuiCheckbox/>
      <MuiSwitch/>
      <MuiRating/>
      <MuiAutocomplete/>  
       
    </div>
  );
}

export default App;




