import * as React from "react";

function Navbar() {
  return (
    <header class="box-shadow">
      <div class="section logo">
        <span class="white">car</span>
     <img src={require("../../images/break.png")} className="break" />
         <span class="white">bar</span>
      </div>

      <div class="section">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a class="active" href="#">
              About
            </a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
