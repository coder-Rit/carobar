import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home/Homepage";
import Service from "./components/serviceCart/Service";
import React, { useState } from "react";

function App() {
  const [vehical, set_vehical] = useState("");
  const [selected_vehicle, set_selected_vehicle] = useState("");
  const vehicles = ["Car", "Bike"];
  const carsBrand = [
    {
      brand: "Tata",
      img: require("./images/tata.png"),
      name: "Tiago",
    },
    {
      brand: "Mercedes",
      img: require("./images/mercedes.png"),
      name: "Tiago",
    },
    {
      brand: "Suzuki",
      img: require("./images/suzuki.png"),
      name: "Tiago",
    },
    {
      brand: "Mahindra",
      img: require("./images/mahindra.png"),
      name: "Tiago",
    },
  ];
  // const carsBrand = ["Tata","Mercedes","Maruti Suzuki","Mahindra"];
  const BikesBrand = [
    {
      brand: "BMW",
      img: require("./images/bmw.png"),
      name: "Tiago",
    },
    {
      brand: "Yamaha",
      img: require("./images/yamaha.png"),
      name: "Tiago",
    },
    {
      brand: "Honda",
      img: require("./images/honda.png"),
      name: "Tiago",
    },
    {
      brand: "Bajaj",
      img: require("./images/bajaj.png"),
      name: "Tiago",
    },
  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage
        set_vehical={set_vehical}
        vehical={vehical}
        selected_vehicle={selected_vehicle}
        set_selected_vehicle={set_selected_vehicle}
        vehicles={vehicles}
        BikesBrand={BikesBrand}
        carsBrand={carsBrand}
      ></Homepage>
      <Service></Service>
    </div>
  );
}

export default App;
