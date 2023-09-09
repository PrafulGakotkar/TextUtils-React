import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper click was clicked "+ text )
        var newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("Upper click was clicked "+ text )
        var newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        console.log("Upper click was clicked "+ text )
        var newText = "";
        setText(newText);
    }
    const handleExtraSpaces=()=>{
        console.log("Upper click was clicked "+ text )
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy=()=>{
         var Text = document.getElementById('myBox');
        Text.select();
        // Text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(Text.value)
    }
    const handleOnChange=(event)=>{
        console.log("OnChange  ")
        setText(event.target.value)
    }

    const [text , setText]=useState("")

  return (
    <>
    <div> 
        <div className="container mb-3 " style={{color:props.mode==='dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text } onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows={10}/>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p> {text.split(" ").length} words  and  {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes time take to read word </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to above text box to preview here"}</p>
    </div>

    </>
  )
}
