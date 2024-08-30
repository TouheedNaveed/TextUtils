import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'

function App() {

    const [mode,setMode]=useState('light');

    const toggleMode=()=>{
        if(mode==='light')
        {
            setMode("dark");
            document.body.style.backgroundColor="grey";
        }
        else{
            setMode("light");
            document.body.style.backgroundColor="white";

        }
    }

    return (
        <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <TextForm heading="Enter The Text to Analyze" mode={mode}/>
        </>
    );

}

export default App;