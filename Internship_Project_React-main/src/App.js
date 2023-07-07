import React, { useState,useEffect} from "react";
import './App.css';
import Login from './Components/Login/Login';
import Forgot from './Components/Forgot/Forgot';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HorizontalLinearStepper from './Components/Form/HorizontalLinearStepper';
import Step5 from "./Components/Steps/Step5";





function App() {
  //prashantfrnd
  // const [latitudes, setLatitudes] = useState(null);
  // const [longitudes, setLongitudes] = useState(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLatitudes(position.coords.latitude);
  //         setLongitudes(position.coords.longitude);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  //   localStorage.setItem("latitudes", JSON.stringify(latitudes));
  // }, []);

  // console.log(latitudes, "hhh");
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Forgot" element={<Forgot/>}></Route>
      
      <Route path="/Form" element={<HorizontalLinearStepper/>}></Route>
      <Route path="/Step5" element={<Step5/>}></Route>
      
     
      
      
      </Routes>
      </BrowserRouter>
      
      
    
    </div>
  );
}

export default App;
