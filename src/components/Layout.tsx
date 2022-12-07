import React from "react";

import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledLayout = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledLayout>
      <Sidebar />
      {children}
    </StyledLayout>
  );
};

export default Layout;
