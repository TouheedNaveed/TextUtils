import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'

function App() {

    const [mode,setMode]=useState('light');
    const [alert,setAlert]=useState(null);   
    
    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {

            setAlert(null);
            
        }, 2000);
    }

    const toggleMode=()=>{
        if(mode==='light')
        {
            setMode("dark");
            document.body.style.backgroundColor="grey";
            showAlert("Dark Mode is enabled", "success");
        }
        else{
            setMode("light");
            document.body.style.backgroundColor="white";
            showAlert("Light Mode is enabled", "success");


        }
    }

    return (
        <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>
        </>
    );

}

export default App;