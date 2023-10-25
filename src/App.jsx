import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div class="outer">
        <div>
            <h3 align="center">BILL <br />
                SPILL
            </h3>
        </div>
        <div class="outer-box">
            <div class="left">
                <div>
                    <label>BILL</label>
                    <input type="text" id="bill" placeholder="&#8377"></input>
                </div>
            </div>
            <div>
                <p>Selected Tip %</p>
                <div>
                    <button>5%</button>
                    <button>10%</button>
                    <button>15%</button>
                    <button>25%</button>
                    <button>50%</button>
                    <button>75%</button>
                </div>
                <div>
                    <p>Number of People</p>
                    <div>
                        <span class="material-symbols-outlined">
                            person
                            </span>
                            <span><input type="number" id="people"></input></span>
                            <span><button>+</button></span>
                            <span>0</span>
                            <span><button>-</button></span>
                    </div>
                </div>
                <button>Generate Bill</button>
            </div>            
            <div class="right">
                    <div>
                        <div>
                            <div>
                                <span><p>Tip Amount<br />
                                  / person</p>
                                </span>
                                <span id="tipamount">00</span>
                                <span><p>Total<br />
                                    / person</p>
                                </span>
                                <span id="totalamount">00</span>
                            </div>
                        </div>
                        <div>
                            <button>Reset</button>
                        </div>
                    </div>
                    <div></div>
            </div>
        </div>
    </div>
    </>  
  )
}

export default App
