import './App.css';
import React,{useState} from 'react'
function App() {
   const [input, setInput]= useState("");
   const [result, setResult]= useState("")
   const handler=e=>{
    setInput(e.target.value);
    // setInput("")
   }

  return (
      <div>
        <center>
          <input type='text' value={input} onChange={handler} />
         <br></br>
         <br></br>
         <button onClick={()=>setResult( eval(input))}>Result</button>
         <h4>Result is : {result}</h4>
         <button onClick={()=> setInput(input+'1')}>1</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'2')}>2</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'3')}>3</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'4')}>4</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'5')}>5</button>&nbsp;&nbsp;
         <br></br>
         <br></br>
         
         <button onClick={()=> setInput(input+'6')}>6</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'7')}>7</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'8')}>8</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'9')}>9</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'0')}>0</button>&nbsp;&nbsp;
         <br></br> <br></br>
         <button onClick={()=> setInput(input+'+')}>+</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'-')}>-</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'*')}>*</button>&nbsp;&nbsp;
         <button onClick={()=> setInput(input+'/')}>/</button>&nbsp;&nbsp;
         <button onClick={()=> setInput('')}>clr</button>&nbsp;&nbsp;
        </center>
      </div>
  );
}

export default App;
