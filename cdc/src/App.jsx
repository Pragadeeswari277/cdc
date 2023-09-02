import { useState } from 'react'
import "./App.css";
import { Navbar } from './components/Navbar';
import { Home,About,Doctors,Treatments } from './components/pages';
import { Route,Routes } from 'react-router-dom';
function App() {
  

  return (
    
      <div className="App">
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/treatments" element={<Treatments/>}/>
       </Routes>
      </div>
     
  
  );
}

export default App;
