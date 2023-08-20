import React, { useState } from 'react'

const TextForm = (props) => {

    const [text , setText] = useState(" ");

    const handleUpClicked=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("TEXT HAVE BEEN CONVERTED TO UPPERCASE" , '\tSuccess')
    }

    const handleLowClicked =() =>{
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Text have been converted to lowercase" , '\tSuccess')

    }
    const clearedALL =() =>{
        let newText = ' ';
        setText(newText);
        props.showAlert("TEXT HAVE BEEN CLEARED" , '\tSuccess')

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("TEXT IS NOW BEING SPOKEN" , '\tSuccess')

    }

    const handleOnChange =(event) =>{
        setText(event.target.value);
    }

    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("TEXT HAVE BEEN CONVERTED TO LOWERCASE" , '\tSuccess')
    }
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h3 style={{textAlign:'center',textDecoration:'underline'}}>{props.heading}</h3>
      <div className="mb-3">
        <textarea className='form-control' value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0d0907':'white' ,
        color:props.mode==='dark'?'white':'black' , border:props.mode=== 'dark'?'1.5px solid  white':' 1.5px solid  black'}} id='myBox' rows='9'></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-3" onClick={handleUpClicked}>CONVERT TO UPPERCASE</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleLowClicked}>CONVERT TO LOWECASE</button>
      <button className="btn btn-primary mx-3 my-3" onClick={clearedALL}> CLEAR_ALL</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2 my-3">Speak</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpace}> REMOVE EXTRA SPACE</button>

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>YOUR TEXT SUMMARY</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Estimated Time Minutes taken to read words</p>
    </div>
    </>
  )
}

export default TextForm
