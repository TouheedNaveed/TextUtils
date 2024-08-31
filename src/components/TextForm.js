import React, { useState } from 'react';
import './TextForm.css';


export default function TextForm(props) {

    const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UpperCase","success");
    }
    const lowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to LowerCase","success");
    }
    const clearForm = () => {
        setText("");
        props.showAlert("Text field Cleared","success");

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
        props.showAlert("Random Email generated","success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speech text enabled","success");
    }
    const rmvExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed","success");
    }
    const cpyText = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
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
                    <button disabled={text.length===0} className="btn btn-primary " onClick={upClick}>Convert to Uppercases</button>
                    <button disabled={text.length===0} className="btn btn-secondary " onClick={lowerClick}>Convert to Lowercases</button>
                    <button disabled={text.length===0} className="btn btn-info " onClick={clearForm}>Clear Text</button>
                    <button className="btn btn-success " onClick={randText}>Random email</button>
                    <button disabled={text.length===0} onClick={speak} className="btn btn-warning">Speak Text</button>
                    <button disabled={text.length===0} onClick={rmvExtraSpaces} className="btn btn-light">Remove Extra Spaces</button>
                    <button disabled={text.length===0} onClick={cpyText} className="btn btn-danger ">Copy Text</button>
                </div>


            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : "black" }}>
                <h2 className="ts">Your Text Summary</h2>
                <p className='p'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p className='p'>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuite to read</p>
                <h3>Preview:</h3>
                <p>{text.length > 0 ? text : "Enter some text in the textbox to preview."}</p>
            </div>
        </>
    )
}
