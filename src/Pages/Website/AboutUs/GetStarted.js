import React from "react";
import FilledBtn from "../../../components/Button/FilledBtn";


const GetStarted = ({title, content}) => {
  return (
    <div className = 'get-Started'>
      <h3>{title}</h3>
      <p>{content}</p>
      <FilledBtn title={'Get Started'}/>
    </div>
  );
};

export default GetStarted;