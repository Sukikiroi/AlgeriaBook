import React from 'react';
import PostSection from "./components/postSection"
import Home from "./containers/home/home"
import './App.css';
import { BrowserRouter , Routes ,Route } from "react-router-dom";
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
 
      <Routes>
      <Route path="/home"  element={<Home/>}/>
        <Route path="/dar"  element={<PostSection/>} />
        <Route path="/">Please select brand...</Route>
      </Routes>
    </BrowserRouter>
  </div> 
  
  );
}

export default App;

 