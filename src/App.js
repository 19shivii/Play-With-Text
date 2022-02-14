import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Links from './Components/Links';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 3000);
  }
  const RemoveClass=()=>{
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
  }

  const togggle =(cls)=>{
    RemoveClass();
     if(cls==='dark'){
      setMode('dark')
      document.body.style.backgroundColor='#6c757d';
     }
     else
     { console.log('clicled')
       document.body.classList.add('bg-'+cls);
      setMode('light')
    }
   
  // {
    //   
    //   document.body.style.backgroundColor='#6c757d';
    //   showAlert("Dark mode enabled","success")
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor='#ebe8c5';
    //   showAlert("light mode enabled","success")
    // }
  }
  return (
    <>
    <BrowserRouter>

   <Navbar title="Text Ground" mode={mode} toggle={togggle} />
   <Alert  alert={alert}/>
   {/* <About title='Analyze Your Text Here' mode={mode} showAlert={showAlert} /> */}
    <Routes>
      <Route exact path="/" element={<About title='Analyze Your Text Here' mode={mode} showAlert={showAlert} />} />
      <Route exact path="/links" element={<Links />} />
    </Routes>
   
  </BrowserRouter>
  </>
  );
}

export default App;
