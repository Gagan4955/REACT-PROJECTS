import React, { useState } from 'react'
import './App.css'

function App(){

  const[result, setResult]=useState(' ');

  const HandleClick=(e)=>{
    setResult(result + e.target.value)
  }

  const handleClear=(e)=>{
    setResult('')
  }

  const handleDelete=(e)=>{
    setResult(result.slice(0, -1))
  }

  const HandleValue=(e)=>{
    setResult(eval(result))
  }


  return(
    <div className='container'>
      <div className='calc'>
      <form action="">
        <div className='display'>
          <input type='text' value={result}/>
        </div>
        <div>
          <input className='clear' type='button' value="AC" onClick={handleClear} />
          <input className='clear' type='button' value="DE" onClick={handleDelete}/>
          <input className='clear'  type='button' value="." onClick={HandleClick}  />
          <input className='clear' type='button' value="/" onClick={HandleClick} />
        </div>
        <div>
          <input type='button' value="7" onClick={HandleClick}  />
          <input type='button' value="8" onClick={HandleClick}  />
          <input type='button' value="9" onClick={HandleClick} />
          <input className='clear' type='button' value="*" onClick={HandleClick} />
        </div>
        <div>
          <input type='button' value="4" onClick={HandleClick} />
          <input type='button' value="5" onClick={HandleClick} />
          <input type='button' value="6" onClick={HandleClick} />
          <input className='clear' type='button' value="+" onClick={HandleClick} />
        </div>
        <div>
          <input type='button' value="1" onClick={HandleClick} />
          <input type='button' value="2" onClick={HandleClick} />
          <input type='button' value="3" onClick={HandleClick} />
          <input className='clear' type='button' value="-" onClick={HandleClick} />
        </div>
        <div>
          <input type='button' value="00" onClick={HandleClick}  />
          <input type='button' value="0" onClick={HandleClick} />
          <input className='tot' id='sum' type='button' value="=" onClick={HandleValue} />
        </div>
      </form>
      </div>

    </div>
  )
  
}

export default App;