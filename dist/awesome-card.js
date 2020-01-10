import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Card = styled.div`
  margin: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 20px;

  h1 {
    margin: 0;
  }

  p {
    margin: 20px 0 0;
  }
`;

const AwesomeCard = props => {
  const {
    title,
    description
  } = props;
  return React.createElement(Card, null, React.createElement("h1", null, title), React.createElement("p", null, description));
};

AwesomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default AwesomeCard;