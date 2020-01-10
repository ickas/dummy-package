import React from "react";

const AwesomeCard = props => {
  const {
    children
  } = props;
  return React.createElement("div", null, children);
};

export default AwesomeCard;