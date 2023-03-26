import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

import React, { useEffect, useState } from "react";

const Service = () => {
  const [selected_serveice, set_selected_serveice] = useState("");
  const [selected_part, set_selected_part] = useState("");
  const [dataName, set_dataName] = useState("");
  const [seemore, set_seemore] = useState(false);
  const [filterparts, set_filterparts] = useState([]);
  const service = [
    {
      name: "Periodic Services",
      Icon: <CalendarMonthIcon className="gu_lal"></CalendarMonthIcon>,
      services: ["Basic services", "Standard services ", "Inclusive services "],
      id: 1,
      dataName: "Periodic_Services",
    },
    {
      name: "Batteries",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/battery.png")}
        ></img>
      ),
      services: ["Suggestions and selection as per brand "],
      id: 2,
      dataName: "Batteries",
    },
    {
      name: "AC & maintenance",
      Icon: <AcUnitIcon className="gu_lal"></AcUnitIcon>,
      services: [" Regular servicing", "Recommended", "Specific part repair"],
      id: 3,
    },
    {
      name: "Tyer & Wheels",
      Icon: (
        <img className="iconImg" src={require("../../images/wheel.png")}></img>
      ),
      services: [". As per recommended Alignment"],
      id: 4,
    },
    {
      name: "Denting & Painting",
      Icon: <FormatPaintIcon className="gu_lal"></FormatPaintIcon>,

      services: ["Full body", "Specific part"],
      id: 5,
    },
    {
      name: "Windshield & glass",
      Icon: (
        <img className="iconImg" src={require("../../images/shild.png")}></img>
      ),

      services: ["Front, back, & all other glass work."],
      id: 6,
    },
    {
      name: "Road trip plane",
      Icon: (
        <img className="iconImg" src={require("../../images/road.png")}></img>
      ),

      services: ["", "", ""],
      id: 7,
    },
    {
      name: "Spare parts",
      Icon: (
        <img className="iconImg" src={require("../../images/wrench.png")}></img>
      ),
      services: ["", "", ""],
      id: 8,
    },
    {
      name: "Subcripion Model",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/subscribe.png")}
        ></img>
      ),
      services: ["", "", ""],
      id: 9,
    },
    {
      name: "Car Ispection",
      Icon: (
        <img className="iconImg" src={require("../../images/car.png")}></img>
      ),
      services: ["", "", ""],
      id: 10,
    },
    {
      name: "Insurance Claim",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/insurance.png")}
        ></img>
      ),
      services: ["", "", ""],
      id: 11,
    },
    {
      name: "Detailing",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/detailing.png")}
        ></img>
      ),
      services: ["", "", ""],
      id: 12,
    },
  ];

  const Periodic_Services = [
    {
      name: "Periodic Services",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: "Essentials",
      serviceName3: "Additional services",
      service1: [
        "Time taken 4hrs",
        "1000km to 1-month warranty",
        "Free pick up and drop",
      ],
      service2: [
        "Engine oil replacement",
        "Oil filter replacement",
        "Air filter cleaning",
        "Coolant top up",
        "Heater & spark plug checking",
      ],
      service3: [
        "Wiper fluid replacement",
        "Battery water top up",
        "Car wash",
        "Interior vacuuming",
      ],
      more: 9,
      popular: true,
    },
    {
      name: "Periodic Services",
      planeName: "Standerd",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: "Essentials",
      serviceName3: "Additional services",
      service1: [
        "Time taken 6 hrs",
        " 10000km 1-month warranty",
        "Free pick up and drop",
      ],
      service2: [
        "Engine oil replacement",
        "Oil filter replacement",
        "Air filter replacement",
        "Coolant top up",
        "Heater & spark plug checking",
        "Fuel filter checking",
        "Brake fluid top up",
        "AC filter cleaning",
      ],
      service3: [
        "Wiper fluid replacement",
        "Battery water top up",
        "Car wash",
        "Interior vacuuming",
        "Car scanning",
        "Interior vacuuming",
        "Rear brake shoe service",
        "Front brake pad services",
      ],
      more: 16,
      popular: true,
    },
    {
      name: "Periodic Services",
      planeName: "Inclusive",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: "Essentials",
      serviceName3: "Additional services",
      service1: [
        "Time taken 6 hrs",
        "20000km 1-month warranty",
        "Free pick up and drop",
      ],
      service2: [
        "Engine oil replacement",
        "Oil filter replacement",
        "Air filter replacement",
        "Coolant top up",
        "Heater & spark plug checking",
        "Fuel filter checking",
        "Brake fluid top up",
        "AC filter replacement",
        "Engine flushing",
        "Throttle body cleaning",
        "Gear oil top up",
      ],
      service3: [
        "Wiper fluid replacement",
        "Battery water top up",
        "Car wash",
        "Interior vacuuming",
        "Car scanning",
        "Interior vacuuming",
        "Rear brake shoe service",
        "Front brake pad services",
        "AC filter replacement",
        "Fuel filter checking",
        "Battery water top up",
        "Wheel alignment",
        "Wheel balancing",
        "Tyer rotate",
      ],
      more: 23,
      popular: true,
    },
  ];

  const Batteries = [
    {
      name: "Batteries",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: "Additional",
      service1: [
        "Amaron",
        "35 AMP HOURS",
        "55 MONTH WARRANTY",
        "FREE COST INSTALLATION",
        "Free pick up and drop",
        "Old battery prices include",
        "Available doorstep",
      ],
      service2: [],

      more: 3,
      popular: true,
    },
  ];

  const AC_maintenance = [
    {
      name: "AC & maintenance",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Regular services ",
      serviceName2: "Essentials",
      serviceName3: "",

      service1: ["Time 1 hr", "1-month warranty", "Every 3-month recommended"],
      service2: ["Ac gas fills up", "Condenser cleaning", "AC filter cleaning"],
      service3: [],
      more: 3,
      popular: true,
    },
    {
      name: "AC & maintenance",
      planeName: "Standard",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Regular services",
      serviceName2: "Essentials",
      serviceName3: "Additional",
      service1: [
        "Time 2 hrs",
        "1-month warranty",
        "Every-12 months recommended",
      ],
      service2: [
        "Ac gas top up",
        "Condenser cleaning",
        "Ac filter cleaning",
        "Compressor oil",
        "Cooling coil",
      ],
      service3: [
        "Ac leak test",
        "Dashboard removing refiting",
        "Dashboard cleaning",
        "Ac vent cleaning",
      ],
      more: 9,
      popular: true,
    },
  ];

  const Denting = [
    {
      name: "Denting & painting",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: " ",
      service1: ["Paints services", "Body denting repair"],
      service2: [
         
      ],
more:7,
      popular: true,
    },
  ];

  const Windshield = [
    {
      name: "Windshield & glass",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      service1: [
        "Front windshield",
        "Rear windshield replacement",
        "Glasses",
        "Lights",
        "Rear lights",
        "Side mirror fog lamps",
      ],

      more: 0,
      popular: true,
    },
  ];
  const inspections = [
    {
      name: "Car inspections",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      service1: [
        "Second-hand car inspection",
        "Road trip inspection",
        "Engine scannings",
        "Insurance clam inspection",
        "Car fluid checks",
        "Spare parts inspections",
      ],

      popular: true,
    },
  ];

  const roadTrip = [
    {
      name: "Road trip plane",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      service1: [
        "Battery jumpstart",
        "Car engine scanning",
        "Car fluid leakage",
        "Tow",
        "Flatbed tow",
        "Break failure",
        "Car check-ups before & after",
      ],
      popular: true,
    },
  ];

  const Insurance = [
    {
      name: "Car inspections",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      service1: [
        "Know your policy",
        "Accidental denting painting",
        "Flood damage",
        "Fire damage",
        "Key replacement battery",
        "Tyer & wheel replacement",
        "Insurance claim",
      ],
      popular: true,
    },
  ];

  const detailing = [
    {
      name: "Detailing",
      planeName: "Basic",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: "Essentials",
      service1:["Polishing", "Time 4 hrs", "6-months warranty"],
      service2:["Car rubbings", "Ceramic coating", "Ppfs", "Teflon coatings","Panel repair ",
      "Scratch repair"],
      more:6,
      popular: true,
    },
  ];

 
  
  const Tyer = [ 
    {
      name: "Road trip plane",
      planeName: "MRF",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: "Essentials",
       service1:["Size", "5 years warranty", "Fitting cost included"],
      service2:["Free pickup & drop", "Tyre replacement at the services center", "Tires inspection for tread", "Alignment & balancing charge extra"],
       
      more: 4,
      popular: true,
    },
    {
      name: "Road trip plane",
      planeName: "Apollo",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      serviceName2: "Essentials",
       service1:["Size", "5 years warranty", "Fitting cost included"],
      service2:["Free pickup & drop", "Tyre replacement at the services center", "Tires inspection for tread", "Alignment & balancing charge extra"],
      
      more: 4,
      popular: true,
    },
  ];

  const submodle = [
    {
      name: "Detailing",
      planeName: "Monthly",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
     
      service1: ["Sos service", "Doorstep service", "Discount on spare parts", "Discount in services", "Additional services included"],
        
      popular: true,
    },
    {
      name: "Detailing",
      planeName: "Quaterly",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",
      
      service1:["Sos service", "Doorstep service", "Discount on spare parts", "Discount in services", "Additional services included"],
      
      
      popular: true,
    },
    {
      name: "Detailing",
      planeName: "Anually",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0,
      serviceName1: "Featers",  
      service1:["Sos service", "Doorstep service", "Discount on spare parts", "Discount in services", "Additional services included"],
      
     
      popular: true,
    },
  ];

  const parts = [
    {
      name: "Suspension",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/suspension.png")}
        ></img>
      ),
      services: ["Basic services", "Standard services ", "Inclusive services "],
      id: 1,
      dataName: "Periodic_Services",
    },
    {
      name: "Brake",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/brake.png")}
        ></img>
      ),
      services: ["Suggestions and selection as per brand "],
      id: 2,
     },
    {
      name: "Oil & fluid",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/oil.png")}
        ></img>
      ),
      services: ["Suggestions and selection as per brand "],
      id: 2,
     },
    {
      name: "Clutch system",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/clutch.png")}
        ></img>
      ),
      services: ["Suggestions and selection as per brand "],
      id: 2,
     },
    {
      name: "Upholstery",
      Icon: (
        <img
          className="iconImg"
          src={require("../../images/seat.png")}
        ></img>
      ),
      services: ["Suggestions and selection as per brand "],
      id: 2,
     },
    
  ];

  const all_parts=[
    {
      name: "Suspension",
      planeName: "Front Shock Absorber",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0, 
     Icon:require("../../images/suspension2.png")  
    },
    {
      name: "Brake",
      planeName: "Front Brake Pad",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0, 
     Icon:require("../../images/brake2.png")  
    },
    {
      name: "Oil & fluid",
      planeName: "Engine Oil",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0, 
     Icon:require("../../images/engine-oil.png")  
    },
    {
      name: "Oil & fluid",
      planeName: "Coolant",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0, 
     Icon:require("../../images/coolant.png")  
    },
    {
      name: "Clutch system",
      planeName: "Clutch Pressure Plate",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0, 
     Icon:require("../../images/clutch2.png")  
    },
    {
      name: "Upholstery",
      planeName: "Seat Covers",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0, 
     Icon:require("../../images/seat2.png")  
    },
    {
      name: "Upholstery",
      planeName: "Floor Mat",
      discprit: " either with meaningful text",
      price: 0,
      disPrice: 0,
      renwalPrice: 0, 
     Icon:require("../../images/cleaning.png")  
    },
  ]


  const selected = {
    border: "1px solid black",
  };


  useEffect(() => {
    let a = all_parts.filter(data=>data.name===selected_part)
    set_filterparts(a)
  }, [filterparts])
  
  return (
    <>
      <h2 className="heading45" >
        Our Services
      </h2>

      <div className="div76341">
        {service.map((data) => {
          return (
            <a href="#myservice">
              <div
                className="div789633 boxshodw"
                onClick={() => {
                  set_selected_serveice(data.name);
                  set_dataName(data.dataName);
                  set_seemore(false)
                }}
                style={data.name === selected_serveice ? selected : null}
              >
                <div>
                  {" "}
                  <span>{data.Icon}</span>
                  <span className="bolt">{data.name}</span>
                </div>
                {/* <span>
                 {
                   data.services.map(data2=>{
                     return <li>{data2}</li>
                    })
                  }
                </span> */}
              </div>
            </a>
          );
        })}
      </div>
      <div className="div6982">
        <h1 className=" " id="myservice">
          {selected_serveice}
        </h1>
        <div className="div723">
          {selected_serveice === "Periodic Services" ? (
            Periodic_Services.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                    {seemore ? (
                      <>
                        <div className="div789436">
                          <h4>{data.serviceName2}</h4>
                          {data.service2.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div>
                        <div className="div789436">
                          <h4>{data.serviceName3}</h4>
                          {data.service3.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div>
                      </>
                    ) : null}

                    <a
                      onClick={() => set_seemore(!seemore)}
                      className="seemore"
                    >
                      {!seemore ? `see more +` + data.more : "show less"}
                    </a>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Batteries" ? (
            Batteries.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                    {seemore ? (
                      <>
                        <div className="div789436">
                          <h4>{data.serviceName2}</h4>
                          {data.service2.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div>
                      </>
                    ) : null}

                    <a
                      onClick={() => set_seemore(!seemore)}
                      className="seemore"
                    >
                      {!seemore ? `see more +` + data.more : "show less"}
                    </a>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "AC & maintenance" ? (
            AC_maintenance.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                    {seemore ? (
                      <>
                        <div className="div789436">
                          <h4>{data.serviceName2}</h4>
                          {data.service2.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div>
                        <div className="div789436">
                          <h4>{data.serviceName3}</h4>
                          {data.service3.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div>
                      </>
                    ) : null}

                    <a
                      onClick={() => set_seemore(!seemore)}
                      className="seemore"
                    >
                      {!seemore ? `see more +` + data.more : "show less"}
                    </a>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Denting & Painting" ? (
            Denting.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                    {seemore ? (
                      <>
                        <div className="div789436">
                          <h4>{data.serviceName2}</h4>
                          {data.service2.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div>
                      </>
                    ) : null}

                    <a
                      onClick={() => set_seemore(!seemore)}
                      className="seemore"
                    >
                      {!seemore ? `see more +` + data.more : "show less"}
                    </a>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Windshield & glass" ? (
            Windshield.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Road trip plane" ? (
            roadTrip.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Spare parts" ? (
            <div className="div646213">
            <div>

            
           { parts.map((data) => {
              return (
                 
                  <div
                    className="div789633 boxshodw div864632"
                    onClick={() => {
                      set_selected_part(data.name);
                     
                    }}
                    style={data.name === selected_part ? selected : null}
                  >
                    <div>
                      {" "}
                      <span>{data.Icon}</span>
                      <span className="bolt">{data.name}</span>
                    </div>
                    {/* <span>
                     {
                       data.services.map(data2=>{
                         return <li>{data2}</li>
                        })
                      }
                    </span> */}
                  </div>
                 
              );
            })}
            </div>
            <div className="div4643 flex_center_center gap20">
              {
                filterparts.map(data=>{
                  return(
                    <div className="pati boxshodw">
                    <span>
                      <h1 className="heding425">{data.planeName}</h1>
                     </span>
                    <span className="div85623">
                      <div>
                        <span>${data.price} </span>
                        <span className="OFFdisc">
                          SAVE{" "}
                          {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                        </span>
                      </div>
                      <div className="div8546">
                        <p className="p683">$</p>
                        <p className="price">{data.disPrice}</p>
                        <p className="p683">/mo</p>
                      </div>
                    </span>
                    <div className="div89653">
                      <button>Add to cart</button>
                      
                    </div>
                    <div>
                      <hr />
                      <div className="div789436">
                        <img src={data.Icon} className="image4654" alt="" />
                      </div>
                    </div>
                  </div>
                  )
                })
              }

            </div>
            </div>
          ) : selected_serveice === "Subcripion Model" ? (
            submodle.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                   
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Car Ispection" ? (
            inspections.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Insurance Claim" ? (
            Insurance.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          ): selected_serveice === "Detailing" ? (
            detailing.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                    {seemore ? (
                      <>
                        <div className="div789436">
                          <h4>{data.serviceName2}</h4>
                          {data.service2.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div> 
                      </>
                    ) : null}

                    <a
                      onClick={() => set_seemore(!seemore)}
                      className="seemore"
                    >
                      {!seemore ? `see more +` + data.more : "show less"}
                    </a>
                  </div>
                </div>
              );
            })
          ) : selected_serveice === "Tyer & Wheels" ? (
            Tyer.map((data) => {
              return (
                <div className="pati boxshodw">
                  <span>
                    <h1 className="heding425">{data.planeName}</h1>
                     
                  </span>
                  <span className="div85623">
                    <div>
                      <span>${data.price} </span>
                      <span className="OFFdisc">
                        SAVE{" "}
                        {(100 - (data.disPrice / data.price) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="div8546">
                      <p className="p683">$</p>
                      <p className="price">{data.disPrice}</p>
                      <p className="p683">/mo</p>
                    </div>
                  </span>
                  <div className="div89653">
                    <button>Add to cart</button>
                     
                  </div>
                  <div>
                    <hr />
                    <div className="div789436">
                      <h4>{data.serviceName1}</h4>
                      {data.service1.map((li) => {
                        return <li>{li}</li>;
                      })}
                    </div>
                    {seemore ? (
                      <>
                        <div className="div789436">
                          <h4>{data.serviceName2}</h4>
                          {data.service2.map((li) => {
                            return <li>{li}</li>;
                          })}
                        </div>
                        
                      </>
                    ) : null}

                    <a
                      onClick={() => set_seemore(!seemore)}
                      className="seemore"
                    >
                      {!seemore ? `see more +` + data.more : "show less"}
                    </a>
                  </div>
                </div>
              );
            })
          ): null}
        </div>
      </div>
      <div id="about">

      </div>
    </>
  );
};

export default Service;
