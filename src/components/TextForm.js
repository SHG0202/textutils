import React, {useState} from 'react'



export default function TextForm(props) {
    const changeToUpperClicked = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const changeToLowerClicked = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const changeToInverseClicked = () => {
        let newText = "";
        for (let index = 0; index < text.length; index++) {
            const char = text[index];
            if (char === char.toUpperCase()) {
                newText += char.toLowerCase();
            } else {
                newText += char.toUpperCase();
            }
        }
        setText(newText)
    }

    const copyText = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const clearTextClicked = () => {
        let newText = "";
        setText(newText)
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={changeToUpperClicked}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={changeToLowerClicked}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={changeToInverseClicked}>Inverse Case</button>
                <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={clearTextClicked}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>Above Text has {text.length} characters and {text.split(" ").length} words</p>
            </div>
        </>
    )
}
