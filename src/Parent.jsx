import React from "react";
import Child from "./Child";
import Secondchild from "./Secondchild";

const Parent = () => {
  const studentDetails = [
    { id: 1, name: "abc", mark: 75 },
    { id: 2, name: "def", mark: 55 },
    { id: 3, name: "ghi", mark: 100 },
  ];
  
  const fullData = {studentDetails: studentDetails}

  const eventEmitterFunc = (data) => {

    console.log(data, "Parent");

  }


  return (
    <>
      <div>Parent</div>
      {/* <Child data={studentDetails}  fullData = {fullData}/> */}
      <Secondchild details={studentDetails} eventFunc = {eventEmitterFunc}/>
    </>
  );
};

export default Parent;
