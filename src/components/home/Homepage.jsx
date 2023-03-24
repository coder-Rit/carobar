import React, { useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [vehical, set_vehical] = useState("");
  const [selected_vehicle, set_selected_vehicle] = useState("");
  const vehicles = ["Car", "Bike"];
  const carsBrand = [
    {
      brand: "Tata",
      img: require("../../images/tata.png"),
      name: "Tiago",
    },
    {
      brand: "Mercedes",
      img: require("../../images/mercedes.png"),
      name: "Tiago",
    },
    {
      brand: "Suzuki",
      img: require("../../images/suzuki.png"),
      name: "Tiago",
    },
    {
      brand: "Mahindra",
      img: require("../../images/mahindra.png"),
      name: "Tiago",
    },
  ];
  // const carsBrand = ["Tata","Mercedes","Maruti Suzuki","Mahindra"];
  const BikesBrand = [
    {
      brand: "BMW",
      img: require("../../images/bmw.png"),
      name: "Tiago",
    },
    {
      brand: "Yamaha",
      img: require("../../images/yamaha.png"),
      name: "Tiago",
    },
    {
      brand: "Honda",
      img: require("../../images/honda.png"),
      name: "Tiago",
    },
    {
      brand: "Bajaj",
      img: require("../../images/bajaj.png"),
      name: "Tiago",
    },
  ];

  const setVeh = (data) => {
    set_vehical(data);
    set_selected_vehicle("");
  };
  const setitem = (data) => {
    set_selected_vehicle(data);
  };

  return (
    <div>
      <div className="div864564 ">
        <img src={require("../../images/backgroundImg.jpg")} alt="" />
        <div className="div486596 blur">
          <h3>Choose your vehicle</h3>
          <div className="div544464">
            {vehicles.map((data) => {
              return <span onClick={() => setVeh(data)}>{data}</span>;
            })}
          </div>
          <div>Select your {vehical === "Car" ? "Car" : "Bike"}</div>
          <div className="div544464">
            {vehical === "Car"
              ? carsBrand.map((data) => {
                  return (
                    <div
                      className="urlNbrand"
                      onClick={() => setitem(data.brand)}
                    >
                      <img src={data.img} width="27" height="27" alt="" />
                      <span>{data.brand}</span>
                    </div>
                  );
                })
              : vehical === "Bike"
              ? BikesBrand.map((data) => {
                  return (
                    <div
                      className="urlNbrand"
                      onClick={() => setitem(data.brand)}
                    >
                      <img src={data.img} width="27" height="27" alt="" />
                      <span onClick={() => setitem(data.name)}>
                        {data.brand}
                      </span>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="div544464 columDown">
            {selected_vehicle === "Tata" ? (
              <>
              <img
                src={require("../../images/tiagoPNG.png")}
                className=" "
                height="75px"
                width="140px"
                alt=""
                />
      <p>Tiago</p>
                </>
            ) : selected_vehicle === "Suzuki" ? (
              <>
              <img
                src={require("../../images/alto.png")}
                className="flip"
                height="68px"
                width="130px"
                alt=""
              />
               <p>Alto</p>
              </>
            ) : selected_vehicle === "Mercedes" ? (
              <>
              <img
                src={require("../../images/Aclass.png")}
                className=" "
                height="95px"
                width="160px"
                alt=""
                />
                 <p>C Class</p>
              </>
            ) : selected_vehicle === "Mahindra" ? (
              <>
              <img
                src={require("../../images/n.png")}
                className=" "
                height="95px"
                width="160px"
                alt=""
                />
                 <p>Scorpio N</p>
                </>
            ): selected_vehicle === "BMW" ? (
              <>
              <img
                src={require("../../images/bmwBike.png")}
                className=" "
                height="97px"
                width="135px"
                alt=""
                />
                 <p>G 310 R</p>
                </>
            )
            : selected_vehicle === "Yamaha" ? (
              <>
              <img
                src={require("../../images/r15.png")}
                className=" "
                height="95px"
                width="175px"
                alt=""
                />
                 <p>R15</p>
                </>
            )
            : selected_vehicle === "Honda" ? (
              <>
              <img
                src={require("../../images/activa.png")}
                className="flip"
                height="95px"
                width="175px"
                alt=""
                />
                 <p>Activa</p>
                </>
            )
            : selected_vehicle === "Bajaj" ? (
              <>
              <img
                src={require("../../images/plass.png")}
                className="flip"
                height="95px"
                width="150px"
                alt=""
                />
                 <p>Pulsar</p>
                </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
