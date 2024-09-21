import { useEffect } from "react";
import React from 'react'

export default function About(props) {
    let  myStyle={ 
    backgroundColor: '#373d42',
    width: '100%',
    color: 'white'
  };
  document.body.style.backgroundColor ='white';
  useEffect(() => {
    if(props.Mode==='white'){
    document.body.style.backgroundColor ='white'; // Set background color to red when on the About page
    }else if(props.Mode==='dark'){
     document.body.style.backgroundColor ='black';
    }else{
      document.body.style.backgroundColor ='grey'; 
    }
    return () => {
      document.body.style.backgroundColor = '';
    };
  },[props.Mode]);
  useEffect(() => {
    if(props.toRed==='white'){
    document.body.style.backgroundColor ='white'; // Set background color to red when on the About page
    }else if(props.toRed==='red'){
     document.body.style.backgroundColor ='red';
    }else{
      document.body.style.backgroundColor ='grey'; 
    }
    return () => {
      document.body.style.backgroundColor = 'grey';
    };
  },[props.toRed]);


  return (   
    <div >
    <div className="container">
      
      <div className="accordion my-4" id="accordionExample" style={myStyle}>
        <h1>About Me </h1>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Accordion Item 1</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Accordion Item 2</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"  aria-controls="collapseThree">
        <strong>Accordion Item 3</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
</div>
  )
}
