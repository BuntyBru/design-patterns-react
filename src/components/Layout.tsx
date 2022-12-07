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
  width: 100%;
  box-sizing: border-box;
`;

const StyledChildHolder = styled.div`
  padding-left: 140px;
  box-sizing: border-box;
  width:100%
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledChildHolder>{children}</StyledChildHolder>
    </StyledLayout>
  );
};

export default Layout;
