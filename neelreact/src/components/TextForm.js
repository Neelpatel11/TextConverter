import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!" , "success");
    }
    const Copyall = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied" , "success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!" , "success");
    }
    const Extraspace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed " , "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const clearall = (event) =>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear !" , "success");
    }
    const capitalFirstLetter = ()=>{
        let words = text.split(" ")
       let uppercaseword = ''
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
        props.showAlert("Converted to Capitalize!" , "success");
    }


    const [text, setText] = useState('Enter text here')
    // text = "loll" wrong way 
    // setText("loll"); correct way way 
    return (
        <>
    <div className="container" style={{color :props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
          <div class="mb-3">
           <textarea class="form-control" style={{background :props.mode==='dark'?'grey':'white' , color :props.mode==='dark'?'white':'black'}} value={text} onChange  = {handleOnChange}  id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Upercase</button> 
       <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
       <button className="btn btn-primary mx-2 my-2" onClick={capitalFirstLetter}>Convert To Capitlized</button> 
       <button className="btn btn-primary mx-2 my-2" onClick={Extraspace}>Remove Extra Space</button>
       <button className="btn btn-primary mx-2 my-2" onClick={clearall}>Clear All</button> 
       <button className="btn btn-primary mx-2 my-2" onClick={Copyall}>Copy All</button> 
        
</div>
<div className="container my-2" style={{color :props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p> {text.split(" ").length} Words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minute to Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
)
} 
