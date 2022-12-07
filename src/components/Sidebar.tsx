import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavigationbar = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  position: fixed;
  top: 0px;
  padding: 10px 20px;
  color: white;
  background: #1f5f97;
  justify-content: center;
  a {
    color: white;
    font-weight: 900;
  }
`;

const Sidebar = () => {
  return (
    <StyledNavigationbar>
      <Link to="/">TicTacToe</Link>
      <Link to="/tilt">Tilt</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/other-hook">otherHook</Link>
      <Link to="/hoc-stuff">hoc</Link>
    </StyledNavigationbar>
  );
};

export default Sidebar;
