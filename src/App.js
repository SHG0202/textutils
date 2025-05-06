
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {

  const [mode, setMode] = useState({
    blueState: 'light',
    greenState: 'light'
  })

  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if(mode.blueState === 'light' && mode.greenState === 'light'){
      if(document.getElementById("switchCheckDefault1").checked){
        setMode({
          blueState: 'dark',
          greenState: 'light'
        })
        document.body.style.backgroundColor = '#042743'
      }else if(document.getElementById("switchCheckDefault2").checked){
        setMode({
          blueState: 'light',
          greenState: 'dark'
        })
        document.body.style.backgroundColor = '#228B22'
      }
    }else if (mode.blueState === 'dark' || mode.greenState === 'dark'){
      if(mode.blueState === 'dark' && document.getElementById("switchCheckDefault2").checked === false) {
        setMode({
          blueState: 'light',
          greenState: 'light'
        })
        document.body.style.backgroundColor = 'white'
      }else if(mode.blueState === 'dark' && document.getElementById("switchCheckDefault2").checked === true) {
        setMode({
          blueState: 'light',
          greenState: 'dark'
        })
        document.body.style.backgroundColor = '#228B22'
        document.getElementById("switchCheckDefault1").checked = false
      }else if(mode.greenState === 'dark' && document.getElementById("switchCheckDefault1").checked === false) {
        setMode({
          blueState: 'light',
          greenState: 'light'
        })
        document.body.style.backgroundColor = 'white'
      }else{
        setMode({
          blueState: 'dark',
          greenState: 'light'
        })
        document.body.style.backgroundColor = '#042743'
        document.getElementById("switchCheckDefault2").checked = false
      }
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to be Analysed" mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
