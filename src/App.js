import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  const [Nav,SetNav] =useState('white');
 const [Mode,SetMode] =useState('white');
 const [toRed,SetRed] =useState('white');
   const [text,SetText] =useState('dark');
   document.body.style.backgroundColor ='#1f3b62';
   const toDarkMode= () => {
       if(Mode==='white'){
        SetMode('dark');
        SetText('white');
        SetNav('dark');
        // showAlert('success', 'Dark mode has been enabled');
       }else{
        SetMode('white');
        SetText('black');
        SetNav('white');
        // showAlert('success', 'light mode ha been enabled');
       }
    }
    // const showAlert= (type, message) =>{
    //   SetAlert({type: type, message: message});
    //   setTimeout(() => {
    //     SetAlert(null)
    //   }, 2000);
    //   return () => clearTimeout(setTimeout);
    // }
    const toRedMode= () =>{
       if(toRed==='white'){
        SetRed('red');
        SetNav('#d92e2e');
        // showAlert('success', 'Red mode has been enabled');
       }else{
        SetRed('white');
        SetNav('white');
        // showAlert('success', 'light mode has been enabled');
       }
    }
  return (
     <Router>
      <div className="App">
        <Navbar title="Home" Mode={Mode} text={text} Nav={Nav} toDarkMode={toDarkMode} toRedMode={toRedMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/TextArea" element={<TextArea />} />
            <Route path="/About" element={<About Mode={Mode} toRed={toRed} />} />
          </Routes>
        </div>
      </div>
    </Router>  
    
  );
}

export default App;
