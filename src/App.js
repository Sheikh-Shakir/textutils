import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (messge, type) => {
    setAlert({
      message: messge,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TExtUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TExtUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact
              path='/about'
              element={<About />
              }
            />
            <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>

          {/* <Route path='/about'>
              {/* <About /> */}
          {/* </Route> */}
          {/* <Route path='/'>
            <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          </Route> */}


        </div >
      </Router >
    </>
  );
}

export default App;