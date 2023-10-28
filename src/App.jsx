import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import './App.css'

function App() {
  const [billAmount,setBillAmount] = useState(0)
  const [count, setCount] = useState(1)
  const [tipPercentage,setTipPercentage] = useState(0)
  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [amountPerPerson,setAmountPerPerson] = useState(0)

  
  
  const handleChange= (e)=>{
    const InputValue = parseFloat(e.target.value);
      if (!isNaN(InputValue)) {
        setBillAmount(InputValue)
      }
   }
const handleClick = (value) =>{
     setTipPercentage(value)
      
    }
    
    // number of person 
    const increment = () => {
      setCount(count + 1)
      
    }
    const decrement = () => {
      if(count > 1){
      setCount(count - 1)
    }
  }

    // generate click "GENERATE" 
    const generateClick = ()=>{
      const tip = tipPercentage;
      const person = count ;
      const bill = billAmount;

     
   
    const percentage = tip/100;
    const calculateTipPerson = bill*percentage;
    const calculateTipPerPerson = Math.round(calculateTipPerson/person)
           setTipPerPerson( calculateTipPerPerson);
  
    const billperPerson = Math.round( bill/person + calculateTipPerPerson)
 
        setAmountPerPerson(billperPerson)
        
      }

      const handleClear =  () =>{  
        setBillAmount(0);
        setCount(1);
        setTipPercentage(0);      
        setTipPerPerson(0);
        setAmountPerPerson(0);
    }

    return (
    <>
      <div className="outer">
        <div>
          <h3 align="center">BILL <br />
            SPILL
          </h3>
        </div>
        <div className="outer-box">
          <div className="left">
            <div>
              <div className="Bill">
                <label>BILL</label>
                <div>
                  <FaIndianRupeeSign />
                  <input type="text" name='bill' id="bill" value={billAmount} placeholder="0" onChange={handleChange}>
                  </input>
                </div>

              </div>
            </div>
            <div className='Tip'>
              <p>Selected Tip %</p>
              <div className='percentage'>
                <button value="5%" onClick={()=>handleClick(5)}>5%</button>
                <button value="10%" onClick={()=>handleClick(10)}>10%</button>
                <button value="15%" onClick={()=>handleClick(15)}>15%</button>
                <button value="25%" onClick={()=>handleClick(25)}>25%</button>
                <button value="50%" onClick={()=>handleClick(50)}>50%</button>
                <button value="75%" onClick={()=>handleClick(75)}>75%</button>
              </div>
              <div className='Number'>
                <p>Number of People</p>
                <div>
                  <FaUser />
                  <span><input type="number" id="people" value={count} onChange={(e)=>setCount(parseFloat(e.target.value))} /></span>
                  <span><button onClick={increment}>+</button></span>
                  <span id='numberpeople'>{count}</span>
                  <span><button onClick={decrement}>-</button></span>
                </div>
              </div>
              <button className='buttons' onClick={generateClick}>Generate Bill</button>
            </div>

          </div>
          <div className="right">
            <div>
              <div className="amount">
                <p>Tip Amount <br />
                  <span>/ person</span>
                </p>
                <p> <FaIndianRupeeSign />{tipPerPerson}</p>

              </div>
              <div className="amount">
                <p>Total <br />
                  <span>/ person</span>
                </p>
                <p> <FaIndianRupeeSign /> {amountPerPerson}</p>

              </div>
            </div>
            <div>
              <button className='button' onClick={handleClear}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
