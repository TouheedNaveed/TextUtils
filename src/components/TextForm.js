import React, { useState } from 'react';
import './TextForm.css';


export default function TextForm(props) {

    const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearForm = () => {
        setText("");
    }
    const generateRandomText = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const randText = () => {
        const randomText = generateRandomText(5);
        setText(randomText + "@email.com");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const rmvExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const cpyText = () => {
        let newText = document.getElementById("textBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const [text, setText] = useState("Enter Text here");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : "black" }}>
                <div className="heading text-center">
                    <h1>{props.heading}</h1>
                </div>
                <div className="mb-3">
                    <textarea value={text} className="form-control" id="textBox" rows="8" onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }}></textarea>
                </div>
                <div className="container d-flex justify-content-between ">
                    <button className="btn btn-primary " onClick={upClick}>Convert to Uppercases</button>
                    <button className="btn btn-secondary " onClick={lowerClick}>Convert to Lowercases</button>
                    <button className="btn btn-info " onClick={clearForm}>Clear Text</button>
                    <button className="btn btn-success " onClick={randText}>Random email</button>
                    <button onClick={speak} className="btn btn-warning">Speak Text</button>
                    <button onClick={rmvExtraSpaces} className="btn btn-light">Remove Extra Spaces</button>
                    <button onClick={cpyText} className="btn btn-danger ">Copy Text</button>
                </div>


            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : "black" }}>
                <h2 className="ts">Your Text Summary</h2>
                <p className='p'>{text.split(" ").length} words and {text.length} characters</p>
                <p className='p'>{0.008 * text.split(" ").length} Minuite to read</p>
                <h3>Preview:</h3>
                <p>{text.length > 0 ? text : "Enter some text in the textbox to preview."}</p>
            </div>
        </>
    )
}
