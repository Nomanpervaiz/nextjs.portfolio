import { myWork } from "@/utility/myWork";
import React from "react";
import { ThreeDCardDemo } from "./3dCardEffect";


const filterWork = myWork.filter((workObj)=> workObj.id <= 4)
function MapCard({limit ,prefix = "default"}) {

    const workItems = limit ? filterWork : myWork;
    
  return (
    <>
      {
      
      workItems.map((workObj) => {
        return (
          <ThreeDCardDemo
            key={workObj.id}
            name={workObj.name}
            link={workObj.link}
            description={workObj.description}
            thumbnail={workObj.thumbnail}
          />
        )
      }
    ) 
}
    </>
  );
}

export default MapCard;
