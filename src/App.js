
import { Step, StepLabel, Stepper } from '@material-ui/core';
import './App.css';
import Address from './Components/Address';
import FinalData from './Components/FinalData';
import UserInformation from './Components/UserInformation';

function App() {

  const stepperDetails = [
    { label: "User Information" },
    { label: "Address Details" },
    { label: "Thank You" },


  ]
  return (
    <div className="App">
      <h3 style={{ color: "red", textDecoration: "underline" }}>Stepper User Details Form</h3>
      <div className='center-stepper'>

        <Stepper alternativeLabel>
          {stepperDetails.map((item, i) => (
            <Step key={i}>
              <StepLabel>{item.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>




    </div>
  );
}

export default App;
