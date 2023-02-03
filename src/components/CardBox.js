import React from "react";
import Card from "./Card";


const CardBox = ({robots}) => {
  return (
    <div className="boxs">
      {robots.map((robot, index) => {
        return (
          <Card
            key={index}
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
          />
        );
      })}
    </div>
  );
};

export default CardBox;
