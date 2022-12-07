import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavigationbar = styled.div`
  display: flex;
  gap: 20px;
  width: 100px;
  position: fixed;
  top: 0px;
  padding: 60px 20px;
  color: white;
  background: #011729;;
  justify-content: flex-start;
  left: 0px;
  height: 100vh;
  flex-direction: column;

}
  a {
    color: white;
    font-weight: 600;
    text-align:initial;
  }
`;

const Sidebar = () => {
  return (
    <StyledNavigationbar>
      <Link to="/">Con/Pres</Link>
      <Link to="/hoc-pattern">HOC</Link>
      <Link to="/render-props-pattern">Render Props</Link>
      <Link to="/other-hook">Hook</Link>
      <Link to="/hoc-stuff">Provider</Link>
    </StyledNavigationbar>
  );
};

export default Sidebar;
