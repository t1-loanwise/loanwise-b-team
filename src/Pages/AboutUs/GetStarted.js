import React from "react";

const GetStarted = ({title, content}) => {
  return (
    <div className = 'get-Started'>
      <h3>{title}</h3>
      <p>{content}</p>
      <button>Get Started</button>
    </div>
  );
};

export default GetStarted;