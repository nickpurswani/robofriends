import React from "react";
import Card from "./Card";
import "tachyons";

const CardList = ({robots})=>{
    
return(
    <div>
      {
      robots.map((robot)=>{
        return( <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}></Card>
      );
   }) 
      }
    </div>
);
};
export default CardList;