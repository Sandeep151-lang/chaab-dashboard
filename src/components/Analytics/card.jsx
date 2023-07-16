import React, { useEffect, useState } from "react";
import CardIcon from "../../Icons/cardicon";
import { cardData } from "./cardData";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(cardData);
  }, []);

  return (
    <div className="card-head">
      {data.map((i) => {
        const {
          cardheader,
          cardboldnumber,
          cardpercentage,
          cardnumber,
          image,
          color,
        } = i;
        return (
          <>
            <div className="card-section">
              <p className="card-header">{cardheader}</p>

              <div className="card-body">
                <div className="left-section">
                  <p className="card-bold-number">{cardboldnumber}</p>
                  <div className="left-section-footer">
                    <div
                      className={
                        color === "green"
                          ? "card-percentage-section"
                          : "card-percentage-section-color"
                      }
                    >
                      <CardIcon
                        color={color}
                        className="card-icon"
                        width="16px"
                      />
                      <p
                        className={
                          color === "green"
                            ? "card-percentage"
                            : "card-percentage-color"
                        }
                      >
                        {cardpercentage}
                      </p>
                    </div>
                    <p className="card-number">{cardnumber}</p>
                  </div>
                </div>

                <div className="right-section">
                  <img className="card-image" src={image} alt="vector" />
                  <div className="card-days">
                    <p>M</p>
                    <p>T</p>
                    <p>W</p>
                    <p>T</p>
                    <p>F</p>
                    <p>S</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
