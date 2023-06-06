import * as React from "react";
import "./Settingtoggle.css";

const Settingtoggle = ({ header }) => {
  const greeting = "Settings Loading...";

  const [isShow, setShow] = React.useState(false);

  const handleToggle = () => {
    setShow(!isShow);
    console.log("clicked");
  };

  return (
    <div>

      <button onClick={handleToggle} type="button" className="header-btn">
        {header}
      </button>

      {isShow ? <Welcome text={greeting} /> : null}
      
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Settingtoggle;