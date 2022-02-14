import React, { useState } from 'react';

export default function About(props) {
 
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("clic")
    props.showAlert("Convert to uppercase enabled", "success")
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lower case enabled", "success")
  }
  const handleCapClick = () => {
    if (text[0] >= 'a' && text[0] <= 'z') {
      let newText = text.charAt(0).toUpperCase() + text.slice(1);
      setText(newText);
      props.showAlert("Text Capitalized", "success")
    }
  }
  const handleClearClick = () => {
    if (text === " ") {
      alert("No text found");

    }
    else {
      setText(" ");
      props.showAlert("Text cleared", "danger")
    }
  }
  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaced Removed", "info")

  }
  const handleCopyClick = () => {
    console.log("I am copy")
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState(``)
  return (
    <div className="mb-3 mx-5 my-5">
      <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.title}</h2>
      <textarea className="form-control box" value={text} onChange={handleOnChange}  id="mybox" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} rows="8"></textarea>
      <div className="btn">
        <button type="button" disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Uppercase</button>
        <button type="button" disabled={text.length===0} onClick={handleLowClick} className="btn btn-secondary mx-2 my-2">Lowercase</button>
        <button type="button" disabled={text.length===0} onClick={handleCapClick} className="btn btn-success mx-2 my-2">Capitalize</button>
        <button type="button" disabled={text.length===0} onClick={handleClearClick} className="btn btn-danger mx-2 my-2">Clear Text</button>
        <button type="button" disabled={text.length===0} onClick={handleSpaceClick} className="btn btn-warning mx-2 my-2">Remove Extra Space</button>
        <button type="button" disabled={text.length===0} onClick={handleCopyClick} className="btn btn-info mx-2 my-2">Copy to Clipboard</button>
        <button type="button" disabled={text.length===0} className="btn btn-light mx-2">Light</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Text Summary</h1>
        <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} Words and {text.length   } characters</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>

    </div>)
}
