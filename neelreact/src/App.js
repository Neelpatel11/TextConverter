import './App.css';
import Navbar from './components/Navbar';  
import TextForm from './components/TextForm';  
// import About from './components/About';  
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

 const showAlert = (message , type) => {
   setAlert({
     msg : message,
     type : type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1000);
 }



  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("done dark mode" , "success")
      document.title = 'TextConverter - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextConverter'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'DarkMode'
      // }, 1500);
    }  
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("done light mode" , "success")
      document.title = 'TextConverter - Light Mode';
    }
  }
  return (
   <>
   <Router>
<Navbar title = "TextConverter" mode={mode} toggleMode={toggleMode} />
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text To analyze" mode={mode} />
          </Route>
        </Switch>
</div> 
</Router>
   </>
   
  );
}

export default App;
