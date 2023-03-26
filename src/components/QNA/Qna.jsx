import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Qna = () => {
  const [id, setid] = useState(0);
  const QnA = [
    {
      Q: "What are different service offered by car o bar ?",
      N: "we offer variety of services from battery replacement, periodic services, car detailing /denting, painting, upholstery and many more.",
      id: 1,
    },
    {
      Q: "why should you get your vehicle served by carobar ?",
      N: "we offers quality, fast, flexible & reliable service to the vehicle which saves your time and money your vehicle get served from an expert mechanics.",
      id: 2,
    },
    {
      Q: "How can I book appointment on carobar ?",
      N: "by simply selecting the vehicles brand in desired service section on web or app you will get the reservation and your can drive to the nearest garage or can choose for free pickup and drop service",
      id: 3,
    },
    
  ];

  return (
    <>
      <h2 className="heading45" id="Qna">How it works</h2>
      <div className="div65323 flex_center_center">
        <div className="div96553 boxShodw">
          {QnA.map((data, index) => {
            return (
              <div className="flex flex_column qnaBx gap5">
                <span className=" flex gap10">
                  <p>
                    Q.{index + 1} {data.Q}
                  </p>

                  {id === 0 ? (
                    <AddIcon
                      onClick={() => setid(data.id)}
                      className="addIcon"
                    ></AddIcon>
                  ) : id === data.id ? (
                    <RemoveIcon
                      onClick={() => setid(0)}
                      className="addIcon"
                    ></RemoveIcon>
                  ) : (
                    <AddIcon
                      onClick={() => setid(data.id)}
                      className="addIcon"
                    ></AddIcon>
                  )}
                </span>
                {id === data.id ? (
                  <span className="ans">Ans. {data.N}</span>
                ) : null}
                <hr className="hr12" />
              </div>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
};

export default Qna;
