
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert(" Dark mode has been enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(" Light mode has been enabled","Success")
    }

  }
  return (
    
    <>
    {/* <Router> */}
    <Navbar title="Praful's App" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    {/* <Alert alert/> */}
    <div className="container">
    {/* <About /> */}

    {/* <Routes> */}
    {/* <Route path="/about" element={<About />} /> */}
          
          {/* <Route path="/" element={ */}
          <TextForm  heading="Enter the Text below" mode={mode}/> 
            
          {/* </Route> */}
    {/* </Routes> */}

    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
