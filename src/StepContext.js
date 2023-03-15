import React, { useState } from 'react'
import App from './App'


export const multistepContext = React.createContext()

const StepContext = ()=>{
    const[currentStep,setStep] = useState(1)
    const[userData,setUserData] = useState([])
    const [finalData,setFinalData] = useState([])

    function submitData (){ 
        
        setFinalData(finalData =>[...finalData,userData])
        setUserData("")
        setStep(3)
    }
   return(
    <div>
       <multistepContext.Provider 
       value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
       <App/>
       </multistepContext.Provider>
    </div>
   ) 
}
export default StepContext