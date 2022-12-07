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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledLayout>
      <Sidebar />
      {children}
    </StyledLayout>
  );
};

export default Layout;
