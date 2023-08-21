import React, { useState } from 'react'

function TextForm(props) {
    
    const [text, setText]=useState('enter text here');


    const handleUpClick=()=>{   

        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{

        let newText=text.toLowerCase();
        setText(newText)
    }
    const clearText=()=>{

        let newText=" ";
        setText(newText)
    }

    const handleChange = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
        <h1>About Us</h1>
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3" >
        <textarea  className="form-control" onChange={handleChange} value={text} id="textBox" rows="7"></textarea>
        </div>
        <div   className='container'>
        <button  className='btn1 btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button  className='btn2 btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button  className='btn3 btn-primary mx-1' onClick={clearText}>Clear</button> 
        <button  type='button' className='btn4 btn-primary my-3 mx-5'>Dark Mode</button> 
        </div>

        
        </div>
        <div className='container my-2'>
            <h1>Your Text</h1>
            <p>{text.split(' ').length} Words And {text.length} Characters</p>
            <p>{text} </p>


        </div>
        </>
    )
}
export default TextForm ;
