import React,{useState} from 'react';


function App() {
  const[Count, setCount]=useState(0)
  return (
   <>
        <h3>{Count}</h3>
        <button onClick={()=>{setCount(Count+1)}}>Click Me</button>
   </>
  );
}

export default App;
