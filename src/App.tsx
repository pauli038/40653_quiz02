import { useContext, useEffect, useState } from 'react'
import './App.css'

import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import { MyProvider } from './context/MyContextProvider'
import MyContext from './context/MyContext'

function App() {
  const {step,setStep}=useContext(MyContext);

  const handlePrevClick = () => {
    
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNextClick = () => {
   
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <h1>Quiz 02</h1>
      <MyProvider>
       <Stepper/>
       <Content/> 
      
      <div className='flex'>
        <button type="button"onClick={() => setStep(step)}>Prev</button>
        <button type="button" onClick={() => setStep(step)}>Next</button>
      </div>
      </MyProvider>
    </>
  )
}

export default App
