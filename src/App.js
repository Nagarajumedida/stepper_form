
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { useContext } from 'react';
import './App.css';

import { multistepContext } from './StepContext';
import UserInformation from './Components/UserInformation';
import AddressDetails from './Components/AddressDetails';
import SubmissionData from './Components/SubmissionData';


function App() {
  const {currentStep,finalData} = useContext(multistepContext)
  function showStep(step){
    console.log(step)
    switch(step){
      case 1 : return  <UserInformation/>
      case 2 : return <AddressDetails/>
      case 3 : return <SubmissionData/>
    }
  }
  const stepperStep =[
    { label : "User Information" },
    { label : "Address Details" },
    { label : "Thank You" },


  ]
  return (
    <div className="App">
      <div id="container">
       <h1 id="title">USER DETAILS STEPPER FORM</h1>
     <div className='center-stepper' >
     <Stepper className='stepper' activeStep={currentStep-1} alternativeLabel>
              {stepperStep.map((item,i) => (
                <Step key={i}>
                  <StepLabel>{item.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
        </div>
        </div>
       <div>
       {showStep(currentStep)}
       </div>
       <br/>
      
      
    </div>
  );
}

export default App;
