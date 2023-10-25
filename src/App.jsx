import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import './App.css'

function App() {


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
                  <FaIndianRupeeSign /><input type="text" id="bill" placeholder="0"></input>
                </div>

              </div>
            </div>
            <div className='Tip'>
              <p>Selected Tip %</p>
              <div className='percentage'>
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <button>75%</button>
              </div>
              <div className='Number'>
                <p>Number of People</p>
                <div>
                  <FaUser />
                  <span><input type="number" id="people"></input></span>
                  <span><button>+</button></span>
                  <span id='numberpeople'>0</span>
                  <span><button>-</button></span>
                </div>
              </div>
              <button className='buttons'>Generate Bill</button>
            </div>

          </div>
          <div className="right">
            <div>
              <div className="amount">
                <p>Tip Amount <br />
                <span>/ person</span>
                </p>
                <p> <FaIndianRupeeSign /> 0.00</p>

              </div>
              <div className="amount">
                <p>Total <br />
                  <span>/ person</span>
                </p>
                <p> <FaIndianRupeeSign /> 0.00</p>

              </div>
            </div>
            <div>
              <button  className='button'>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
