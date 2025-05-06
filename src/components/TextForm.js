import React, {useState} from 'react'



export default function TextForm(props) {
    const changeToUpperClicked = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
        
    }

    const changeToLowerClicked = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
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
        props.showAlert("Inverted the case of string", "success")
    }

    const copyText = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to clipboard", "success")
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
            <div className={`container text-${(props.mode.blueState === 'dark' || props.mode.greenState === 'dark')?'light':'dark'}`}>
                <div className="mb-3">
                    <h2 className='mb-4'>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handelOnChange} 
                    style={{backgroundColor: (props.mode.blueState === 'dark' || props.mode.greenState === 'dark')?'#13466e':'white',
                        color: (props.mode.blueState==='dark' || props.mode.greenState==='dark')?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={changeToUpperClicked}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={changeToLowerClicked}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={changeToInverseClicked}>Inverse Case</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={clearTextClicked}>Clear Text</button>
            </div>
            <div className={`container my-3 text-${(props.mode.blueState === 'dark' || props.mode.greenState === 'dark')?'light':'dark'}`}>
                <h2>Your Text Summary</h2>
                <p>Above Text has {text.length} characters and {text===""?0:text.replace(/\s+/g, ' ').trim().split(' ').length} words</p>
            </div>
        </>
    )
}
