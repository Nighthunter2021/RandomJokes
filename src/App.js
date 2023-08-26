import './App.css';
import { useState } from 'react';
import Joke from "./Joke";

function App() {
  // clock part:
  const date1 = new Date();
  let time = date1.toLocaleTimeString()
  const [ctime, setCtime] = useState(time);

  const updTime = () =>{
    time =new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updTime,1000)


  return (
    <div className="App">
      <header className="App-header">
      <>     
        <h1>{ctime}</h1>
        <Joke/> 
      </>
      </header>
    </div>
  );
}



export default App;
