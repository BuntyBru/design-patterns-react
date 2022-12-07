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

const StyledChildHolder = styled.div`
  margin-left: 100px;
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
