import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KeyPad from './KeyPad';
import { useState } from 'react';
import styles from './calci.module.css'

function App() {
const [input,setInput]=useState('')

function handleClick(value){
  setInput(input+value)
}
function Calculate() {
  try {
    let result = eval(input);
    setInput(result)
  } catch (error) {
    setInput('Invalid');
  }
}


function Clear(){
  setInput('')
}
function Delete() {
  setInput(input.slice(0, -1));
}



  return (
   <>
   <div className={styles.container}>
    <h1>Calculator using REACT </h1>
   <input className={styles.input} type='text' value={input}/>
   <KeyPad handleClick={handleClick} Calculate={Calculate} Clear={Clear} Delete={Delete}/>
   </div>
   
   
   
   
   </>
  );
}

export default App;
