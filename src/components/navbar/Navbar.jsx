import * as React from "react";
import { useState } from "react";
 
function Navbar() {

  const [selected, setselected] = useState(1)

  const sellclass={
    borderBottom:"2px solid red"
  }
  
  return (
    <header class="box-shadow blur"  >
      <div class="section logo">
        <span class="white">car</span>
     <img src={require("../../images/break.png")} className="break" />
         <span class="white">bar</span>
      </div>

      <div class="section">
        <ul>
          <li>
            <a href="#home" onClick={()=>setselected(1)} style={selected===1?(sellclass):null}>Home</a>
          </li>
          <li>
            <a href="#serivese" onClick={()=>setselected(2)}  style={selected===2?(sellclass):null}>Services</a>
          </li>
          <li>
            <a class="active" href="#about" onClick={()=>setselected(3)}  style={selected===3?(sellclass):null}>
              About
            </a>
          </li>
          <li>
            <a href="#Qna" onClick={()=>setselected(4)}  style={selected===4?(sellclass):null}>How it works</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
