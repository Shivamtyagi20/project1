import { useState,useEffect } from "react";
import React from 'react';


export default function TextArea(props) {
   const [Text, setText] = useState("");
   
  const UpperCase= () => { 
    setText(Text.toUpperCase());
  }
  const LowerCase= () => { 
    setText(Text.toLowerCase());
  }
  const Copy= () => { 
    navigator.clipboard.writeText(Text);
  }
  const Clear= () => { 
    setText("");
  }
  const RemoveSpace= () => { 
    const cleanedText = Text.replace(/\s+/g, ' ').trim();
    setText(cleanedText);
  }
  const handleOnChange= (event) =>{
    setText(event.target.value);
  }
  const myStyle={backgroundColor:'##d74b58', Width: '100vh'};

  useEffect(() => {
    document.body.style.backgroundColor ='pink'; // Set background color to red when on the About page

    return () => {
      document.body.style.backgroundColor = '';
    };
  },[]);
  return (
    <div className="my-4" style={myStyle} >
<div className="container">
  <h1  className="form-label">
      Example Textarea
  </h1>
  <textarea className="form-control mt-3" style={{border: "1px solid black"}} value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-danger my-1" onClick={UpperCase}>ToUpperCase</button>
   <button className="btn btn-danger mx-1" onClick={LowerCase}>ToLowerCase</button>
    <button className="btn btn-danger mx-1" onClick={Copy}>Copy</button>
    <button className="btn btn-danger mx-1" onClick={Clear}>Clear</button>
    <button className="btn btn-danger mx-1" onClick={RemoveSpace}>Remove Spaces</button>
</div>

<div className="container my-3">
  <h1>Your text summary </h1>
     <p>{Text.replace(/\s+/g, ' ').split(" ").length-1}- words , {Text.replace(/\s+/g, '').length}-characters</p>
</div>
 <div>
  <h1>Text Preview</h1>
  <input type="text" value={Text} onChange={handleOnChange}  style={{ width: `${Text.length + 5}ch` }}></input>
 </div> 
   </div>
  )
}
