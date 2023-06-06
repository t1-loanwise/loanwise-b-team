import * as React from "react";
import "./Settingtoggle.css";

const Settingtoggle = ({ header, subHeader }) => {
  const [isShow, setShow] = React.useState(false);

  const handleToggle = () => {
    setShow(!isShow);
    console.log("clicked");
  };

  // const greeting = "Loading...";
  // const Welcome = ({ text }) => {
  //   return <h1>{text}</h1>;
  // };

  return (
    <div className="Container">
      <button onClick={handleToggle} type="button" className="header-btn">
        <h1>{header}</h1>
        <p>{subHeader}</p>
      </button>

      {isShow && (
        <ul class="list-group">
          <li class="list-group-item">Item</li>
          <li class="list-group-item">Second item</li>
          <li class="list-group-item">Third item</li>
          <li class="list-group-item">Fourth item</li>
          <li class="list-group-item">Fifth item</li>
        </ul>
      )}
    </div>
  );
};

export default Settingtoggle;
