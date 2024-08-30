import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const [text, setText] = useState('Enable Dark Mode');   
    
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode("dark");
            document.body.style.backgroundColor = "grey";
            showAlert("Dark Mode is enabled", "success");
            setText("Disable Dark mode");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light Mode is enabled", "success");
            setText("Enable Dark mode");
        }
    }

    return (
        <Router>
                <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} text={text}/>
                <Alert alert={alert}/>
                <div className="container my-3">
                    <Routes>
                        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>}/>
                        <Route path="/about" element={<About mode={mode} />} />
                        <Route path="/services" element={<Services heading="Our Services" mode={mode}/>} />
                    </Routes>
                </div>
                <Footer mode={mode}/>
        </Router>
    );
}

export default App;
