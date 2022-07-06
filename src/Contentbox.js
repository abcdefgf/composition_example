import React from "react";

const Contentbox = (props) => {
  return (
    <React.Fragment
      style={{
        border: `5px solid ${props.color}`,
        textAlign: `center`,
        color: `${props.color}`
      }}
    >
      {props.children}
    </React.Fragment>
  );
};

export default Contentbox;
