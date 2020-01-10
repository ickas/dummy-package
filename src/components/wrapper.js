import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
