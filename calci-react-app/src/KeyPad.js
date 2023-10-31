import React from 'react'
import styles from './calci.module.css'

function KeyPad({handleClick ,Calculate,Clear,Delete}) {
  return (
    <>
    <div>
    <button className={styles.buttons} onClick={()=>Clear('')}>C</button>
    <button className={styles.buttons} onClick={()=>Delete()}>Del</button>
    <button className={styles.buttons} onClick={()=>handleClick('%')}>%</button>
    <button className={styles.operator} onClick={()=>handleClick('/')}>/</button>
    </div>
    <div>
    <button className={styles.buttons} onClick={()=>handleClick('7')}>7</button>
    <button className={styles.buttons} onClick={()=>handleClick('8')}>8</button>
    <button className={styles.buttons} onClick={()=>handleClick('9')}>9</button>
    <button className={styles.operator} onClick={()=>handleClick('*')}>*</button>
   
    
    </div>
    <div>
    <button className={styles.buttons} onClick={()=>handleClick('4')}>4</button>
    <button className={styles.buttons} onClick={()=>handleClick('5')}>5</button>
    <button className={styles.buttons} onClick={()=>handleClick('6')}>6</button>
    <button className={styles.operator} onClick={()=>handleClick('-')}>-</button>
    
    </div>
    <div>
    <button className={styles.buttons} onClick={()=>handleClick('1')} >1</button>
    <button  className={styles.buttons}onClick={()=>handleClick('2')}>2</button>
    <button  className={styles.buttons}onClick={()=>handleClick('3')}>3</button>
    <button  className={styles.operator}onClick={()=>handleClick('+')}>+</button>
    </div>
    <div>
    <button className={styles.Zero_dot} onClick={()=>{handleClick('.')}}>.</button>
    <button  className={styles.Zero_dot} onClick={()=>{handleClick('0')}}>0</button>
    <button className={styles.equalsto} onClick={()=>{Calculate('=')}}>=</button>

    </div>
    
    </>
  )
}

export default KeyPad