import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTextField } from "./components/MuiTextField";
import { MuiTypography } from "./components/MuiTypography";
import {MuiSwitch} from "./components/MuiSwitch";



function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioButton />
      <MuiCheckbox/>
      <MuiSwitch/>
       
    </div>
  );
}

export default App;




